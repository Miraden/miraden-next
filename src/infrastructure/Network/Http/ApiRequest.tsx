enum ApiRequestMethods {
  POST = "POST",
  GET = "GET",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  PATCH = "PATCH",
  PUT = "PUT"
}

interface Props {
  method: ApiRequestMethods
  headers: HeadersInit
  body: string
  endpoint: string
}

const defaultHeaders: HeadersInit = {
  "accept": "application/json",
  'X-Requested-With': 'XMLHttpRequest'
}

class ApiRequest {
  constructor() {
  }

  getUrl(): string {
    const url: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL
    if (!url) {
      throw new DOMException("api url not defined", "api")
    }

    return url
  }

  async fetch({method, headers, body, endpoint}: Props): Promise<Object> {
    const uri: string = this.getUrl() + endpoint
    const _headers: HeadersInit = Object.assign(defaultHeaders, headers)
    const response: Response = await fetch(uri, {
      method: method,
      headers: _headers,
      body: body
    })

    const j = response.json()
    const result: any[] = await Promise.all([j])

    return result.at(0)
  }
}

export {ApiRequest, ApiRequestMethods}
