import {
  RegisterStateDirectionsEnum,
  RegisterStates,
  RegisterStatesLastStep,
  RegisterStatesTypeEnum,
  RegisterSupportStatesEnum,
} from './RegisterStates'
import RegisterStatesManager from './RegisterStatesManager'
import RegisterStepEmail, { RegisterUserDataResult } from './RegisterStepEmail'
import RegisterStepStatus from './RegisterStepStatus'
import RegisterStepSuccess from './RegisterStepSuccess'

const ContentStructDefault: RegisterContentStruct = {
  state: RegisterStates.Status,
  title: '',
  body: <></>,
  nextState: '',
  prevState: '',
  prevUrlLabel: 'Назад',
  nextUrlLabel: 'Вперед',
}

let submitData: RegisterSubmitStruct = {
  email: '',
  name: '',
  sellerStatus: '',
}

class RegisterWorkFlow {
  private nextState: number | string
  private prevState: number | string
  private prevTransitionAllow: boolean
  private nextTransitionAllow: boolean
  private currentState: number | string
  private statesManager: RegisterStatesManager
  private onStateCallback: Function
  private stateDirection: RegisterStateDirectionsEnum
  private contentChanged: Function
  private onReadyToSubmit: Function
  private onLastStepHandler: Function

  constructor() {
    this.nextTransitionAllow = true
    this.prevTransitionAllow = true
    this.prevState = RegisterStates.Status
    this.nextState = RegisterStates.Email
    this.currentState = RegisterStates.Status
    this.statesManager = new RegisterStatesManager()
    this.onStateCallback = (dir: RegisterStateDirectionsEnum) => {}
    this.stateDirection = RegisterStateDirectionsEnum.Forward
    this.contentChanged = () => {}
    this.onReadyToSubmit = (data: RegisterSubmitStruct) => {}
    this.onLastStepHandler = () => {}

    this.lockNextTransition()

    this.statesManager.append({
      title: 'Регистрация! Укажите ваш статус',
      state: RegisterStates.Status,
      nextUrlLabel: 'Далее',
      prevUrlLabel: 'На главную',
      nextState: RegisterStates.Email,
      prevState: RegisterSupportStatesEnum.Home,
      body: (
        <RegisterStepStatus
          onSelected={(selected: string) => {
            if (selected !== '') {
              this.contentChanged(selected)
              submitData.sellerStatus = selected
              this.unlockNextTransition()
            }
          }}
        />
      ),
    })
    this.statesManager.append({
      title: 'Регистрация! Укажите имя и электронную почту',
      state: RegisterStates.Email,
      nextUrlLabel: 'Далее',
      prevUrlLabel: 'Назад',
      nextState: RegisterSupportStatesEnum.Success,
      prevState: RegisterStates.Status,
      body: (
        <RegisterStepEmail
          onChanged={(selected: RegisterUserDataResult) => {
            if (selected.email !== '' && selected.name !== '') {
              submitData.email = selected.email
              submitData.name = selected.name
              this.contentChanged(selected)
              this.unlockNextTransition()
              this.onReadyToSubmit(submitData)
            }
          }}
        />
      ),
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
    this.stateDirection = RegisterStateDirectionsEnum.Forward
  }

  public onPrev(e: any): void {
    this.goToState(this.prevState)
    this.stateDirection = RegisterStateDirectionsEnum.Backward
  }

  public calcProgress(state: number | string): number {
    const total: number = this.getTotalSteps()

    if (this.isStateTypeOf(state) === RegisterStatesTypeEnum.Support) {
      return 0.0
    }

    const cur: number = Number(state)

    return (cur * 100) / total
  }

  public isStepsStatsVisible(state: string | number): boolean {
    return RegisterStatesTypeEnum.Steps === this.isStateTypeOf(state)
  }

  public isCurrentProgressBarVisible(state: string | number): boolean {
    return RegisterStatesTypeEnum.Support !== this.isStateTypeOf(state)
  }

  public onState(callback: Function): void {
    this.lockNextTransition()

    this.onStateCallback = callback
  }

  public findData(state: number | string): RegisterContentStruct {
    const isFormType =
      RegisterStatesTypeEnum.Steps === this.isStateTypeOf(state)

    if (isFormType) {
      const found = this.statesManager.findByState(state)
      if (found === null) {
        return ContentStructDefault
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

  public isStateTypeOf(val: any): RegisterStatesTypeEnum {
    if (Object.values(RegisterSupportStatesEnum).includes(val)) {
      return RegisterStatesTypeEnum.Support
    }

    return RegisterStatesTypeEnum.Steps
  }

  public isNextButtonVisible(state: string | number): boolean {
    return state !== RegisterSupportStatesEnum.Success
  }

  public onContentChange(callback: Function): void {
    this.contentChanged = callback
  }

  public getDataToSubmit(): RegisterSubmitStruct {
    return submitData
  }

  public OnReadyToSubmit(callback: (data: RegisterSubmitStruct) => void): void {
    this.onReadyToSubmit = callback
  }

  public OnLastStepHandler(callback: Function): void {
    this.onLastStepHandler = callback
  }

  public isLastStep(step: string | number): boolean {
    return RegisterStatesLastStep === step
  }

  private getSupportContent(): RegisterContentStruct[] {
    return [
      {
        title: 'Поздравляем с успешной регистрацией!',
        body: <RegisterStepSuccess />,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Настроить профиль',
        state: RegisterSupportStatesEnum.Success,
        prevState: RegisterSupportStatesEnum.Profile,
      },
    ]
  }

  private findInSupport(state: string | number): RegisterContentStruct | null {
    const data = this.getSupportContent()
    const found = data.find(i => {
      return i.state === state
    })

    if (!found) return null

    return found
  }

  private setState(step: number | string): void {
    const isSupport: boolean =
      this.isStateTypeOf(step) === RegisterStatesTypeEnum.Support
    const isSteps: boolean =
      this.isStateTypeOf(step) === RegisterStatesTypeEnum.Steps

    if (isSupport) {
      const supports = this.getSupportContent()
      const found = supports.find((i, id) => {
        return (i.state = step)
      })
      if (found === undefined) {
        this.currentState = RegisterStates.Status
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
      this.currentState = RegisterStates.Status
      return
    }

    this.currentState = found.state
  }
}

export default RegisterWorkFlow
