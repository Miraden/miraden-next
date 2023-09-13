declare interface JWTPayload {
  email: string
  exp: number
  iat: number
  id: number
  roles: string[]
}

declare interface TokenValidatorType {
  token: string
}
