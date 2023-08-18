import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { ApiResponse } from '@/infrastructure/Network/Http/ApiResponse'

const URL: string = '/currencies'

export interface CurrencyStruct {
  symbol: string
  code: string
  value: number
  id: number
  label: string
  isDefault: boolean
}

class CurrencyProvider {
  private response: ApiResponse
  private readonly request: ApiRequest
  private data: CurrencyStruct[]

  constructor() {
    this.response = new ApiResponse()
    this.request = new ApiRequest()
    this.data = []
  }

  public fetch(): Promise<Object> {
    const response: Promise<Object> = this.request
      .fetch({
        method: ApiRequestMethods.GET,
        headers: {
          'Content-Type': 'application/json',
        },
        endpoint: URL,
      })
      .then(async res => {
        return res
      })

    response.then(async res => {
      const r: ApiResponseType = this.response.makeFromObject(res)
      const p = r.payload
      if (typeof p != 'object') return p

      const payload: Array<Object> = p as Array<Object>

      this.data = payload.map((item: any): CurrencyStruct => {
        return {
          id: item['id'],
          code: item['code'],
          symbol: item['symbol'],
          value: item['value'],
          label: item['label'],
          isDefault: item['isDefault'],
        }
      })
    })

    return response
  }

  public getList(): CurrencyStruct[] {
    return this.data
  }

  public findDefault(): CurrencyStruct {
    let found: CurrencyStruct[] = []
    this.data.map((i: CurrencyStruct) => {
      if (i.isDefault) found.push(i)
    })

    if (found.length === 0) {
      throw 'No default currency'
    }

    return found[0]
  }
}

export default CurrencyProvider
