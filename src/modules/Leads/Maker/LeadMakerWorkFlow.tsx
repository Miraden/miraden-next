import StepLocation from '@/modules/Leads/Maker/StepLocation'
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
import StepWishes from "@/modules/Leads/Maker/StepWishes";
import StepPeriod from "@/modules/Leads/Maker/StepPeriod";
import StepRentBudget from "@/modules/Leads/Maker/StepRentBudget";

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
    root: string
    sublevel: string
  }
  estateStatus: string
  deadlineAt: string
  buildYear: string
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
    firstPayment: number
    format: string
  }
  wished: {
    title: string
    text: string
  }
}

let submitData: SubmitDataStruct = {
  location: {
    city: '',
    country: '',
  },
  format: 'apartment',
  estateType: {
    root: '',
    sublevel: '',
  },
  estateStatus: '',
  deadlineAt: '',
  buildYear: '',
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
    firstPayment: 0,
    format: '',
  },
  wished: {
    title: '',
    text: '',
  },
}

export enum StateDirection {
  Forward = 'Forward',
  Backward = 'Backward',
}

export enum LeadMakerStates {
  Location = 1,
  Format = 2,
  EstateType = 3,
  Status = 4,
  Area = 5,
  Rooms = 6,
  Purpose = 7,
  ReadyDeal = 8,
  Budget = 9,
  Purchase = 10,
  Wishes = 11,
}

enum FormatRentStates {
  Area = 5,
  Period = 7,
  ReadyDeal = 8,
  Budget = 9,
  Wishes = 11,
}

export enum SupportStates {
  Intro = 'intro',
  Payment = 'payment',
}

enum FormatTypes {
  buy = 'buy',
  rent = 'rent',
}

export const LeadMakerDefaultUrl: string = '/lead/add/'

export interface LeadMakerStruct {
  state: string | number
  title: string
  body: JSX.Element
  url?: string
  nextUrlLabel: string
  prevUrlLabel: string
  nextState?: string | number
  prevState?: string | number
}

const LeadMakerStructDefault: LeadMakerStruct = {
  state: SupportStates.Intro,
  title: '',
  body: <></>,
  prevUrlLabel: 'Назад',
  nextUrlLabel: 'Вперед',
}

class LeadMakerWorkFlow {
  private currentState: number | string
  private nextState: number | string
  private prevState: number | string
  private nextTransitionAllow: boolean
  private prevTransitionAllow: boolean
  private onStateCallback: Function
  private contentChanged: Function
  private stateDirection: StateDirection
  private statesManager: StatesManager

  constructor() {
    this.currentState = SupportStates.Intro
    this.nextState = LeadMakerStates.Location
    this.prevState = SupportStates.Intro
    this.nextTransitionAllow = true
    this.prevTransitionAllow = true
    this.onStateCallback = (dir: StateDirection) => {}
    this.stateDirection = StateDirection.Forward
    this.contentChanged = () => {}
    this.statesManager = new StatesManager()
  }

