import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import {
  ApiResponse,
  ApiResponseStructure,
} from '@/infrastructure/Network/Http/ApiResponse'
import React from 'react'
import { LeadCard } from '@/modules/Leads/components/LeadCard'
import Image from 'next/image'
import { Button } from '@/components/ui'

class LeadsAllProvider {
  private isFetchCompleted: boolean
  private data?: typeof ApiResponseStructure | null
  private payload: Array<any>

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = []
  }

  public fetchData(): Promise<any> {
    return leadsGetAll()
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

    if (this.payload.length == 0) {
      return renderEmptyLeads()
    }
    return renderLead(this.payload)
  }
}

class LeadsFavoritesProvider {
  private isFetchCompleted: boolean
  private data?: typeof ApiResponseStructure | null
  private payload: Array<any>

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = []
  }

  public fetchData(): Promise<any> {
    return leadsGetFavorites()
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

    if (this.payload.length == 0) {
      return renderEmptyLeads()
    }
    return renderLead(this.payload)
  }
}

function renderEmptyLeads(): JSX.Element {
  return (
    <>
      <Image src="/images/apps/4.svg" alt="" width={200} height={200} />
      <h2>Нет созданных заявок</h2>
      <p className="Color_text_grey">Но вы можете сделать это прямо сейчас! </p>
      <Button className="CreateApp__button" compact>
        Создать заявку
      </Button>
    </>
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
      return response.makeFromString(res)
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
      return response.makeFromString(res)
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

export { leadsGetFavorites, leadsGetAll, LeadsAllProvider, LeadsFavoritesProvider }
