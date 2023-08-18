import { Notification } from '@/components/ui'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

export default function NotificationsPage() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Container">
        <Link href="/ui-kit">Go back</Link>
        <h1 className="Font_52_120">Notifications</h1>
        <StyledNotifications>
          <Notification message={'Message'} title={'Title'} />
          <Notification error message={'Notify error'} title={'Title'} />
          <Notification success message={'Notify success'} title={'Title'} />
          <Notification compact title={'Title'} />
          <Notification compact error title={'Title'} />
          <Notification compact success title={'Title'} />
        </StyledNotifications>
      </main>
    </>
  )
}

const StyledNotifications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
