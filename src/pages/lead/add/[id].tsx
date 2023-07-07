import Head from 'next/head'
import React from 'react'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import cn from 'classnames'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import {
  CreateStep1,
  CreateStep2,
  CreateStep3,
  CreateStep4,
  CreateStep5,
  CreateStep6,
  CreateStep7,
  CreateStep8,
  CreateStep9,
  CreateStep10,
  CreateStep11, CreateStep6Land, CreateStep4Commercial,
} from '@/modules/Customer'
import { ParsedUrlQuery } from 'querystring'
import {CreateStep5Full} from "@/modules/Customer/CreateStep5Full";

export default function MakeLeadSteps(): JSX.Element {
  const router = useRouter()
  const stepId = parseInt(router.query['id'] as string) as number

  return (
    <>
      <Head>
        <title>Miraden - Создать заявку</title>
      </Head>
      <BlankLayout>
        <StyledPage className={'ContainerFull'}>
          <div className={cn('PageWrapper')}>
            <div className={cn('PageContent')}>
              <div className="Reg">{renderStep(router.query)}</div>
            </div>
          </div>
        </StyledPage>
      </BlankLayout>
    </>
  )
}

function renderStep(current: ParsedUrlQuery): JSX.Element {
  const step = parseInt(current.id as string)
  if(step === 1) {
    return <CreateStep1 />
  }

  if(step === 2) {
    return <CreateStep2 />
  }

  if(step === 3) {
    return <CreateStep3 />
  }

  if(step === 4) {
    if("full" in current) {
      return <CreateStep5 />
    }
    if("commercial" in current) {
      return <CreateStep4Commercial />
    }
    return <CreateStep4 />
  }

  if(step === 5) {
    if("sell" in current) {
      return <CreateStep5Full/>
    }
    return <CreateStep5 />
  }

  if(step === 6) {
    if("land" in current) {
      return <CreateStep6Land />
    }
    return <CreateStep6 />
  }

  if(step === 7) {
    return <CreateStep7 />
  }

  if(step === 8) {
    return <CreateStep8 />
  }

  if(step === 9) {
    return <CreateStep9 />
  }

  if(step === 10) {
    return <CreateStep10 />
  }

  if(step === 11) {
    return <CreateStep11 />
  }

  return <></>
}

const StyledPage = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;
  margin-top: 30px;

  .PageWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .PageContent {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
  }
`
