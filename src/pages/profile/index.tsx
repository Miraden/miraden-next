import Head from 'next/head'
import React, { useCallback, useState, useTransition } from 'react'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import cn from 'classnames'
import styled from 'styled-components'
import { Header } from '@/modules/Base/Header'
import AuthManagerServer from '@/modules/Security/Authentication/AuthManagerServer.server'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import { TabMenuItem, TabsManager } from '@/components/ui/TabsMenu'
import AuthFormLayout from '@/modules/Security/AuthFormLayout'
import { Login } from '@/modules/Security/Login/Login'
import Modal from '@/components/ui/Modal'
import TabsMenuLayout from '@/components/ui/TabsMenu/TabsMenuLayout'
import TabsMenuLink from '@/components/ui/TabsMenu/TabsMenuLink'
import TabMenuLinks from '@/components/ui/TabsMenu/TabMenuLinks'
import PersonalTab from '@/modules/Customer/Profile/PersonalTab'
import SecurityTab from '@/modules/Customer/Profile/SecurityTab'
import { theme } from '../../../styles/tokens'

const desktop: string = theme.breakpoints.desktop.max + 'px'
const tablet: string = theme.breakpoints.tablet.max + 'px'
const mobile: string = theme.breakpoints.mobile.max + 'px'

enum TabsEnum {
  Personal = 0,
  Security = 1,
}

const tabsManager: TabsManager = new TabsManager()
tabsManager.addItem(new TabMenuItem('Личные данные', 0, <PersonalTab />))
tabsManager.addItem(new TabMenuItem('Безопасность', 0, <SecurityTab />))

export default function ProfilePage(pageProps: any): JSX.Element {
  const app = useAppContext()
  const [isUserAuth, setUserAuth] = useState<boolean>(app.isUserAuth)

  const onLoginSuccess = useCallback(() => {
    setUserAuth(true)
    app.isUserAuth = true
  }, [app])

  return (
    <>
      <Head>
        <title>Miraden - Личный кабинет</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} isReady={true} />
        <StyledPage className={'ContainerFull'}>
          {!isUserAuth && <RenderLogin onSuccess={onLoginSuccess} />}
          {isUserAuth && <RenderProfilePage />}
        </StyledPage>
      </BlankLayout>
    </>
  )
}

interface LoginProps {
  onSuccess?: Function
  onFailure?: Function
  onResponse?: Function
}

const RenderLogin = (props: LoginProps): JSX.Element => {
  return (
    <Modal>
      <AuthFormLayout inModal={true}>
        <Login onSuccess={props.onSuccess} />
      </AuthFormLayout>
    </Modal>
  )
}

const RenderProfilePage = (): JSX.Element => {
  const [isPending, startTransition] = useTransition()
  const [selectedTab, setSelectedTab] = useState<number>(TabsEnum.Personal)

  const onSelect = useCallback((id: number) => {
    startTransition(() => {
      setSelectedTab(id)
    })
  }, [])

  return (
    <div className={cn('PageWrapper')}>
      <div className={cn('PageContent')}>
        <div className="Profile__content">
          <TabsMenuLayout>
            <div className={'Menu__header Font_headline_3'}>
              <h1 className="Font_headline_3">Мой аккаунт</h1>
            </div>
            <TabMenuLinks>
              {tabsManager.getAll().map((item: TabMenuItem, id) => {
                return (
                  <TabsMenuLink
                    onClick={(e: any) => onSelect(id)}
                    isActive={selectedTab === id}
                    key={id}
                  >
                    {item.getLabel()}
                  </TabsMenuLink>
                )
              })}
            </TabMenuLinks>
          </TabsMenuLayout>
          <div className="UserContent">
            {tabsManager.getItem(selectedTab)?.getContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const tokenCookie: string | undefined = context.req.cookies.token
  if (!tokenCookie) {
    return { props: { isUserAuth: false, userToken: '' } }
  }
  const authManager = new AuthManagerServer()
  const isUserAuth: boolean = await authManager.validateToken(tokenCookie)
  let userProfile: User.PublicProfile | null = null
  if (isUserAuth) {
    userProfile = await authManager.getMyProfile(tokenCookie)
  }
  return {
    props: {
      isUserAuth: isUserAuth,
      userToken: tokenCookie,
      userProfile: userProfile,
    },
  }
}

const StyledPage = styled.div`
  max-width: calc(1920px);
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;
  margin: 30px auto 50px;
  width: 100%;

  .PageWrapper {
    position: relative;
    width: 100%;
    display: flex;
    grid-gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .PageContent {
    min-width: 970px;
    max-width: 970px;
    margin: 0 auto;
  }

  .UserContent {
    margin-top: 20px;
  }

  @media (max-width: ${tablet}) {
    .PageWrapper {
      padding-left: 0;
      padding-right: 0;
    }

    .PageContent {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
  }
`
