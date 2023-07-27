import StepLocation from '@/modules/Leads/Maker/StepLocation'
import StepFormat from '@/modules/Leads/Maker/StepFormat'
import StepEstateTypeBuy from '@/modules/Leads/Maker/StepEstateTypeBuy'
import LeadMakerIntro from '@/modules/Leads/Maker/LeadMakerIntro'
import StepEstateTypeRent from '@/modules/Leads/Maker/StepEstateTypeRent'

export enum StatesType {
  Steps = 'Steps',
  Support = 'Support',
}

export interface SubmitDataStruct {
  location: {
    city: string
    country: string
  }
  format: string
  estateType: {
    type: string
    value: string
  }
  estateStatus: string
  deadlineAt: string
  area: number
  livingArea: number
  rooms: number
  beds: number
  bathrooms: number
  purpose: string
  readyDeal: string
  rentPeriod: {
    start: string
    end: string
  }
  budget: {
    from: number
    to: number
    period: string
    currency: number
  }
  purchase: {
    type: string
    firstPayment: string
    format: string
  }
  wished: {
    title: string
    text: string
  }
}

export enum StateDirection {
  Forward = 'Forward',
  Backward = 'Backward',
}

export enum LeadMakerStates {
  Location = 1,
  Format = 2,
  EstateType = 3,
  EstateStatus = 4,
  AreaTotal = 5,
  RoomsTotal = 6,
  Purpose = 7,
  ReadyDeal = 8,
  Budget = 9,
  BuyFormat = 10,
  Wishes = 11,
}

export enum SupportStates {
  Intro = 'intro',
  Payment = 'payment',
}

export const LeadMakerDefaultUrl: string = '/lead/add/'

export interface LeadMakerStruct {
  state: LeadMakerStates | SupportStates
  title: string
  body: JSX.Element
  url: string
  nextUrlLabel: string
  prevUrlLabel: string
}

let submitData: SubmitDataStruct = {
  location: {
    city: '',
    country: '',
  },
  format: '',
  estateType: {
    type: '',
    value: '',
  },
  estateStatus: '',
  deadlineAt: '',
  area: 0,
  livingArea: 0,
  rooms: 0,
  beds: 0,
  bathrooms: 0,
  purpose: '',
  readyDeal: '',
  rentPeriod: {
    start: '',
    end: '',
  },
  budget: {
    from: 0,
    to: 0,
    period: '',
    currency: 0,
  },
  purchase: {
    type: '',
    firstPayment: '',
    format: '',
  },
  wished: {
    title: '',
    text: '',
  },
}

class LeadMakerWorkFlow {
  private currentState: LeadMakerStates | SupportStates
  private nextState: LeadMakerStates | SupportStates
  private prevState: LeadMakerStates | SupportStates
  private nextTransitionAllow: boolean
  private prevTransitionAllow: boolean
  private onStateCallback: Function
  private contentChanged: Function
  private stateDirection: StateDirection

  constructor() {
    this.currentState = SupportStates.Intro
    this.nextState = LeadMakerStates.Location
    this.prevState = SupportStates.Intro
    this.nextTransitionAllow = true
    this.prevTransitionAllow = true
    this.onStateCallback = (dir: StateDirection) => {}
    this.stateDirection = StateDirection.Forward
    this.contentChanged = () => {}
  }

