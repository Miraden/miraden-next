import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import {
  ApiPagesStructure,
  ApiResponse,
  ApiResponseStructure,
} from '@/infrastructure/Network/Http/ApiResponse'
import React from 'react'
import { LeadCard } from '@/modules/Leads/components/LeadCard'
import Image from 'next/image'
import { Link as CustomLink } from '@/components/ui'
import { Pagination, Types as PaginationType } from '@/components/ui/Pagination'

class LeadsDataProvider {
  private isFetchCompleted: boolean
  private data: typeof ApiResponseStructure | null
  private payload: Array<any>
  private pages: typeof ApiPagesStructure | null
  private currentPage: number
  private url: string
  private onPageClick: Function

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = []
    this.pages = null
    this.currentPage = 1
    this.url = ''
    this.onPageClick = () => {}
  }

  public setUrl(value: string): void {
    this.url = value
  }

  public setPageCallback(call: Function): void {
    this.onPageClick = call
  }

  public fetchData(): Promise<any> {
    const apiRequest: ApiRequest = new ApiRequest()
    const headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
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

    const payload = response.then(async res => {
      const p = apiResponse.makeFromObject(res)
      this.data = p
      if (typeof p.payload == 'object') {
        this.payload = p.payload as Array<any>
      }
      this.isFetchCompleted = true
      return p
    })

    response
      .then(async res => {
        return apiResponse.getPages()
      })
      .then(r => {
        this.pages = r
        return r
      })

    return payload
  }

  public isReady(): boolean {
    return this.isFetchCompleted
  }

  public setCurrentPage(val: number): void {
    this.currentPage = val
  }

  public setFetchedData(data: typeof ApiResponseStructure): void {
    this.data = data
    if (typeof data.payload == 'object') {
      this.payload = data.payload as Array<any>
    }
  }

  public setIsFinished(val: boolean): void {
    this.isFetchCompleted = val
  }

  public render(): JSX.Element {
    if (!this.isFetchCompleted) {
      return <ul className="LeadsList">Loading...</ul>
    }

    if (isAccessDenied(this.data)) {
      return (
        <>
          Session expired or invalid token
          <CustomLink href="/user/login" underlined>
            Login
          </CustomLink>
        </>
      )
    }

    if (this.payload == null) {
      return <></>
    }

    if (this.payload.length == 0) {
      return renderEmptyLeads()
    }

    return (
      <>
        {renderLead(this.payload)}
        {this.pages && this.pages.total > 1 && (
          <Pagination
            total={this.pages.total}
            current={this.currentPage}
            type={PaginationType.Pages}
            onClick={e => {
              this.onPageClick(e)
            }}
          />
        )}
      </>
    )
  }
}

function isAccessDenied(
  data: typeof ApiResponseStructure | null | undefined
): boolean {
  if (!data) return false
  if (!data.errors) return false

  if ('security' in data.errors) {
    return (
      data.errors.security === 'Expired JWT token' ||
      data.errors.security === 'Invalid JWT token'
    )
  }

  return false
}

function renderEmptyLeads(): JSX.Element {
  return (
    <div className={'Leads_empty'}>
      <Image src="/images/apps/4.svg" alt="" width={200} height={200} />
      <h2>Нет заявок</h2>
    </div>
  )
}

async function leadsGetAll(): Promise<any> {
  const apiRequest: ApiRequest = new ApiRequest()
  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }

  return apiRequest
    .fetch({
      method: ApiRequestMethods.GET,
      headers: headers,
      endpoint: '/leads',
    })
    .then(async res => {
      const response = new ApiResponse()
      console.log(response.getPages())
      return response.makeFromObject(res)
    })
}

async function leadsGetFavorites(): Promise<any> {
  const apiRequest: ApiRequest = new ApiRequest()
  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }

  return apiRequest
    .fetch({
      method: ApiRequestMethods.GET,
      headers: headers,
      endpoint: '/leads/favorites',
    })
    .then(async res => {
      const response = new ApiResponse()
      return response.makeFromObject(res)
    })
}

async function getAimExecutant(): Promise<any> {
  const apiRequest: ApiRequest = new ApiRequest()
  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }

  return apiRequest
    .fetch({
      method: ApiRequestMethods.GET,
      headers: headers,
      endpoint: '/leads/aimexecutant',
    })
    .then(async res => {
      const response = new ApiResponse()
      return response.makeFromObject(res)
    })
}

async function getMyRequests(): Promise<any> {
  const apiRequest: ApiRequest = new ApiRequest()
  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }

  return apiRequest
    .fetch({
      method: ApiRequestMethods.GET,
      headers: headers,
      endpoint: '/leads/my/requests',
    })
    .then(async res => {
      const response = new ApiResponse()
      return response.makeFromObject(res)
    })
}

function statusTranslate(val: string): string {
  switch (val) {
    case 'secondary':
      return 'Вторичная'
    case 'new':
      return 'Новая'
    case 'any':
      return 'Любая'
  }
  return ''
}

function typeTranslate(val: Object): Array<string> {
  return ['Коммерческая', 'Апартаменты']
}

function formatDeadlineDate(val: string): string {
  const date = new Date(val)

  return date.getFullYear().toString()
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
  return date.getDate() + ' ' + months[date.getMonth()]
}

function renderLead(data: Array<any>): JSX.Element {
  return (
    <>
      <ul className="LeadsList">
        {data.map((item, index) => (
          <li key={index}>
            <LeadCard
              id={item.id}
              title={item.wishes.title}
              areas={{
                total: item.areas.total.value,
                living: item.areas.living.value,
              }}
              isTrue={true}
              createdAt={formatCreatedDate(item.createdAt)}
              location={item.city.country + ' / ' + item.city.name}
              isPublished={true}
              type={typeTranslate(item.type)}
              status={statusTranslate(item.status)}
              deadlineAt={formatDeadlineDate(item.deadlineAt)}
              rooms={item.rooms}
              purpose={item.purpose}
              readyDeal={item.readyDeal}
              rentPeriod={item.rentPeriod}
              format={item.format}
              budget={{
                currency: item.budget.currency.symbol,
                startFrom: item.budget.startFrom,
                endTo: item.budget.endAt,
              }}
              purchaseType={'purchase'}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export { LeadsDataProvider }
