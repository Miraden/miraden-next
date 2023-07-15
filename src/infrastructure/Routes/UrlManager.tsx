class UrlManager {
  constructor() {
  }

  public updateQuery(key: string, value: any): void {
    const searchParams: URLSearchParams = new URLSearchParams(this.getQuery())
    searchParams.set(key, value)
    const path: string = this.getPath() + '?' + searchParams.toString()
    history.pushState(null, '', path)
  }

  public deleteQuery(key: string): void {
    const searchParams: URLSearchParams = new URLSearchParams(this.getQuery())
    searchParams.delete(key)
    const path = this.getPath() + '?' + searchParams.toString()
    history.pushState(null, '', path)
  }

  public getPath(): string {
    return window.location.pathname
  }

  public getHost(): string {
    return window.location.host
  }

  public getQuery(): string {
    return window.location.search
  }

  public getQueryAll(): Array<string> {
    const searchParams: URLSearchParams = new URLSearchParams(this.getQuery())

    let result: Array<string> = []
    searchParams.forEach(i => {
      result.push(i)
    })

    return result
  }

  public getQueryByName(key: string): string | null {
    const searchParams: URLSearchParams = new URLSearchParams(this.getQuery())
    return searchParams.get(key)
  }

  public updatePath(value: string): void {
    history.pushState(null, '', value)
  }
}

export { UrlManager }
