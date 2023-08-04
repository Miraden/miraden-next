import Head from 'next/head'
import React, { useCallback, useEffect, useState } from 'react'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import cn from 'classnames'
import styled from 'styled-components'
import { theme } from '../../../../styles/tokens'
import LeadMakerWorkFlow, {
  StateDirection,
  SupportStates,
} from '@/modules/Leads/Maker/LeadMakerWorkFlow'
import { Button, PayForm } from '@/components/ui'
import { ArrowsIcon } from '@/icons/ArrowsIcon'

const desktop: string = theme.breakpoints.desktop.max + 'px'
const tablet: string = theme.breakpoints.tablet.max + 'px'
const mobile: string = theme.breakpoints.mobile.max + 'px'

let isNeedUpdate = true

export default function AddLead(): JSX.Element {
  const [showPayForm, setShowPayForm] = useState<boolean>(false)
  const [currentState, setCurrentState] = useState<number | string>(
    SupportStates.Intro
  )
  const [workflow, setWorkflow] = useState<LeadMakerWorkFlow>(
    new LeadMakerWorkFlow()
  )

  const [render, forceRender] = useState<boolean>(false)

  useEffect(() => {
    const forceUpdate = (): void => {
      if (isNeedUpdate) {
        isNeedUpdate = false
        forceRender(!render)
      }
    }

    workflow.rules(currentState)
    workflow.onState((direction: StateDirection): void => {
      isNeedUpdate = !isNeedUpdate
      if (
        direction === StateDirection.Backward &&
        currentState === SupportStates.Intro
      ) {
        window.location.href = '/'
        return
      }
      if (
        direction === StateDirection.Forward &&
        currentState === SupportStates.Payment
      ) {
        setShowPayForm(true)
      }
      setCurrentState(workflow.getCurrentState())
    })

    workflow.onContentChange((e: any) => {
      isNeedUpdate = !isNeedUpdate
      forceUpdate()
      console.log(e)
    })

    forceUpdate()
  }, [currentState, render, workflow])

  const onClosePayForm = useCallback((e: any) => {
    setShowPayForm(false)
  }, [])

  const onPrevClick = useCallback(
    (e: any) => {
      workflow.onPrev(e)
    },
    [workflow]
  )

  const onNextClick = useCallback(
    (e: any) => {
      workflow.onNext(e)
    },
    [workflow]
  )

  return (
    <>
      <Head>
        <title>Miraden - Создать заявку</title>
      </Head>
      <BlankLayout>
        <StyledPage className={'ContainerFull'}>
          <div className={cn('PageWrapper')}>
            <div className={cn('PageContent')}>
              <div className="StepsWrapper">
                <div className="Steps__header">
                  <h1 className={'Font_headline_3'}>
                    {workflow.findData(currentState).title}
                  </h1>
                </div>
                <div className="Steps__body">
                  {workflow.findData(currentState).body}
                </div>
                <div className="Steps__footer">
                  <div className="Steps__progressBar">
                    {workflow.isCurrentProgressBarVisible() && (
                      <div
                        className="Steps__progressCurrent"
                        style={{
                          width: workflow.calcProgress(currentState) + '%',
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="Steps__footerBody">
                    <div className="Steps__footerLeft">
                      <Button
                        secondary
                        onClick={onPrevClick}
                        disabled={workflow.isPrevTransitionLocked()}
                        className="Step__goBackButton"
                        leftIcon={<ArrowsIcon left={true} />}
                      >
                        {workflow.findData(currentState).prevUrlLabel}
                      </Button>
                      {workflow.isStepsStatsVisible() && (
                        <div className="Reg__footerSteps">
                          <span className="Font_16_24">Шаг</span>
                          <div className="Reg__stepCounts">
                            <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                              {currentState}
                            </span>
                            <span>&nbsp;/&nbsp;</span>
                            <span className="Font_16_140 Color_text_grey">
                              {workflow.getTotalSteps()}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="Steps__footerRight">
                      {workflow.isSellersStatsVisible() && (
                        <div className="Steps__sellers">
                          <span className="Color_text_grey Font_16_24">
                            Найдено продавцов
                          </span>
                          <p className="Color_blue_primary Font_16_140">317</p>
                        </div>
                      )}
                      <Button
                        onClick={onNextClick}
                        disabled={workflow.isNextTransitionLocked()}
                      >
                        {workflow.findData(currentState).nextUrlLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledPage>

        {showPayForm && <PayForm onClose={onClosePayForm} />}
      </BlankLayout>
    </>
  )
}

const StyledPage = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;
  flex-grow: 1;

  .PageWrapper {
    position: relative;
    width: 100%;
    display: flex;
    grid-gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
    margin-top: 150px;
  }

  .PageContent {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
  }

  .StepsWrapper {
    background: #fff;
    margin: 0 auto;
    border-radius: ${theme.border.radius};
    height: 600px;
    display: flex;
    flex-direction: column;
  }

  .Step__goBackButton .Button__iconContainer {
    display: none;
  }

  .Steps {
    &__header {
      padding: 30px 30px 20px 30px;
      border-bottom: 2px solid ${theme.colors.stroke.dividerForm};
    }

    &__body {
      flex-grow: 1;
      overflow-y: auto;

      & > section {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }

    &__footerBody {
      padding: 20px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__footerLeft,
    &__footerRight {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    &__progressBar {
      position: relative;
      height: 6px;
      background-color: #d4ddee;
    }

    &__progressCurrent {
      position: absolute;
      left: 0;
      height: 100%;
      background: ${theme.colors.main};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      transition: width 200ms;
    }

    &__sellers {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .Reg__footerSteps {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.text.grey};
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    & {
      padding: 10px;
    }

    .PageWrapper {
      display: grid;
      grid-template-columns: repeat(18, 1fr);
    }

    .PageContent {
      grid-column: 3 / span 14;
    }
  }

  @media (max-width: ${tablet}) {
    & {
      padding: 10px;
    }

    .PageWrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 12px;
      padding-left: 0;
      padding-right: 0;
      margin: 0;
    }

    .PageContent {
      max-width: 100%;
      grid-column: 1 / 5;
    }

    .StepsWrapper {
      height: 100%;
    }
  }

  @media (max-width: ${mobile}) {
    .PageWrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 12px;
      padding-left: 0;
      padding-right: 0;
    }

    .Steps {
      &__header {
        padding: 20px 20px 16px 20px;
      }

      &__sellers {
        display: none;
      }
    }

    .Step__goBackButton {
      width: 50px;
      height: 50px;
      padding: 0;

      .Button__iconContainer {
        margin: 0;
        display: block;
        line-height: 1;
      }

      .Button__label {
        display: none;
      }
    }
  }
`
