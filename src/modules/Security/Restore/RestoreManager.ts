import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'

class RestoreManager {
  constructor() {}

  public async sendRequest(
    data: RestoreSubmitStruct
  ): Promise<ApiResponseType> {
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    // @ts-ignore
    const body = new URLSearchParams(data).toString()

    const res = await apiRequest.fetch({
      method: ApiRequestMethods.PATCH,
      headers: headers,
      endpoint: '/user/password',
      body: body,
    })
    return res as ApiResponseType
  }

  public async verifyToken(token: string): Promise<ApiResponseType> {
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    const data = new FormData()
    data.append('token', token)
    // @ts-ignore
    const body = new URLSearchParams(data).toString()

    const res = await apiRequest.fetch({
      method: ApiRequestMethods.POST,
      headers: headers,
      endpoint: '/user/password/verify',
      body: body,
    })
    return res as ApiResponseType
  }
}

export default RestoreManager
