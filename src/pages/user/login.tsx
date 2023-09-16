import { Login } from '@/modules/Customer'
import Head from 'next/head'
import styled from 'styled-components'
import React, { useCallback, useState } from 'react'
import AuthFormLayout from '@/modules/Security/AuthFormLayout'
import { Notification } from '@/components/ui'

interface NotifyContent {
  title: string
  message: string
}

export default function LoginPage() {
  const [isNotifyVisible, setNotifyVisible] = useState<boolean>(false)
  const [notifyMessage, setNotifyMessage] = useState<NotifyContent>({
    message: '',
    title: '',
  })

  const onSuccess = useCallback(() => {
    window.location.href = '/'
  }, [])

  const onFailure = useCallback((error: string) => {
    setNotifyMessage({ title: '', message: error })
    setNotifyVisible(true)
    setTimeout(() => {
      setNotifyVisible(false)
      setNotifyMessage({ title: '', message: '' })
    }, 3000)
  }, [])

  return (
    <>
      <Head>
        <title>Miraden - Login</title>
      </Head>
      <StyledMain>
        <AuthFormLayout>
          <Login onSuccess={onSuccess} onFailure={onFailure} />
        </AuthFormLayout>
        {isNotifyVisible && (
          <div className={'Notifications'}>
            <Notification
              error
              title={notifyMessage.title}
              message={notifyMessage.message}
            />
          </div>
        )}
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  background: #eef1f5;
  min-height: 100vh;

  .Notifications {
    position: fixed;
    z-index: 1000;
    top: 20px;
    right: 20px;
    transform: translateX(-50%);
  }
`
