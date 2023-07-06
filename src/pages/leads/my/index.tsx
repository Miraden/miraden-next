import Head from 'next/head'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import { Header } from '@/modules/Base/Header'
import styled from 'styled-components'
import React from 'react'
import { ApplicationFull } from '@/modules/ApplicationsFull/Application'

enum TabsMenuState {
  All = 0,
  Published = 1,
  Archived = 2,
}

export default function MyLeadsPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Miraden - Мои Заявки</title>
      </Head>
      <BlankLayout>
        <Header isAuthorized={true} />
        <StyledMyLeads className={'ContainerFull'}>
          <ApplicationFull className="Application" />
        </StyledMyLeads>
      </BlankLayout>
    </>
  )
}

const StyledMyLeads = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;

  .LeadsWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .LeadsContent {
    grid-column: 5 / span 10;
    min-width: 970px;
    max-width: 970px;
  }
`
