const tokenName: string = 'token'

class AuthManager {
  constructor() {
  }

  isUserHasToken(): boolean {
    const token: string | null = localStorage.getItem(tokenName)

    if (!token) {
      return false
    }

    return true
  }

  isTokenValid(): boolean {
    const token = this.findToken()
    if (token === null) {
      return false
    }

    // api request to backend
    return true;
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
