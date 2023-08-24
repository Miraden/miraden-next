declare interface ApiResponseMetadata {
  pages: object
  event: string
  requestId?: string
}

declare interface ApiResponseType {
  code: number
  payload?: object | null | Array<any>
  errors?: object | null
  metadata?: ApiResponseMetadata | null
}

declare interface ApiRequestType {
  method: string
  headers: HeadersInit
  body?: string | FormData
  endpoint: string
}
