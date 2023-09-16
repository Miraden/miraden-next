import { RegisterStates } from '@/modules/Security/Register/RegisterStates'
import {
  RestoreStateDirectionsEnum,
  RestoreStates,
  RestoreStatesFirstStep,
  RestoreStatesTypeEnum,
  RestoreSupportStatsEnum,
} from '@/modules/Security/Restore/RestoreStates'
import RestoreStatesManager from '@/modules/Security/Restore/RestoreStatesManager'
import RestoreConfirm from '@/modules/Security/Restore/RestoreConfirm'
import RestoreForm, {
  RestorePasswordResult,
} from '@/modules/Security/Restore/RestoreForm'

const ContentDefault: RestoreContentStruct = {
  state: RestoreStatesFirstStep,
  title: '',
  body: <></>,
  nextState: 0,
  prevState: 0,
  prevUrlLabel: 'Назад',
  nextUrlLabel: 'Вперед',
}

let submitData: RestoreSubmitStruct = {
  email: '',
  password: '',
}

class RestoreWorkFlow {
  private nextState: number | string
  private prevState: number | string
  private prevTransitionAllow: boolean
  private nextTransitionAllow: boolean
  private currentState: number | string
  private errorMessage: string
  private statesManager: RestoreStatesManager
  private stateDirection: RestoreStateDirectionsEnum
  private onStateCallback: Function
  private contentChanged: Function
  private onReadyToSubmit: Function

  constructor() {
    this.nextTransitionAllow = true
    this.prevTransitionAllow = true
    this.prevState = RestoreStates.Form
    this.nextState = RestoreStates.Confirm
    this.currentState = RestoreStatesFirstStep
    this.errorMessage = ''
    this.stateDirection = RestoreStateDirectionsEnum.Forward

    this.contentChanged = () => {}
    this.onStateCallback = (dir: RestoreStateDirectionsEnum) => {}
    this.onReadyToSubmit = (data: RestoreSubmitStruct) => {}

    this.lockNextTransition()

    this.statesManager = new RestoreStatesManager()
    this.statesManager.append({
      title: 'Восстановление пароля',
      state: RestoreStates.Form,
      body: (
        <RestoreForm
          onValid={(selected: RestorePasswordResult) => {
            submitData = selected
            this.unlockNextTransition()
            this.contentChanged(selected)
            this.onReadyToSubmit(selected)
          }}
          onError={() => {
            this.lockNextTransition()
            this.contentChanged()
          }}
          serverErrorMsg={this.errorMessage}
        />
      ),
      nextState: RestoreStates.Confirm,
      prevState: RestoreSupportStatsEnum.Login,
      nextUrlLabel: 'Вперед',
      prevUrlLabel: 'Назад',
    })
    this.statesManager.append({
      title: 'Введите код с почты для подтверждения пароля',
      state: RestoreStates.Confirm,
      body: (
        <RestoreConfirm
          onValid={(token: string) => {
            submitData.token = token
            this.unlockNextTransition()
            this.contentChanged(token)
            this.onReadyToSubmit(token)
          }}
          onError={() => {
            this.lockNextTransition()
            this.contentChanged()
          }}
        />
      ),
      nextState: RestoreSupportStatsEnum.Success,
      prevState: RestoreStates.Form,
      nextUrlLabel: 'Восстановить',
      prevUrlLabel: 'Назад',
    })
  }

  public transitionRules(state: number | string): void {
    this.setState(state)

    let data = this.statesManager.findByState(state)
    if (!data) {
      data = this.findInSupport(state)
    }

    const prev = data?.prevState
    const next = data?.nextState
    if (prev) this.prevState = prev
    if (next) this.nextState = next
  }

  public isNextTransitionLocked(): boolean {
    return !this.nextTransitionAllow
  }

  public isPrevTransitionLocked(): boolean {
    return !this.prevTransitionAllow
  }

  public unlockNextTransition(): void {
    this.nextTransitionAllow = true
  }

