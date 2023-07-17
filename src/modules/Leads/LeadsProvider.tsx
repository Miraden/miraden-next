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
  private isUserAuth: boolean
  private lang: string

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = []
    this.pages = null
    this.currentPage = 1
    this.url = ''
    this.onPageClick = () => {}
    this.isUserAuth = false
    this.lang = ''
  }

  public setLang(val: string): void {
    this.lang = val
  }

  public setUserAuthState(val: boolean): void {
    this.isUserAuth = val
  }

  public setUrl(value: string): void {
    this.url = value
  }

  public setPageCallback(call: Function): void {
    this.onPageClick = call
  }

  public fetchData(): Promise<any> {
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    if(this.isUserAuth) {
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
        {renderLead(this.payload, this.lang)}
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

function renderLead(data: Array<any>, lang: string): JSX.Element {
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
              type={item.type}
              status={item.status}
              deadlineAt={formatDeadlineDate(item.deadlineAt)}
              rooms={item.rooms}
              purpose={item.purpose}
              rentPeriod={item.rentPeriod}
              format={item.format}
              budget={{
                currency: item.budget.currency.symbol,
                startFrom: new Intl.NumberFormat(lang).format(item.budget.startFrom),
                endTo: new Intl.NumberFormat(lang).format(item.budget.endAt),
              }}
              purchaseType={'purchase'}
              author={item.author}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export { LeadsDataProvider }
