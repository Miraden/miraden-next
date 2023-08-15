import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import {
  ApiResponse,
  HttpCodes,
} from '@/infrastructure/Network/Http/ApiResponse'

const tokenName: string = 'token'

class AuthManager {
  constructor() {}

  isUserHasToken(): boolean {
    const token: string | null = localStorage.getItem(tokenName)

    if (!token) {
      return false
    }

    return true
  }

  async isTokenValid(): Promise<boolean> {
    const token = this.findToken()
    if (token === null) {
      return Promise.resolve(false)
    }

    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    const apiResponse: ApiResponse = new ApiResponse()

    const data = new FormData()
    data.append('token', token)
    // @ts-ignore
    const body = new URLSearchParams(data).toString()

    let res2: boolean
    let res1 = await apiRequest.fetch({
      method: ApiRequestMethods.PUT,
      headers: headers,
      endpoint: '/user/token/validate',
      body: body,
    })
    const p: ApiResponseType = apiResponse.makeFromObject(res1)
    if (p.code === HttpCodes.OK) {
      res2 = true
    } else {
      this.logout()
      res2 = false
    }
    return res2
  }

  authUser(token: string): void {
    localStorage.setItem(tokenName, token)
  }

  findToken(): string | null {
    return localStorage.getItem(tokenName)
  }

  logout(): void {
    localStorage.removeItem(tokenName)
  }
}

export default AuthManager
