import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { HttpCodes } from '@/infrastructure/Network/Http/ApiResponse'

class AuthManagerServer {
  constructor() {
    if (typeof window !== 'undefined') return
  }

  public async validateToken(token: string): Promise<boolean> {
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    const data = new FormData()
    data.append('token', token)
    // @ts-ignore
    const body = new URLSearchParams(data).toString()

    const response = (await apiRequest.fetch({
      method: ApiRequestMethods.PUT,
      headers: headers,
      endpoint: '/user/token/validate',
      body: body,
    })) as ApiResponseType

    return response.code === HttpCodes.OK
  }

  public async getMyProfile(token: string): Promise<User.PublicProfile> {
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      Authorization: 'Bearer ' + token,
    }
    const response = (await apiRequest.fetch({
      method: ApiRequestMethods.GET,
      endpoint: '/user/profile/personal',
      body: '',
      headers: headers,
    })) as ApiResponseType

    return response.payload as User.PublicProfile
  }
}

export default AuthManagerServer