  public lockNextTransition(): void {
    this.nextTransitionAllow = false
  }

  public getCurrentState(): number | string {
    return this.currentState
  }

  public getNextState(): number | string {
    return this.nextState
  }

  public getPrevState(): number | string {
    return this.prevState
  }

  public getTotalSteps(): number {
    return Object.keys(RegisterStates).length / 2
  }

  public goToState(state: number | string): void {
    this.currentState = state
    if (this.onStateCallback) this.onStateCallback(this.stateDirection)
  }

  public onNext(e: any): void {
    this.goToState(this.nextState)
    this.stateDirection = RestoreStateDirectionsEnum.Forward
  }

  public onPrev(e: any): void {
    this.goToState(this.prevState)
    this.stateDirection = RestoreStateDirectionsEnum.Backward
  }

  public calcProgress(state: number | string): number {
    const total: number = this.getTotalSteps()

    if (this.isStateTypeOf(state) === RestoreStatesTypeEnum.Support) {
      return 0.0
    }

    const cur: number = Number(state)

    return (cur * 100) / total
  }

  public onState(callback: Function): void {
    this.lockNextTransition()

    this.onStateCallback = callback
  }

  public onContentChange(callback: Function): void {
    this.contentChanged = callback
  }

  public findData(state: number | string): RestoreContentStruct {
    const isFormType = RestoreStatesTypeEnum.Steps === this.isStateTypeOf(state)

    if (isFormType) {
      const found = this.statesManager.findByState(state)
      if (found === null) {
        return ContentDefault
      }
      return found
    }

    const found = this.getSupportContent().filter(i => {
      if (state === i.state) {
        return {
          title: i.title,
          body: i.body,
          state: i.state,
          nextUrlLabel: i.nextUrlLabel,
          prevUrlLabel: i.prevUrlLabel,
          url: i.url,
          nextState: i.nextState,
          prevState: i.prevState,
        }
      }
    })

    return found[0]
  }

  public getDataToSubmit(): RestoreSubmitStruct {
    return submitData
  }

  public isStepsStatsVisible(state: string | number): boolean {
    return RestoreStatesTypeEnum.Steps === this.isStateTypeOf(state)
  }

  public isCurrentProgressBarVisible(state: string | number): boolean {
    return RestoreStatesTypeEnum.Support !== this.isStateTypeOf(state)
  }

  public isStateTypeOf(val: any): RestoreStatesTypeEnum {
    if (Object.values(RestoreStatesTypeEnum).includes(val)) {
      return RestoreStatesTypeEnum.Support
    }

    return RestoreStatesTypeEnum.Steps
  }

  public setErrorMessage(error: string): void {
    this.errorMessage = error
  }

  private getSupportContent(): RegisterContentStruct[] {
    return [
      {
        title: 'Пароль восстановлен',
        body: <></>,
        nextUrlLabel: 'Войти',
        prevUrlLabel: 'Настроить профиль',
        state: RestoreStatesTypeEnum.Steps,
      },
    ]
  }

  private setState(step: number | string): void {
    const isSupport: boolean =
      this.isStateTypeOf(step) === RestoreStatesTypeEnum.Support
    const isSteps: boolean =
      this.isStateTypeOf(step) === RestoreStatesTypeEnum.Steps

    if (isSupport) {
      const supports = this.getSupportContent()
      const found = supports.find((i, id) => {
        return (i.state = step)
      })
      if (found === undefined) {
        this.currentState = RestoreStatesFirstStep
        return
      }

      this.currentState = found.state
      return
    }

    const array = this.statesManager.getStates()
    const found = [...array].find((i, id) => {
      return i.state == step
    })

    if (found === undefined) {
      this.currentState = RestoreStatesFirstStep
      return
    }

    this.currentState = found.state
  }

  private findInSupport(state: string | number): RestoreContentStruct | null {
    const data = this.getSupportContent()
    const found = data.find(i => {
      return i.state === state
    })

    if (!found) return null

    return found
  }
}

export default RestoreWorkFlow
