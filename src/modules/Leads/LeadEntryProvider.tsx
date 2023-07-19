import {
  ApiResponse,
  ApiResponseStructure,
  ApiResponseType,
  HttpCodes,
} from '@/infrastructure/Network/Http/ApiResponse'
import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import React from 'react'
import { Link as CustomLink } from '@/components/ui'
import { SingleApplication } from '@/modules/Applications/Application/components/SingleApplication'

class LeadEntryProvider {
  private isFetchCompleted: boolean
  private data?: typeof ApiResponseStructure | null
  private payload: any
  private url: string
  private lang: string
  private onHideToggle?: Function

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = {}
    this.url = ''
    this.lang = ''
    this.onHideToggle = () => {}
  }

  public onToggleEvent(callback: Function): void {
    this.onHideToggle = callback
  }

  public setLang(val: string): void {
    this.lang = val
  }

  public fetchById(id: number): Promise<any> {
    this.url = '/lead/' + id
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    if (localStorage.getItem('token')) {
      headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    }

    const apiResponse: ApiResponse = new ApiResponse()

    const response = apiRequest
      .fetch({
        method: ApiRequestMethods.GET,
        headers: headers,
        endpoint: this.url,
      })
      .then(async res => {
        return res
      })

    return response.then(async res => {
      const p: ApiResponseType = apiResponse.makeFromObject(res)
      this.data = p
      if (typeof p.payload == 'object') {
        this.payload = p.payload
      }
      this.isFetchCompleted = true
      return p
    })
  }

  public fetchVisibility(state: boolean, id: number): void {
    const url: string = '/lead/' + id + '/update'
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }

    const apiResponse: ApiResponse = new ApiResponse()
    const data = new FormData()
    data.append('isVisible', state.toString())
    // @ts-ignore
    const body = new URLSearchParams(data).toString()
    const response = apiRequest
      .fetch({
        method: ApiRequestMethods.PATCH,
        body: body,
        headers: headers,
        endpoint: url,
      })
      .then(async res => {
        const p: ApiResponseType = apiResponse.makeFromObject(res)
        if (p.code === HttpCodes.OK) {
          if (this.onHideToggle) this.onHideToggle('Visibility changed')
        }
        return res
      })

    response.then(async res => {
      const p: ApiResponseType = apiResponse.makeFromObject(res)
      this.data = p
      if (typeof p.payload == 'object') {
        this.payload = p.payload
      }
      this.isFetchCompleted = true
      return p
    })
  }

  public getPayload(): any {
    return this.payload
  }

  public setIsFinished(val: boolean): void {
    this.isFetchCompleted = val
  }

  public render(): JSX.Element {
    if (!this.isFetchCompleted) {
      return <ul className="LeadsList">Loading...</ul>
    }

    if (isTokenError(this.data)) {
      return (
        <>
          Session expired or invalid token
          <CustomLink href="/user/login" underlined>
            Login
          </CustomLink>
        </>
      )
    }

    if (AccessDenied(this.data)) {
      return <>Access Denied.</>
    }

    if (this.payload == null) {
      return <></>
    }

    const onHideButtonClick = (status: boolean) => {
      this.fetchVisibility(status, this.payload.id)
    }

    return (
      <SingleApplication
        className={"PageLead"}
        id={this.payload.id}
        isTrue={true}
        createdAt={formatCreatedDate(this.payload.createdAt)}
        location={{
          id: this.payload.city.id,
          city: this.payload.city.name,
          country: this.payload.city.country,
        }}
        format={this.payload.format}
        type={this.payload.type}
        status={this.payload.status}
        areas={this.payload.areas}
        rooms={{
          total: this.payload.rooms.total,
          beds: this.payload.rooms.beds,
          bathroom: this.payload.rooms.bathroom,
        }}
        purpose={this.payload.purpose}
        readyDeal={this.payload.readyDeal}
        purchaseType={this.payload.purchaseType}
        description={this.payload.wishes.text}
        deadlineAt={this.payload.deadlineAt}
        author={this.payload.author}
        budget={{
          currency: this.payload.budget.currency.symbol,
          startFrom: new Intl.NumberFormat(this.lang).format(
            this.payload.budget.startFrom
          ),
          endTo: new Intl.NumberFormat(this.lang).format(
            this.payload.budget.endAt
          ),
        }}
        isPinned={true}
        rentPeriod={this.payload.rentPeriod}
        title={this.payload.wishes.title}
        isHidden={this.payload.isHidden}
        onHideButtonClick={onHideButtonClick}
      />
    )
  }
}

function isTokenError(
  data: typeof ApiResponseStructure | null | undefined
): boolean {
  if (!data) return false
  if (!data.errors) return false

  if ('security' in data.errors) {
    return (
      data.errors.security === 'Expired JWT token' ||
      data.errors.security === 'Invalid JWT token' ||
      data.errors.security === 'Missing JWT token'
    )
  }

  return false
}

function AccessDenied(
  data: typeof ApiResponseStructure | null | undefined
): boolean {
  if (!data) return false
  if (!data.errors) return false

  return 403 === data.code
}

function formatCreatedDate(val: string): string {
  const date = new Date(val)
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ]
  return (
    date.getDate() +
    ' ' +
    months[date.getMonth()] +
    ', ' +
    date.getHours() +
    ':' +
    date.getMinutes()
  )
}

export { LeadEntryProvider }
