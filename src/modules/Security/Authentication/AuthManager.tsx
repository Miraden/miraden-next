import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import {
  ApiResponse,
  HttpCodes,
} from '@/infrastructure/Network/Http/ApiResponse'
import Cookies from 'js-cookie'

const tokenName: string = 'token'

class AuthManager {
  private _isUserAuth: boolean

  constructor() {
    this._isUserAuth = false
  }

  async isTokenValid(): Promise<boolean> {
    const token = AuthManager.FindToken()
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
      AuthManager.Logout()
      res2 = false
    }
    return res2
  }

  authUser(token: string): void {
    localStorage.setItem(tokenName, token)
  }

  static FindToken(): string | null {
    const token = Cookies.get(tokenName)
    if (!token) return null
    return token
  }

  static Logout(): void {
    Cookies.remove(tokenName)
    if (localStorage.getItem(tokenName)) {
      localStorage.removeItem(tokenName)
    }
  }

  public isUserAuth(): boolean {
    return this._isUserAuth
  }

  public setUserAuth(val: boolean): void {
    this._isUserAuth = val
  }
}

export default AuthManager
