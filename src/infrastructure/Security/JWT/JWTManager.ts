const Default: JWTPayload = {
  email: '',
  exp: 0,
  iat: 0,
  id: 0,
  roles: [],
}

export namespace Security {
  export function parseJWT(token: string): JWTPayload {
    if (token === 'null') return Default
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    return JSON.parse(jsonPayload) as JWTPayload
  }

  export function parseJWTServer(token: string): JWTPayload {
    if (token === 'null') return Default

    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return Default
    }
  }
}
