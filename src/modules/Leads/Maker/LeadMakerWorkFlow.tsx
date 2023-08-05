import StepLocation, {
  LocationResult,
} from '@/modules/Leads/Maker/StepLocation'
import StepFormat from '@/modules/Leads/Maker/StepFormat'
import StepEstateType from '@/modules/Leads/Maker/StepEstateType'
import LeadMakerIntro from '@/modules/Leads/Maker/LeadMakerIntro'
import StepStatus from '@/modules/Leads/Maker/StepStatus'
import StepArea from '@/modules/Leads/Maker/StepArea'
import StepPurpose from '@/modules/Leads/Maker/StepPurpose'
import StepRooms from '@/modules/Leads/Maker/StepRooms'
import StepReadyDeal from './StepReadyDeal'
import StepBuyBudget from './StepBuyBudget'
import StepPurchase from '@/modules/Leads/Maker/StepPurchase'
import StepWishes from '@/modules/Leads/Maker/StepWishes'
import StepPeriod from '@/modules/Leads/Maker/StepPeriod'
import StepRentBudget from '@/modules/Leads/Maker/StepRentBudget'
import {
  FormatRentStatesEnum,
  FormatTypes,
  LeadMakerStatesEnum,
  StateDirectionsEnum,
  StatesTypeEnum,
  SupportStatesEnum,
} from '@/modules/Leads/Maker/StatesTypes'
import PaymentOptions from '@/modules/Leads/Maker/PaymentOptions'
import StatesManager from '@/modules/Leads/Maker/StatesManager'

let submitData: SubmitDataStruct = {
  location: {
    city: 0,
    country: 0,
    radius: 0,
  },
  format: 'apartment',
  estateType: {
    root: '',
    sublevel: '',
  },
  status: '',
  deadlineAt: '',
  buildYear: '',
  area: {
    living: 0,
    total: 0,
  },
  rooms: {
    total: 0,
    beds: 0,
    bathrooms: 0,
  },
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
    firstPayment: 0,
    format: '',
  },
  wishes: {
    title: '',
    text: '',
  },
  paymentOptions: {
    anyCanResponse: true,
    autoPinUpEveryThreeDays: false,
    pinUpOneDay: false,
    totalPrice: 0,
  },
}

export const LeadMakerDefaultUrl: string = '/lead/add/'

const LeadMakerStructDefault: LeadMakerStruct = {
  state: SupportStatesEnum.Intro,
  title: '',
  body: <></>,
  nextState: '',
  prevState: '',
  prevUrlLabel: 'Назад',
  nextUrlLabel: 'Вперед',
}

class LeadMakerWorkFlow {
  private contentChanged: Function
  private onStateCallback: Function
  private nextState: number | string
  private prevState: number | string
  private prevTransitionAllow: boolean
  private nextTransitionAllow: boolean
  private currentState: number | string
  private statesManager: StatesManager
  private stateDirection: StateDirectionsEnum

  constructor() {
    this.nextTransitionAllow = true
    this.prevTransitionAllow = true
    this.contentChanged = () => {}
    this.prevState = SupportStatesEnum.Intro
    this.currentState = SupportStatesEnum.Intro
    this.nextState = LeadMakerStatesEnum.Location
    this.stateDirection = StateDirectionsEnum.Forward
    this.statesManager = new StatesManager()
    this.onStateCallback = (dir: StateDirectionsEnum) => {}
  }

  public rules(state: number | string): void {
    this.setState(state)

    if (state === SupportStatesEnum.Intro) {
      this.nextState = LeadMakerStatesEnum.Location
      this.prevState = SupportStatesEnum.Home
      this.CommonSteps()
    }

    if (state === LeadMakerStatesEnum.Location) {
      this.nextState = LeadMakerStatesEnum.Format
      this.prevState = SupportStatesEnum.Intro
      this.CommonSteps()
    }

    if (state === LeadMakerStatesEnum.Format) {
      this.nextState = LeadMakerStatesEnum.EstateType
      this.prevState = LeadMakerStatesEnum.Location
      this.CommonSteps()
    }

    if (state === LeadMakerStatesEnum.EstateType) {
      if (submitData.format === FormatTypes.buy) {
        this.FormatBuyBranch()
      }
      if (submitData.format === FormatTypes.rent) {
        this.FormatRentBranch()
      }
    }

    if (state === SupportStatesEnum.Payment) {
      this.nextState = SupportStatesEnum.PayForm
      this.prevState = LeadMakerStatesEnum.Wishes
    }

    if (state === SupportStatesEnum.PayForm) {
      this.nextState = SupportStatesEnum.PayForm
      this.prevState = SupportStatesEnum.Payment
    }

    const prev = this.statesManager.findByState(this.currentState)?.prevState
    const next = this.statesManager.findByState(this.currentState)?.nextState
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
    return Object.keys(LeadMakerStatesEnum).length / 2
  }

