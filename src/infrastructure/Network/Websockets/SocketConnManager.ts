interface Subscriber {
  callback: Function
  event: string
  requestId?: string
}

class SocketConnManager {
  private socket: WebSocket | null
  private url?: string
  private onOpen: Function
  private onClose: Function
  private onMessage: (event?: MessageEvent) => void
  private subscribers: Subscriber[]

  constructor(url?: string) {
    this.url = url
    this.socket = null
    this.onOpen = (): void => {}
    this.onMessage = (event?: MessageEvent) => {}
    this.onClose = (): void => {}
    this.subscribers = []
  }

  public create(url?: string): void {
    if (!url) return
    if (this.socket) return
    this.url = url
    this.socket = new WebSocket(this.url)
    this.makeEvents()
  }

  public connect(): void {
    if (!this.url) return
    this.socket = new WebSocket(this.url)
    this.makeEvents()
  }

  public makeEvents(): void {
    this.socket?.addEventListener('open', () => {
      this.onOpen()
      this.pingPong(5000)
    })
    this.socket?.addEventListener('close', () => {
      // this.reconnectEvery(2000)
    })
    this.socket?.addEventListener('message', (event: MessageEvent) => {
      const response = JSON.parse(event.data) as ApiResponseType
      const subscriber = this.findSubscriber(response)
      if (subscriber && event) subscriber.callback(event)
      this.onMessage(event)
    })
  }

  public clearEvents(): void {
    this.socket?.removeEventListener('open', this.onOpen())
    this.socket?.removeEventListener('close', this.onClose())
    this.socket?.removeEventListener('message', () => {
      this.onMessage()
    })
  }

  public reconnectEvery(timeout: number): void {
    setTimeout(() => {
      this.socket = null
      this.create(this.url)
    }, timeout)
  }

  public pingPong(timeout: number): void {
    setInterval(() => {
      if (!this.socket) return
      this.send('ping')
    }, timeout)
  }

  public close(): void {
    this.clearEvents()
    this.socket?.close()
  }

  public send(data: string): void {
    this.socket?.send(data)
  }

  public OnClose(callback: Function): void {
    this.onClose = callback
  }

  public OnOpen(callback: Function): void {
    this.onOpen = callback
  }

  public OnMessage(callback: (event?: MessageEvent) => void): void {
    this.onMessage = callback
  }

  public subscribe(
    callback: Function,
    events: string[],
    requestId?: string
  ): void {
    events.map((e: string) => {
      this.subscribers.push({
        callback: callback,
        event: e,
        requestId: requestId,
      })
    })
  }

  public unSubscribe(event: string): void {
    this.subscribers.filter(el => el.event !== event)
  }

  private findSubscriber(response: ApiResponseType): Subscriber | null {
    const found = this.subscribers.find(el => {
      if (!el.requestId) return el.event === response.metadata?.event

      return (
        el.requestId === response.metadata?.requestId &&
        el.event === response.metadata?.event
      )
    })

    if (!found) return null

    return found
  }
}

export default SocketConnManager
