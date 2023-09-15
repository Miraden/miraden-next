import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { ApiResponse } from '@/infrastructure/Network/Http/ApiResponse'

export interface RegisterSubmitData {
  email: string
  name: string
  sellerStatus: string
}

class RegisterManager {
  constructor() {}

  public async newUser(data: RegisterSubmitData): Promise<ApiResponseType> {
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    const apiResponse: ApiResponse = new ApiResponse()
    // @ts-ignore
    const body = new URLSearchParams(data).toString()

    const res = await apiRequest.fetch({
      method: ApiRequestMethods.POST,
      headers: headers,
      endpoint: '/user/register',
      body: body,
    })

    return res as ApiResponseType
  }
}

export default RegisterManager
