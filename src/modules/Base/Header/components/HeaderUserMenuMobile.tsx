import { Button } from '@/components/ui'
import { MessagesIcon, MiradenLogoMobile, StarIcon } from '@/icons'
import { WalletIcon } from '@/icons/WalletIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { HeaderMenu } from './HeaderMenu'
import Image from 'next/image'
import { useAppContext } from '@/infrastructure/nextjs/useAppContext'

interface Props {
  isAuth: boolean
}

const HeaderUserMenuMobile = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const router = useRouter()
  const currentUrl = router.pathname
  const app = useAppContext()
  return (
    <StyledHeaderUserMenuMobile>
      <Link href="/" className="HeaderMobile__logoLink">
        <MiradenLogoMobile />
      </Link>
      <div className="HeaderUserMenu">
        <div className="HeaderUserMenu__links">
          <Button
            href="/chats"
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<MessagesIcon />}
            active={currentUrl === '/chats'}
          ></Button>
          <Button
            header
            href="/favorites"
            className="HeaderUserMenu__linkButton"
            leftIcon={
              <StarIcon attr={{ className: 'HeaderUserMenu__favorites' }} />
            }
            active={currentUrl.includes('favourites')}
          ></Button>
          <Button
            header
            className="HeaderUserMenu__linkButton"
            leftIcon={<WalletIcon />}
          >
            {app.userProfile?.balance} €
          </Button>
        </div>
        <button onClick={handleOpenMenu}>
          <div className="User Font_16_140 Color_white">
            {app.userProfile && (
              <Image
                src={app.userProfile?.photo}
                alt={'user_photo'}
                width={40}
                height={40}
              />
            )}
          </div>
        </button>
        {isOpen && <HeaderMenu isOpen={isOpen} isAuth={props.isAuth} />}
      </div>
    </StyledHeaderUserMenuMobile>
  )
}

const StyledHeaderUserMenuMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .HeaderUserMenu {
    display: flex;
  }

  .HeaderUserMenu__links,
  .HeaderUserMenu__buttons {
    display: flex;
    align-items: center;
  }

  .HeaderUserMenu__links {
    a:not(:first-child) {
      margin-left: 8px;
    }
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

  .User {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.border.radius};
    background: #8ec2b9;

    img {
      border-radius: ${({ theme }) => theme.border.radius};
    }
  }
`

export { HeaderUserMenuMobile }
