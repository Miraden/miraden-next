import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { ApiResponse } from '@/infrastructure/Network/Http/ApiResponse'

class RoomsProvider {
  constructor() {}

  public async fetchAll(): Promise<Chat.Leads[]> {
    const apiRequest: ApiRequest = new ApiRequest()

    const apiResponse: ApiResponse = new ApiResponse()

    const response = apiRequest
      .fetch({
        method: ApiRequestMethods.GET,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        endpoint: '/chat/leads',
      })
      .then(async res => {
        return res
      })

    const res_1 = await response
    const p = apiResponse.makeFromObject(res_1)
    return p.payload as Chat.Leads[]
  }

  public async fetchRequests(): Promise<Chat.Leads[]> {
    const apiRequest: ApiRequest = new ApiRequest()

    const apiResponse: ApiResponse = new ApiResponse()

    const response = apiRequest
      .fetch({
        method: ApiRequestMethods.GET,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        endpoint: '/chat/leads?view=requests',
      })
      .then(async res => {
        return res
      })

    const res_1 = await response
    const p = apiResponse.makeFromObject(res_1)
    return p.payload as Chat.Leads[]
  }

    public async fetchExecutants(): Promise<Chat.Leads[]> {
        const apiRequest: ApiRequest = new ApiRequest()

        const apiResponse: ApiResponse = new ApiResponse()

        const response = apiRequest
            .fetch({
                method: ApiRequestMethods.GET,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
                endpoint: '/chat/leads?view=executants',
            })
            .then(async res => {
                return res
            })

        const res_1 = await response
        const p = apiResponse.makeFromObject(res_1)
        return p.payload as Chat.Leads[]
    }
}

export default RoomsProvider
