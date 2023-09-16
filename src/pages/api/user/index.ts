import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import { NextApiRequest, NextApiResponse } from 'next'
import { HttpCodes } from '@/infrastructure/Network/Http/ApiResponse'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiRequest: ApiRequest = new ApiRequest()
  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  const submittedData = req.body

  const data: string = new URLSearchParams(submittedData).toString()
  const response: ApiResponseType = (await apiRequest.fetch({
    method: ApiRequestMethods.POST,
    headers: headers,
    body: data,
    endpoint: '/user/login',
  })) as ApiResponseType

  if (response.code !== HttpCodes.OK) {
    const result: ApiResponseType = response
    res.status(result.code).json(result)
    return
  }

  const payload = response.payload as UserAuthPayload
  const token = payload.token

  const result: ApiResponseType = {
    code: 200,
    payload: {
      token: token,
    },
  }

  res.setHeader('set-cookie', makeCookie(7, token))

  res.status(200).json(result)
}

function makeCookie(expiredDays: number, token: string): string {
  const expiredAt = new Date()
  expiredAt.setDate(expiredAt.getDate() + 7)

  return 'token=' + token + '; Path=/; Expires=' + expiredAt.toUTCString() + ';'
}
