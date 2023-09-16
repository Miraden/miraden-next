import styled from 'styled-components'
import cn from 'classnames'
import { Preloader } from '@/components/ui/Preloader'
import { Button, Notification } from '@/components/ui'
import { ArrowsIcon } from '@/icons/ArrowsIcon'
import React, { useCallback, useEffect, useState } from 'react'
import {
  RestoreStates,
  RestoreSupportStatsEnum,
} from '@/modules/Security/Restore/RestoreStates'
import RestoreWorkFlow from '@/modules/Security/Restore/RestoreWorkFlow'
import { RegisterStateDirectionsEnum } from '@/modules/Security/Register/RegisterStates'
import { theme } from '../../../styles/tokens'
import RestoreManager from '@/modules/Security/Restore/RestoreManager'
import { HttpCodes } from '@/infrastructure/Network/Http/ApiResponse'

const desktop: string = theme.breakpoints.desktop.max + 'px'
const tablet: string = theme.breakpoints.tablet.max + 'px'
const mobile: string = theme.breakpoints.mobile.max + 'px'

interface NotifyContent {
  title: string
  message: string
}

let isNeedUpdate = true
const workflow = new RestoreWorkFlow()

const RestorePage = (): JSX.Element => {
  const [currentState, setCurrentState] = useState<number | string>(
    RestoreStates.Form
  )
  const [render, forceRender] = useState<boolean>(false)
  const [isBusy, setBusy] = useState<boolean>(true)
  const [isNotifyVisible, setNotifyVisible] = useState<boolean>(false)
  const [notifyMessage, setNotifyMessage] = useState<NotifyContent>({
    message: '',
    title: '',
  })

  useEffect(() => {
    const forceUpdate = (): void => {
      if (isNeedUpdate) {
        isNeedUpdate = false
        forceRender(!render)
      }
    }

    workflow.transitionRules(currentState)
    setBusy(false)
    workflow.onState((direction: RegisterStateDirectionsEnum): void => {
      isNeedUpdate = !isNeedUpdate
      setCurrentState(workflow.getCurrentState())
    })

    workflow.onContentChange((e: any) => {
      isNeedUpdate = !isNeedUpdate
      forceUpdate()
    })
    forceUpdate()
  }, [currentState, render])

  const onPrevClick = useCallback((e: any) => {
    if (workflow.getPrevState() === RestoreSupportStatsEnum.Login) {
      window.location.href = '/user/login'
      return
    }
    workflow.onPrev(e)
  }, [])

  const onNextClick = useCallback(async (e: any) => {
    if (workflow.getCurrentState() === RestoreStates.Form) {
      setBusy(true)
      const data = workflow.getDataToSubmit()
      const manager = new RestoreManager()
      const result: ApiResponseType = await manager.sendRequest(data)
      if (result.code === HttpCodes.OK) {
        workflow.onNext(e)
      }
      if (result.code !== HttpCodes.OK) {
        setBusy(false)
        const errors = result.errors as Object
        const errorTitle = Object.keys(errors) as string[]
        const errorMessage = Object.values(errors) as string[]
        setNotifyMessage({ title: errorTitle[0], message: errorMessage[0] })
        setNotifyVisible(true)
        setTimeout(() => {
          setNotifyVisible(false)
          setNotifyMessage({ title: '', message: '' })
        }, 3000)
      }
    }

    if (workflow.getNextState() === RestoreSupportStatsEnum.Success) {
      setBusy(true)
      const data = workflow.getDataToSubmit()
      const token = String(data.token)
      const manager = new RestoreManager()
      const result: ApiResponseType = await manager.verifyToken(token)
      if (result.code === HttpCodes.OK) {
        window.location.href = '/user/login'
      }
      if (result.code !== HttpCodes.OK) {
        setBusy(false)
        const errors = result.errors as Object
        const errorTitle = Object.keys(errors) as string[]
        const errorMessage = Object.values(errors) as string[]
        setNotifyMessage({ title: errorTitle[0], message: errorMessage[0] })
        setNotifyVisible(true)
        setTimeout(() => {
          setNotifyVisible(false)
          setNotifyMessage({ title: '', message: '' })
        }, 3000)
      }
    }
  }, [])

  return (
    <StyledPage className="ContainerFull">
      <div className={cn('PageWrapper')}>
        <div className={cn('PageContent')}>
          <div id={'StepsWrapper'} className="StepsWrapper">
            {isBusy && <Preloader />}
            {!isBusy && (
              <>
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
                    {workflow.isCurrentProgressBarVisible(currentState) && (
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
                        disabled={false}
                        className="Step__goBackButton"
                        leftIcon={<ArrowsIcon left={true} />}
                      >
                        {workflow.findData(currentState).prevUrlLabel}
                      </Button>
                      {workflow.isStepsStatsVisible(currentState) && (
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
                      <Button
                        className={'ButtonForward'}
                        onClick={onNextClick}
                        disabled={workflow.isNextTransitionLocked()}
                      >
                        {workflow.findData(currentState).nextUrlLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {isNotifyVisible && (
        <div className={'Notifications'}>
          <Notification
            error
            title={notifyMessage.title}
            message={notifyMessage.message}
          />
        </div>
      )}
    </StyledPage>
  )
}

const StyledPage = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;
  flex-grow: 1;

  .PageWrapper {
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
    position: relative;
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

  .Notifications {
    position: fixed;
    z-index: 1000;
    top: 20px;
    right: 20px;
    transform: translateX(-50%);
  }
`

export default RestorePage
