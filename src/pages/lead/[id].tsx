import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import { Header } from '@/modules/Base/Header'
import AuthManager from '@/modules/Security/Authentication/AuthManager'
import styled from 'styled-components'
import cn from 'classnames'
import { StyledMenu } from '@/components/ui/TabsMenu'
import { BackIcon20 } from '@/icons'
import { Button } from '@/components/ui'
import {theme} from "../../../styles/tokens";
import {
  SingleApplication
} from "@/modules/Applications/Application/components/SingleApplication";

const LeadEntry = () => {
  const [isUserAuth, setUserAuth] = useState(false)
  useEffect(() => {
    const authManger = new AuthManager()
    setUserAuth(authManger.isUserHasToken())
  }, [isUserAuth])

  return (
    <>
      <Head>
        <title>Miraden - Заявка</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={isUserAuth} />
        <StyledLead className={'ContainerFull'}>
          <div className={'LeadWrapper'}>
            <div className={cn('LeadContent')}>
              <StyledMenu className={cn('PageHeader')}>
                <div className={'Menu__header Font_headline_3'}>
                  <Button
                    secondary
                    href={'/leads'}
                    className="Menu__header_backButton"
                  >
                    <BackIcon20
                      width={20}
                      height={20}
                      className="Menu__header_backArrow"
                    />
                  </Button>
                  <h1 className="Font_headline_3">Лента заявок</h1>
                </div>
              </StyledMenu>

              <SingleApplication className={"PageLead"} />
            </div>
          </div>
        </StyledLead>
      </BlankLayout>
    </>
  )
}

const StyledLead = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;

  .LeadWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .LeadContent {
    grid-column: 5 / span 10;
    min-width: 970px;
    max-width: 970px;
    background: #fff;
    border-radius: ${theme.border.radius};
    padding: 20px;
    margin-top: 30px;
  }

  .Lead__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .PageHeader {
    background: transparent;
    margin: 0;
    border-bottom: 1px solid ${theme.colors.stroke.divider};
    border-radius: 0;
    padding: 0 0 20px;
  }

  .PageLead {
    padding: 0;
  }
`

export default LeadEntry