  public findData(state: number | string): LeadMakerStruct {
    const isFormType = StatesTypeEnum.Steps === this.isStateTypeOf(state)
    const isSupportType = StatesTypeEnum.Support === this.isStateTypeOf(state)

    if (isFormType) {
      const found = this.statesManager.findByState(state)
      if (found === null) {
        return LeadMakerStructDefault
      }

      return found
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
          nextState: i.nextState,
          prevState: i.prevState,
        }
      }
    })
    return found[0]
  }

  public onNext(e: any): void {
    this.goToState(this.nextState)
    this.stateDirection = StateDirectionsEnum.Forward
  }

  public onPrev(e: any): void {
    this.goToState(this.prevState)
    this.stateDirection = StateDirectionsEnum.Backward
  }

  public onState(callback: Function): void {
    this.lockNextTransition()

    if (this.getCurrentState() === SupportStatesEnum.Intro) {
      this.unlockNextTransition()
    }

    if (this.getCurrentState() === LeadMakerStatesEnum.Purchase) {
      this.unlockNextTransition()
    }

    if (this.getCurrentState() === SupportStatesEnum.Payment) {
      this.unlockNextTransition()
    }

    this.onStateCallback = callback
  }

  public onContentChange(callback: Function): void {
    this.contentChanged = callback
  }

  public calcProgress(state: number | string): number {
    const total: number = this.getTotalSteps()
    const current: number | string = this.currentState

    if (this.isStateTypeOf(current) === StatesTypeEnum.Support) {
      return 0.0
    }

    const cur: LeadMakerStatesEnum = this.currentState as LeadMakerStatesEnum

    return (cur * 100) / total
  }

  public isSellersStatsVisible(): boolean {
    return StatesTypeEnum.Steps === this.isStateTypeOf(this.currentState)
  }

  public isStepsStatsVisible(): boolean {
    return StatesTypeEnum.Steps === this.isStateTypeOf(this.currentState)
  }

  public isCurrentProgressBarVisible(): boolean {
    return SupportStatesEnum.Payment !== this.currentState
  }

  public getDataToSubmit(): SubmitDataStruct {
    return submitData
  }

  public goToState(state: number | string): void {
    this.currentState = state
    if (this.onStateCallback) this.onStateCallback(this.stateDirection)
  }

  private setState(step: number | string): void {
    const isSupport: boolean =
      this.isStateTypeOf(step) === StatesTypeEnum.Support
    const isSteps: boolean = this.isStateTypeOf(step) === StatesTypeEnum.Steps

    if (isSupport) {
      const supports = this.getSupportData(this)
      const found = supports.find((i, id) => {
        return (i.state = step)
      })
      if (found === undefined) {
        this.currentState = SupportStatesEnum.Intro
        return
      }

      this.currentState = found.state
      return
    }

    const array = this.statesManager.getStates()
    const found = array.find((i, id) => {
      return i.state == step
    })

    if (found === undefined) {
      this.currentState = LeadMakerStatesEnum.Location
      return
    }

    this.currentState = found.state
  }

  public isStateTypeOf(val: any): StatesTypeEnum {
    if (Object.values(SupportStatesEnum).includes(val)) {
      return StatesTypeEnum.Support
    }

    return StatesTypeEnum.Steps
  }

  public getSupportData(context: LeadMakerWorkFlow): LeadMakerStruct[] {
    return [
      {
        title: 'Как это работает?',
        body: <LeadMakerIntro />,
        url: LeadMakerDefaultUrl,
        nextUrlLabel: 'Начать',
        prevUrlLabel: 'На главную',
        state: SupportStatesEnum.Intro,
      },
      {
        title: 'Получите больше просмотров и откликов',
        body: (
          <PaymentOptions
            onPrice={price => {
              submitData.paymentOptions.totalPrice = price
              this.contentChanged(price)
            }}
          />
        ),
        url: LeadMakerDefaultUrl,
        nextUrlLabel: 'Оплатить ' + submitData.paymentOptions.totalPrice + ' €',
        prevUrlLabel: 'Назад',
        state: SupportStatesEnum.Payment,
        prevState: this.getPrevState(),
        nextState: SupportStatesEnum.PayForm,
      },
      {
        title: '',
        body: <></>,
        url: '',
        nextUrlLabel: '',
        prevUrlLabel: '',
        state: SupportStatesEnum.PayForm,
        prevState: SupportStatesEnum.Payment,
        nextState: SupportStatesEnum.PayForm,
      },
    ]
  }

  private FormatRentBranch(): void {
    this.nextState = LeadMakerStatesEnum.Area
    this.statesManager.append({
      state: FormatRentStatesEnum.Area,
      title: 'Какая площадь',
      body: (
        <StepArea
          context={'rent'}
          onChanged={e => {
            submitData.area.total = e.total
            submitData.area.living = e.living
            this.contentChanged(e)
            if (submitData.area.total > 0) {
              this.unlockNextTransition()
            }
          }}
        />
      ),
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      nextState: FormatRentStatesEnum.Period,
      prevState: LeadMakerStatesEnum.EstateType,
    })
    this.statesManager.append({
      state: FormatRentStatesEnum.Period,
      title: 'Укажите период аренды',
      body: (
        <StepPeriod
          onChange={e => {
            submitData.rentPeriod.start = e.dateFrom
            submitData.rentPeriod.end = e.dateTo
            this.contentChanged(e)
            if (
              submitData.rentPeriod.start.length > 0 &&
              submitData.rentPeriod.end.length > 0
            ) {
              this.unlockNextTransition()
            }
          }}
        />
      ),
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      nextState: FormatRentStatesEnum.Budget,
      prevState: FormatRentStatesEnum.Area,
    })
    this.statesManager.append({
      state: FormatRentStatesEnum.Budget,
      title: 'Укажите примерный бюджет аренды',
      body: (
        <StepRentBudget
          onChanged={e => {
            submitData.budget.currency = e.currencyId
            submitData.budget.from = e.from
            submitData.budget.to = e.to
            submitData.budget.period = e.period
            this.contentChanged(e)
            if (
              (submitData.budget.from > 0 || submitData.budget.to > 0) &&
              submitData.budget.currency > 0
            ) {
              this.unlockNextTransition()
            }
          }}
        />
      ),
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      prevState: FormatRentStatesEnum.Period,
      nextState: FormatRentStatesEnum.Wishes,
    })
    this.statesManager.append({
      state: FormatRentStatesEnum.Wishes,
      title: 'Опишите ваши дополнительные пожелания',
      body: (
        <StepWishes
          onChange={e => {
            submitData.wishes.text = e.wishes
            submitData.wishes.title = e.title
            this.contentChanged(e)
            if (submitData.wishes.title.length > 0) {
              this.unlockNextTransition()
            }
          }}
        />
      ),
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      prevState: FormatRentStatesEnum.Budget,
      nextState: SupportStatesEnum.Payment,
    })
  }

  private FormatBuyBranch(): void {
    const rootLabel = submitData.estateType.root
    if (rootLabel === 'apartment' || rootLabel === 'house') {
      this.nextState = LeadMakerStatesEnum.Status
      this.statesManager.append({
        state: LeadMakerStatesEnum.Status,
        title: 'Состояние',
        body: (
          <StepStatus
            onChanged={e => {
              submitData.status = e.status
              submitData.deadlineAt = e.deadlineAfter
              submitData.buildYear = e.buildYear
              this.contentChanged(e)
              this.unlockNextTransition()
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStatesEnum.EstateType,
        nextState: LeadMakerStatesEnum.Area,
      })
      this.statesManager.append({
        state: LeadMakerStatesEnum.Area,
        title: 'Укажите общую площадь недвижимости',
        body: (
          <StepArea
            context={rootLabel}
            onChanged={e => {
              submitData.area.total = e.total
              submitData.area.living = e.living
              this.contentChanged(e)
              if (submitData.area.total > 0) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStatesEnum.Status,
        nextState: LeadMakerStatesEnum.Rooms,
      })
      this.statesManager.append({
        state: LeadMakerStatesEnum.Rooms,
        title: 'Укажите общее количество комнат',
        body: (
          <StepRooms
            onChanged={e => {
              submitData.rooms.total = e.rooms
              submitData.rooms.beds = e.beds
              submitData.rooms.bathrooms = e.baths
              this.contentChanged(e)
              if (submitData.rooms.total > 0) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStatesEnum.Area,
        nextState: LeadMakerStatesEnum.Purpose,
      })
      this.statesManager.append({
        state: LeadMakerStatesEnum.Purpose,
        title: 'Укажите цель покупки',
        body: (
          <StepPurpose
            onChanged={e => {
              submitData.purpose = String(e)
              this.contentChanged(e)
              this.unlockNextTransition()
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStatesEnum.Rooms,
        nextState: LeadMakerStatesEnum.ReadyDeal,
      })
      this.statesManager.append({
        state: LeadMakerStatesEnum.ReadyDeal,
        title: 'Когда готовы выходить на сделку?',
        body: (
          <StepReadyDeal
            onChanged={e => {
              submitData.readyDeal = e
              this.contentChanged(e)
              this.goToState(this.nextState)
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStatesEnum.Purpose,
        nextState: LeadMakerStatesEnum.Budget,
      })
      this.statesManager.append({
        state: LeadMakerStatesEnum.Budget,
        title: 'Укажите примерный бюджет',
        body: (
          <StepBuyBudget
            onChanged={e => {
              submitData.budget.currency = e.currencyId
              submitData.budget.from = e.from
              submitData.budget.to = e.to
              this.contentChanged(e)
              if (
                (submitData.budget.to > 0 || submitData.budget.from > 0) &&
                submitData.budget.currency > 0
              ) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStatesEnum.ReadyDeal,
        nextState: LeadMakerStatesEnum.Purchase,
      })
      this.statesManager.append({
        state: LeadMakerStatesEnum.Purchase,
        title: 'Укажите удобный способ покупки',
        body: (
          <StepPurchase
            onChange={option => {
              submitData.purchase.firstPayment = option.firstInstallment
              submitData.purchase.format = option.purchaseFormat
              submitData.purchase.type = option.purchaseType
              this.contentChanged(option)
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStatesEnum.Budget,
        nextState: LeadMakerStatesEnum.Wishes,
      })
      this.statesManager.append({
        state: LeadMakerStatesEnum.Wishes,
        title: 'Опишите ваши дополнительные пожелания',
        body: (
          <StepWishes
            onChange={e => {
              submitData.wishes.text = e.wishes
              submitData.wishes.title = e.title
              this.contentChanged(e)
              if (submitData.wishes.title.length > 0) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStatesEnum.Purchase,
        nextState: SupportStatesEnum.Payment,
      })
    }

    if (rootLabel === 'land') {
      this.nextState = LeadMakerStatesEnum.Area
      this.statesManager.append({
        title: 'Укажите площадь участка земли',
        state: LeadMakerStatesEnum.Area,
        body: (
          <StepArea
            context={rootLabel}
            onChanged={e => {
              submitData.area.total = e.total
              submitData.area.living = e.living
              this.contentChanged(e)
              this.unlockNextTransition()
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.EstateType,
        nextState: LeadMakerStatesEnum.Purpose,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите цель покупки',
        state: LeadMakerStatesEnum.Purpose,
        body: (
          <StepPurpose
            onChanged={e => {
              submitData.purpose = String(e)
              this.contentChanged(e)
              this.unlockNextTransition()
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Area,
        nextState: LeadMakerStatesEnum.ReadyDeal,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Когда готовы выходить на сделку?',
        state: LeadMakerStatesEnum.ReadyDeal,
        body: (
          <StepReadyDeal
            onChanged={e => {
              submitData.readyDeal = e
              this.contentChanged(e)
              this.goToState(this.getNextState())
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Purpose,
        nextState: LeadMakerStatesEnum.Budget,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите примерный бюджет',
        state: LeadMakerStatesEnum.Budget,
        body: (
          <StepBuyBudget
            onChanged={e => {
              submitData.budget.currency = e.currencyId
              submitData.budget.from = e.from
              submitData.budget.to = e.to
              this.contentChanged(e)
              if (
                (submitData.budget.from > 0 || submitData.budget.to > 0) &&
                submitData.budget.currency > 0
              ) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.ReadyDeal,
        nextState: LeadMakerStatesEnum.Purchase,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите удобный способ покупки',
        state: LeadMakerStatesEnum.Purchase,
        body: (
          <StepPurchase
            onChange={option => {
              submitData.purchase.firstPayment = option.firstInstallment
              submitData.purchase.format = option.purchaseFormat
              submitData.purchase.type = option.purchaseType
              this.contentChanged(option)
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Budget,
        nextState: LeadMakerStatesEnum.Wishes,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Опишите ваши дополнительные пожелания',
        state: LeadMakerStatesEnum.Wishes,
        body: (
          <StepWishes
            onChange={e => {
              submitData.wishes.text = e.wishes
              submitData.wishes.title = e.title
              this.contentChanged(e)
              if (submitData.wishes.title.length > 0) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Budget,
        nextState: SupportStatesEnum.Payment,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
    }

    if (rootLabel === 'commercial') {
      this.nextState = LeadMakerStatesEnum.Status
      this.statesManager.append({
        title: 'Укажите состояние недвижимости',
        state: LeadMakerStatesEnum.Status,
        body: (
          <StepStatus
            onChanged={e => {
              submitData.status = e.status
              submitData.deadlineAt = e.deadlineAfter
              submitData.buildYear = e.buildYear
              this.contentChanged(e)
              if (submitData.status.length > 0) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.EstateType,
        nextState: LeadMakerStatesEnum.Area,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите площадь недвижимости',
        state: LeadMakerStatesEnum.Area,
        body: (
          <StepArea
            context={rootLabel}
            onChanged={e => {
              submitData.area.total = e.total
              submitData.area.living = e.living
              this.contentChanged(e)
              if (submitData.area.total > 0) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Status,
        nextState: LeadMakerStatesEnum.Purpose,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите цель покупки',
        state: LeadMakerStatesEnum.Purpose,
        body: (
          <StepPurpose
            onChanged={e => {
              submitData.purpose = String(e)
              this.contentChanged(e)
              this.unlockNextTransition()
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Area,
        nextState: LeadMakerStatesEnum.ReadyDeal,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Когда готовы выходить на сделку?',
        state: LeadMakerStatesEnum.ReadyDeal,
        body: (
          <StepReadyDeal
            onChanged={e => {
              submitData.readyDeal = e
              this.contentChanged(e)
              this.goToState(this.getNextState())
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Purpose,
        nextState: LeadMakerStatesEnum.Budget,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Бюджет',
        state: LeadMakerStatesEnum.Budget,
        body: (
          <StepBuyBudget
            onChanged={e => {
              submitData.budget.currency = e.currencyId
              submitData.budget.from = e.from
              submitData.budget.to = e.to
              this.contentChanged(e)
              if (
                (submitData.budget.from > 0 || submitData.budget.to > 0) &&
                submitData.budget.currency > 0
              ) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.ReadyDeal,
        nextState: LeadMakerStatesEnum.Purchase,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите удобный способ покупки',
        state: LeadMakerStatesEnum.Purchase,
        body: (
          <StepPurchase
            onChange={option => {
              submitData.purchase.firstPayment = option.firstInstallment
              submitData.purchase.format = option.purchaseFormat
              submitData.purchase.type = option.purchaseType
              this.contentChanged(option)
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Budget,
        nextState: LeadMakerStatesEnum.Wishes,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Опишите ваши дополнительные пожелания',
        state: LeadMakerStatesEnum.Wishes,
        body: (
          <StepWishes
            onChange={e => {
              submitData.wishes.text = e.wishes
              submitData.wishes.title = e.title
              this.contentChanged(e)
              if (submitData.wishes.title.length > 0) {
                this.unlockNextTransition()
              }
            }}
          />
        ),
        prevState: LeadMakerStatesEnum.Purchase,
        nextState: SupportStatesEnum.Payment,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
    }
  }

  private CommonSteps(): void {
    this.statesManager.clearStates()
    this.statesManager.append({
      title: 'Укажите город или расположение недвижимости',
      state: LeadMakerStatesEnum.Location,
      nextUrlLabel: 'Далее',
      prevUrlLabel: 'Назад',
      prevState: SupportStatesEnum.Intro,
      nextState: LeadMakerStatesEnum.Format,
      body: (
        <StepLocation
          onChanged={(location: LocationResult) => {
            submitData.location.city = location.cityId
            submitData.location.country = location.countryId
            submitData.location.radius = location.radius
            this.contentChanged(location)
            this.unlockNextTransition()
          }}
        />
      ),
    })
    this.statesManager.append({
      title: 'Укажите формат сделки с недвижимостью',
      state: LeadMakerStatesEnum.Format,
      nextUrlLabel: 'Далее',
      prevUrlLabel: 'Назад',
      prevState: LeadMakerStatesEnum.Location,
      nextState: LeadMakerStatesEnum.EstateType,
      body: (
        <StepFormat
          onChanged={(e: any) => {
            submitData.format = e
            this.contentChanged(e)
            this.goToState(this.getNextState())
          }}
        />
      ),
    })
    this.statesManager.append({
      title: 'Укажите тип недвижимости',
      state: LeadMakerStatesEnum.EstateType,
      prevState: LeadMakerStatesEnum.Format,
      nextUrlLabel: 'Далее',
      prevUrlLabel: 'Назад',
      body: (
        <StepEstateType
          onChanged={e => {
            submitData.estateType.sublevel = e.subLevel
            submitData.estateType.root = e.root
            this.contentChanged(e)
            this.unlockNextTransition()
          }}
        />
      ),
    })
  }
}

export default LeadMakerWorkFlow