  public rules(state: LeadMakerStates | SupportStates): void {
    this.setState(state)

    switch (state) {
      case SupportStates.Intro:
        this.prevState = SupportStates.Intro
        this.nextState = LeadMakerStates.Location
        break

      case LeadMakerStates.Location:
        this.prevState = SupportStates.Intro
        this.nextState = LeadMakerStates.Format
        break

      case LeadMakerStates.Format:
        this.prevState = LeadMakerStates.Location
        this.nextState = LeadMakerStates.EstateType
        break

      case LeadMakerStates.EstateType:
        this.prevState = LeadMakerStates.Format
        this.nextState = LeadMakerStates.EstateStatus
        break

      case LeadMakerStates.EstateStatus:
        this.prevState = LeadMakerStates.EstateType
        this.nextState = LeadMakerStates.AreaTotal
        break

      case LeadMakerStates.AreaTotal:
        this.prevState = LeadMakerStates.EstateStatus
        this.nextState = LeadMakerStates.RoomsTotal
        break

      case LeadMakerStates.RoomsTotal:
        this.prevState = LeadMakerStates.AreaTotal
        this.nextState = LeadMakerStates.Purpose
        break

      case LeadMakerStates.Purpose:
        this.prevState = LeadMakerStates.RoomsTotal
        this.nextState = LeadMakerStates.ReadyDeal
        break

      case LeadMakerStates.ReadyDeal:
        this.prevState = LeadMakerStates.Purpose
        this.nextState = LeadMakerStates.Budget
        break

      case LeadMakerStates.Budget:
        this.prevState = LeadMakerStates.ReadyDeal
        this.nextState = LeadMakerStates.BuyFormat
        break

      case LeadMakerStates.BuyFormat:
        this.prevState = LeadMakerStates.Budget
        this.nextState = LeadMakerStates.Wishes
        break

      case LeadMakerStates.Wishes:
        this.prevState = LeadMakerStates.BuyFormat
        this.nextState = SupportStates.Payment
        break

      case SupportStates.Payment:
        this.prevState = LeadMakerStates.Wishes
        break
    }
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

  public getCurrentState(): LeadMakerStates | SupportStates {
    return this.currentState
  }

  public getNextState(): LeadMakerStates | SupportStates {
    return this.nextState
  }

  public getPrevState(): LeadMakerStates | SupportStates {
    return this.prevState
  }

  public getTotalSteps(): number {
    return this.enumToArray().length
  }

  public findData(state: LeadMakerStates | SupportStates): LeadMakerStruct {
    const isFormType = StatesType.Steps === this.isStateTypeOf(state)
    const isNonLeadType = StatesType.Support === this.isStateTypeOf(state)

    if (isFormType) {
      const found = this.getFormData(this).filter(i => {
        if (i.state === state)
          return {
            title: i.title,
            body: i.body,
            state: i.state,
            nextUrlLabel: i.nextUrlLabel,
            prevUrlLabel: i.prevUrlLabel,
            url: i.url,
          }
      })
      return found[0]
    }

    const found = this.getSupportData(this).filter(i => {
      if (state === i.state) {
        return {
          title: i.title,
          body: i.body,
          state: i.state,
          nextUrlLabel: i.nextUrlLabel,
          prevUrlLabel: i.prevUrlLabel,
          url: i.url,
        }
      }
    })
    return found[0]
  }

  public onNext(e: any): void {
    this.goToState(this.nextState)
    this.stateDirection = StateDirection.Forward
    if (this.onStateCallback) this.onStateCallback(this.stateDirection)
  }

  public onPrev(e: any): void {
    this.goToState(this.prevState)
    this.stateDirection = StateDirection.Backward
    if (this.onStateCallback) this.onStateCallback(this.stateDirection)
  }

  public onState(callback: Function): void {
    if (this.getCurrentState() === SupportStates.Intro) {
      this.unlockNextTransition()
    } else {
      this.lockNextTransition()
    }
    this.onStateCallback = callback
  }

  public onContentChange(callback: Function): void {
    this.contentChanged = callback
  }

  public calcProgress(state: LeadMakerStates | SupportStates): number {
    const total: number = this.getTotalSteps()
    const current: LeadMakerStates | SupportStates = this.currentState

    if (this.isStateTypeOf(current) === StatesType.Support) {
      return 0.0
    }

    const cur: LeadMakerStates = this.currentState as LeadMakerStates

    return (cur * 100) / total
  }

  public isSellersStatsVisible(): boolean {
    return StatesType.Steps === this.isStateTypeOf(this.currentState)
  }

  public isStepsStatsVisible(): boolean {
    return StatesType.Steps === this.isStateTypeOf(this.currentState)
  }

  public isCurrentProgressBarVisible(): boolean {
    return SupportStates.Payment !== this.currentState
  }

  public getDataToSubmit(): SubmitDataStruct {
    return submitData
  }

  private goToState(state: LeadMakerStates | SupportStates): void {
    this.currentState = state
  }

  private enumToArray(): string[] {
    const s = Object.keys(LeadMakerStates)
    const d = s.map((key, val) => {
      if (LeadMakerStates[val]) return LeadMakerStates[val]
    })

    const d1 = d.filter(i => {
      if (i !== undefined) return i
    })

    return d1 as Array<string>
  }

  private setState(step: LeadMakerStates | SupportStates): void {
    const isSupport: boolean = this.isStateTypeOf(step) === StatesType.Support
    const isSteps: boolean = this.isStateTypeOf(step) === StatesType.Steps

    const array = this.enumToArray()
    const found = array.find((i, id) => {
      return id + 1 === step
    })

    if (found === undefined) {
      this.currentState = SupportStates.Intro
      return
    }

    // @ts-ignore
    this.currentState = LeadMakerStates[found]
  }

  private isStateTypeOf(val: any): StatesType {
    if (Object.values(SupportStates).includes(val)) {
      return StatesType.Support
    }

    return StatesType.Steps
  }

  public getSupportData(context: LeadMakerWorkFlow): LeadMakerStruct[] {
    const handler = (e: any) => {}

    return [
      {
        title: 'Как это работает?',
        body: <LeadMakerIntro />,
        url: LeadMakerDefaultUrl,
        nextUrlLabel: 'Начать',
        prevUrlLabel: 'На главную',
        state: SupportStates.Intro,
      },
      {
        title: 'Получите больше просмотров и откликов',
        body: <>Payment</>,
        url: LeadMakerDefaultUrl,
        nextUrlLabel: 'Оплатить',
        prevUrlLabel: 'Назад',
        state: SupportStates.Payment,
      },
    ]
  }

  private getFormData(context: LeadMakerWorkFlow): LeadMakerStruct[] {
    const handler = () => {
      context.unlockNextTransition()
      if (context.contentChanged) context.contentChanged()
    }

    return [
      {
        state: LeadMakerStates.Location,
        title: 'Укажите город или расположение недвижимости',
        body: (
          <StepLocation
            onFinished={(e: any) => {
              submitData.location.city = e.city
              submitData.location.country = e.country
              handler()
            }}
          />
        ),
        url: LeadMakerDefaultUrl + LeadMakerStates.Location,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.Format,
        title: 'Укажите формат сделки с недвижимостью',
        body: (
          <StepFormat
            onChanged={(e: any) => {
              handler()
              submitData.format = e
            }}
          />
        ),
        url: LeadMakerDefaultUrl + LeadMakerStates.Format,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.EstateType,
        title: 'Укажите тип недвижимости',
        body: <StepEstateTypeBuy />,
        url: LeadMakerDefaultUrl + LeadMakerStates.EstateType,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.EstateStatus,
        title: 'Укажите состояние недвижимости',
        body: <></>,
        url: LeadMakerDefaultUrl + LeadMakerStates.EstateStatus,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.AreaTotal,
        title: 'Укажите общую площадь недвижимости',
        body: <></>,
        url: LeadMakerDefaultUrl + LeadMakerStates.AreaTotal,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.RoomsTotal,
        title: 'Укажите общее количество комнат',
        body: <></>,
        url: LeadMakerDefaultUrl + LeadMakerStates.RoomsTotal,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.Purpose,
        title: 'Укажите цель покупки',
        body: <></>,
        url: LeadMakerDefaultUrl + LeadMakerStates.Purpose,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.ReadyDeal,
        title: 'Когда готовы выходить на сделку?',
        body: <></>,
        url: LeadMakerDefaultUrl + LeadMakerStates.ReadyDeal,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.Budget,
        title: 'Укажите примерный бюджет',
        body: <></>,
        url: LeadMakerDefaultUrl + LeadMakerStates.Budget,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.BuyFormat,
        title: 'Укажите удобный способ покупки',
        body: <></>,
        url: LeadMakerDefaultUrl + LeadMakerStates.BuyFormat,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
      {
        state: LeadMakerStates.Wishes,
        title: 'Опишите ваши дополнительные пожелания',
        body: <></>,
        url: LeadMakerDefaultUrl + LeadMakerStates.Wishes,
        nextUrlLabel: 'Далее',
        prevUrlLabel: 'Назад',
      },
    ]
  }
}

export default LeadMakerWorkFlow
