import {
  ApiResponse,
  ApiResponseStructure,
} from '@/infrastructure/Network/Http/ApiResponse'
import { Link as CustomLink } from '@/components/ui'
import React from 'react'
import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { LeadCard } from '@/modules/Leads/components/LeadCard'
import Image from 'next/image'

class MyLeadsCustomerDataProvider {
  private isFetchCompleted: boolean
  private data?: typeof ApiResponseStructure | null
  private payload: Array<any>

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = []
  }

  public fetchData(url: string): Promise<any> {
    const apiRequest: ApiRequest = new ApiRequest()
    const headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }

    return apiRequest
      .fetch({
        method: ApiRequestMethods.GET,
        headers: headers,
        endpoint: url,
      })
      .then(async res => {
        const response = new ApiResponse()
        return response.makeFromObject(res)
      })
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
    return renderLead(this.payload)
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

function renderLead(data: Array<any>): JSX.Element {
  return (
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
  )
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

function renderEmptyLeads(): JSX.Element {
  return (
    <div className={"LeadsList"}>
      <div className={'Leads_empty'}>
        <Image src="/images/apps/4.svg" alt="" width={200} height={200} />
        <h2>Нет заявок</h2>
      </div>
    </div>
  )
}

export { MyLeadsCustomerDataProvider }