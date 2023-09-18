import { Button } from '@/components/ui'
import { MessagesIcon, PlusIcon, StarIcon } from '@/icons'
import { WalletIcon } from '@/icons/WalletIcon'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import MenuDropDownLayout from '@/modules/Base/Header/components/CommonDropdown/MenuDropDownLayout'
import MenuDropDownLinks from '@/modules/Base/Header/components/CommonDropdown/MenuDropDownLinks'
import MenuDropDownItem from '@/modules/Base/Header/components/CommonDropdown/MenuDropDownItem'
import AuthManager from '@/modules/Security/Authentication/AuthManager'

const HeaderUserMenu = () => {
  const router = useRouter()
  const currentUrl = router.pathname
  const app = useAppContext()

  const [userMenuShow, setUserMenuShow] = useState<boolean>(false)

  const onAvatarClick = useCallback(
    (e: any) => {
      setUserMenuShow(!userMenuShow)
    },
    [userMenuShow]
  )

  const onProfileItemClick = useCallback((e: any) => {
    window.location.href = '/profile'
  }, [])

  const onLogoutItemClick = useCallback((e: any) => {
    AuthManager.Logout()
    window.location.reload()
  }, [])

  return (
    <StyledHeaderUserMenu>
      <div className="HeaderUserMenu">
        <div className="HeaderUserMenu__links">
          <Button
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<MessagesIcon />}
            active={currentUrl === '/chats'}
            href="/chats"
          ></Button>
          <Button
            href="/favorites"
            header
            className="HeaderUserMenu__linkButton"
            active={currentUrl === '/favorites'}
            leftIcon={
              <StarIcon attr={{ className: 'HeaderUserMenu__favorites' }} />
            }
          ></Button>
          <Button
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<WalletIcon />}
          >
            {app.userProfile?.balance} €
          </Button>
        </div>

        <div className="HeaderUserMenu__buttons">
          <Button
            href="/lead/add"
            leftIcon={<PlusIcon />}
            className="HeaderUserMenu__createButton Font_12_16_600"
          >
            создать
          </Button>
          <Button className={'UserName'} onClick={onAvatarClick}>
            <div className="User Font_16_140 Color_white">
              {app.userProfile && (
                <Image
                  src={app.userProfile?.photo}
                  alt={'user_photo'}
                  width={40}
                  height={40}
                />
              )}
              {userMenuShow && (
                <MenuDropDownLayout>
                  <MenuDropDownLinks>
                    <MenuDropDownItem onClick={onProfileItemClick}>
                      Профиль
                    </MenuDropDownItem>
                    <MenuDropDownItem onClick={onLogoutItemClick}>
                      Выход
                    </MenuDropDownItem>
                  </MenuDropDownLinks>
                </MenuDropDownLayout>
              )}
            </div>
          </Button>
        </div>
      </div>
    </StyledHeaderUserMenu>
  )
}

const StyledHeaderUserMenu = styled.div`
  .HeaderUserMenu,
  .HeaderUserMenu__links,
  .HeaderUserMenu__buttons {
    display: flex;
    align-items: center;
  }

  .HeaderUserMenu__buttons {
    gap: 20px;
  }

  .Button_regular.UserName {
    padding: 0;
  }

  .HeaderUserMenu__links {
    a:not(:first-child),
    button:not(:first-child) {
      margin-left: 8px;
    }
  }

  .HeaderUserMenu__linkButton {
    padding: 11px;
  }

  .HeaderUserMenu__favorites {
    path {
      fill: #fff;
    }
  }

  .HeaderUserMenu__buttons {
    margin-left: 10px;

    button:not(:first-child) {
      margin-left: 20px;
    }
  }

  .HeaderUserMenu__createButton {
    text-transform: uppercase;
    padding: 11px 24px;
  }

  .HeaderUserMenu__wallet {
    path {
      stroke: #fff;
    }
  }

  .User {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.border.radius};
    background: #8ec2b9;
    position: relative;

    img {
      border-radius: ${({ theme }) => theme.border.radius};
    }
  }
`

export { HeaderUserMenu }