  public rules(state: number | string): void {
    this.setState(state)

    if (state === SupportStates.Intro) {
      this.nextState = LeadMakerStates.Location
      this.prevState = SupportStates.Intro
      this.statesManager.storeDefault()
    }

    if (state === LeadMakerStates.Location) {
      this.nextState = LeadMakerStates.Format
      this.prevState = SupportStates.Intro
      this.statesManager.storeDefault()
    }

    if (state === LeadMakerStates.Format) {
      this.nextState = LeadMakerStates.EstateType
      this.prevState = LeadMakerStates.Location
      this.statesManager.storeDefault()
    }

    if (state === LeadMakerStates.EstateType) {
      if (submitData.format === FormatTypes.buy) {
        this.FormatBuyBranch()
      }
      if (submitData.format === FormatTypes.rent) {
        this.FormatRentBranch()
      }
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
    return Object.keys(LeadMakerStates).length / 2
  }

  public findData(state: number | string): LeadMakerStruct {
    const isFormType = StatesType.Steps === this.isStateTypeOf(state)
    const isSupportType = StatesType.Support === this.isStateTypeOf(state)

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
    // if (this.getCurrentState() === SupportStates.Intro) {
    //   this.unlockNextTransition()
    // } else {
    //   this.lockNextTransition()
    // }
    this.onStateCallback = callback
  }

  public onContentChange(callback: Function): void {
    this.contentChanged = callback
    this.statesManager.setContentChangedCallback(callback)
  }

  public calcProgress(state: number | string): number {
    const total: number = this.getTotalSteps()
    const current: number | string = this.currentState

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

  private goToState(state: number | string): void {
    this.currentState = state
  }

  private setState(step: number | string): void {
    const isSupport: boolean = this.isStateTypeOf(step) === StatesType.Support
    const isSteps: boolean = this.isStateTypeOf(step) === StatesType.Steps

    const array = this.statesManager.getStates()
    const found = array.find((i, id) => {
      return i.state == step
    })

    if (found === undefined) {
      this.currentState = SupportStates.Intro
      return
    }

    this.currentState = found.state
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

  private FormatRentBranch(): void {
    this.nextState = LeadMakerStates.Area
    this.statesManager.append({
      state: FormatRentStates.Area,
      title: 'Какая площадь',
      body: <StepArea
        context={'rent'}
        onChanged={e => {
          submitData.area = e.total
          submitData.livingArea = e.living
          this.contentChanged(e)
        }}
      />,
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      nextState: FormatRentStates.Period,
      prevState: LeadMakerStates.EstateType,
    })
    this.statesManager.append({
      state: FormatRentStates.Period,
      title: 'Укажите период аренды',
      body: <StepPeriod onChange={e => {
        submitData.rentPeriod.start = e.dateFrom
        submitData.rentPeriod.end = e.dateTo
        this.contentChanged(e)
      }}/>,
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      nextState: FormatRentStates.ReadyDeal,
      prevState: FormatRentStates.Area,
    })
    this.statesManager.append({
      state: FormatRentStates.ReadyDeal,
      title: 'Когда начать арендовать',
      body: <>ready deal</>,
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      prevState: FormatRentStates.Period,
      nextState: FormatRentStates.Budget,
    })
    this.statesManager.append({
      state: FormatRentStates.Budget,
      title: 'Укажите примерный бюджет аренды',
      body: (
        <StepRentBudget
          onChanged={e => {
            submitData.budget.currency = e.currencyId
            submitData.budget.from = e.from
            submitData.budget.to = e.to
            submitData.budget.period = e.period
            this.contentChanged(e)
          }}
        />
      ),
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      prevState: FormatRentStates.ReadyDeal,
      nextState: FormatRentStates.Wishes,
    })
    this.statesManager.append({
      state: FormatRentStates.Wishes,
      title: 'Опишите ваши дополнительные пожелания',
      body: <StepWishes onChange={e => {
        submitData.wished.text = e.wishes
        submitData.wished.title = e.title
        this.contentChanged(e)
      }}/>,
      prevUrlLabel: 'Назад',
      nextUrlLabel: 'Вперед',
      prevState: FormatRentStates.ReadyDeal,
      nextState: SupportStates.Payment,
    })
  }

  private FormatBuyBranch(): void {
    const rootLabel = submitData.estateType.root
    if (rootLabel === 'apartment' || rootLabel === 'house') {
      this.nextState = LeadMakerStates.Status
      this.statesManager.append({
        state: LeadMakerStates.Status,
        title: 'Состояние',
        body: (
          <StepStatus
            onChanged={e => {
              submitData.estateStatus = e.status
              submitData.deadlineAt = e.deadlineAfter
              submitData.buildYear = e.buildYear
              this.contentChanged(e)
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStates.EstateType,
        nextState: LeadMakerStates.Area,
      })
      this.statesManager.append({
        state: LeadMakerStates.Area,
        title: 'Укажите общую площадь недвижимости',
        body: (
          <StepArea
            context={rootLabel}
            onChanged={e => {
              submitData.area = e.total
              submitData.livingArea = e.living
              this.contentChanged(e)
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStates.Status,
        nextState: LeadMakerStates.Rooms,
      })
      this.statesManager.append({
        state: LeadMakerStates.Rooms,
        title: 'Количество комнат?',
        body: <StepRooms onChanged={e => {}} />,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStates.Area,
        nextState: LeadMakerStates.Purpose,
      })
      this.statesManager.append({
        state: LeadMakerStates.Purpose,
        title: 'Укажите цель покупки',
        body: (
          <StepPurpose
            onChanged={e => {
              submitData.purpose = String(e)
              this.contentChanged(e)
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStates.Rooms,
        nextState: LeadMakerStates.ReadyDeal,
      })
      this.statesManager.append({
        state: LeadMakerStates.ReadyDeal,
        title: 'Как срочно?',
        body: (
          <StepReadyDeal
            onChanged={e => {
              submitData.readyDeal = e
              this.contentChanged(e)
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStates.Purpose,
        nextState: LeadMakerStates.Budget,
      })
      this.statesManager.append({
        state: LeadMakerStates.Budget,
        title: 'Бюджет',
        body: (
          <StepBuyBudget
            onChanged={e => {
              submitData.budget.currency = e.currencyId
              submitData.budget.from = e.from
              submitData.budget.to = e.to
              this.contentChanged(e)
            }}
          />
        ),
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStates.ReadyDeal,
        nextState: LeadMakerStates.Purchase,
      })
      this.statesManager.append({
        state: LeadMakerStates.Purchase,
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
        prevState: LeadMakerStates.Budget,
        nextState: LeadMakerStates.Wishes,
      })
      this.statesManager.append({
        state: LeadMakerStates.Wishes,
        title: 'Опишите ваши дополнительные пожелания',
        body: <StepWishes onChange={e => {
          submitData.wished.text = e.wishes
          submitData.wished.title = e.title
          this.contentChanged(e)
        }}/>,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Вперед',
        prevState: LeadMakerStates.Purchase,
        nextState: SupportStates.Payment,
      })
    }

    if (rootLabel === 'land') {
      this.nextState = LeadMakerStates.Area
      this.statesManager.append({
        title: 'Укажите площадь участка земли',
        state: LeadMakerStates.Area,
        body: (
          <StepArea
            context={rootLabel}
            onChanged={e => {
              submitData.area = e.total
              submitData.livingArea = e.living
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.EstateType,
        nextState: LeadMakerStates.Purpose,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Цель покупки?',
        state: LeadMakerStates.Purpose,
        body: (
          <StepPurpose
            onChanged={e => {
              submitData.purpose = String(e)
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.Area,
        nextState: LeadMakerStates.ReadyDeal,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Как срочно?',
        state: LeadMakerStates.ReadyDeal,
        body: (
          <StepReadyDeal
            onChanged={e => {
              submitData.readyDeal = e
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.Purpose,
        nextState: LeadMakerStates.Budget,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Бюджет',
        state: LeadMakerStates.Budget,
        body: (
          <StepBuyBudget
            onChanged={e => {
              submitData.budget.currency = e.currencyId
              submitData.budget.from = e.from
              submitData.budget.to = e.to
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.ReadyDeal,
        nextState: LeadMakerStates.Purchase,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите удобный способ покупки',
        state: LeadMakerStates.Purchase,
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
        prevState: LeadMakerStates.Budget,
        nextState: LeadMakerStates.Wishes,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Опишите ваши дополнительные пожелания',
        state: LeadMakerStates.Wishes,
        body: <StepWishes onChange={e => {
          submitData.wished.text = e.wishes
          submitData.wished.title = e.title
          this.contentChanged(e)
        }}/>,
        prevState: LeadMakerStates.Budget,
        nextState: SupportStates.Payment,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
    }

    if (rootLabel === 'commercial') {
      this.nextState = LeadMakerStates.Status
      this.statesManager.append({
        title: 'Состояние?',
        state: LeadMakerStates.Status,
        body: (
          <StepStatus
            onChanged={e => {
              submitData.estateStatus = e.status
              submitData.deadlineAt = e.deadlineAfter
              submitData.buildYear = e.buildYear
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.EstateType,
        nextState: LeadMakerStates.Area,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите площадь недвижимости',
        state: LeadMakerStates.Area,
        body: (
          <StepArea
            context={rootLabel}
            onChanged={e => {
              submitData.area = e.total
              submitData.livingArea = e.living
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.Status,
        nextState: LeadMakerStates.Purpose,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Цель покупки?',
        state: LeadMakerStates.Purpose,
        body: (
          <StepPurpose
            onChanged={e => {
              submitData.purpose = String(e)
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.Area,
        nextState: LeadMakerStates.ReadyDeal,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Как срочно?',
        state: LeadMakerStates.ReadyDeal,
        body: (
          <StepReadyDeal
            onChanged={e => {
              submitData.readyDeal = e
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.Purpose,
        nextState: LeadMakerStates.Budget,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Бюджет',
        state: LeadMakerStates.Budget,
        body: (
          <StepBuyBudget
            onChanged={e => {
              submitData.budget.currency = e.currencyId
              submitData.budget.from = e.from
              submitData.budget.to = e.to
              this.contentChanged(e)
            }}
          />
        ),
        prevState: LeadMakerStates.ReadyDeal,
        nextState: LeadMakerStates.Purchase,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Укажите удобный способ покупки',
        state: LeadMakerStates.Purchase,
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
        prevState: LeadMakerStates.Budget,
        nextState: LeadMakerStates.Wishes,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
      this.statesManager.append({
        title: 'Опишите ваши дополнительные пожелания',
        state: LeadMakerStates.Wishes,
        body: <StepWishes onChange={e => {
          submitData.wished.text = e.wishes
          submitData.wished.title = e.title
          this.contentChanged(e)
        }}/>,
        prevState: LeadMakerStates.Purchase,
        nextState: SupportStates.Payment,
        prevUrlLabel: 'Назад',
        nextUrlLabel: 'Далее',
      })
    }
  }
}

class StatesManager {
  private states: LeadMakerStruct[]
  private contentChanged: Function

  constructor() {
    this.states = []
    this.storeDefault()
    this.contentChanged = () => {}
  }

  public setContentChangedCallback(callback: Function): void {
    this.contentChanged = callback
  }

  public append(data: LeadMakerStruct): void {
    const isExist = this.findByState(data.state)
    if (!isExist) this.states.push(data)
  }

  public findByState(val: string | number): LeadMakerStruct | null {
    const found = this.states.find(i => {
      return i.state === val
    })

    if (!found) return null

    return found
  }

  public getTotal(): number {
    return this.states.length
  }

  public getStates(): LeadMakerStruct[] {
    return this.states
  }

  public storeDefault(): void {
    this.states = []
    this.states.push({
      title: 'Укажите город или расположение недвижимости',
      state: LeadMakerStates.Location,
      nextUrlLabel: 'Далее',
      prevUrlLabel: 'Назад',
      prevState: SupportStates.Intro,
      nextState: LeadMakerStates.Format,
      body: (
        <StepLocation
          onFinished={(e: any) => {
            submitData.location.city = e.city
            submitData.location.country = e.country
          }}
        />
      ),
    })
    this.states.push({
      title: 'Укажите формат сделки с недвижимостью',
      state: LeadMakerStates.Format,
      nextUrlLabel: 'Далее',
      prevUrlLabel: 'Назад',
      prevState: LeadMakerStates.Location,
      nextState: LeadMakerStates.EstateType,
      body: (
        <StepFormat
          onChanged={(e: any) => {
            submitData.format = e
            this.contentChanged(e)
          }}
        />
      ),
    })
    this.states.push({
      title: 'Укажите тип недвижимости',
      state: LeadMakerStates.EstateType,
      prevState: LeadMakerStates.Format,
      nextUrlLabel: 'Далее',
      prevUrlLabel: 'Назад',
      body: (
        <StepEstateType
          onChanged={e => {
            submitData.estateType.sublevel = e.subLevel
            submitData.estateType.root = e.root
            this.storeDefault()
            this.contentChanged(e)
          }}
        />
      ),
    })
  }
}

export default LeadMakerWorkFlow
