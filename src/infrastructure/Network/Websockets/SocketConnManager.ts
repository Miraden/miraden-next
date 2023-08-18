class SocketConnManager {
  private socket: WebSocket | null
  private url?: string
  private onOpen: Function
  private onClose: Function
  private onMessage: (event?: MessageEvent) => void

  constructor() {
    this.url = ''
    this.socket = null
    this.onOpen = (): void => {}
    this.onMessage = (event?: MessageEvent) => {}
    this.onClose = (): void => {}
  }

  public create(url?: string): void {
    if (!url) return
    if (this.socket) return
    this.socket = new WebSocket(url)
    this.makeEvents()
  }

  public makeEvents(): void {
    this.socket?.addEventListener('open', () => {
      this.onOpen()
      this.pingPong(5000)
    })
    this.socket?.addEventListener('close', () => {
      this.reconnectEvery(2000)
    })
    this.socket?.addEventListener('message', (event: MessageEvent) => {
      this.onMessage(event)
    })
  }

  public clearEvents(): void {
    this.socket?.removeEventListener('open', this.onOpen())
    this.socket?.removeEventListener('close', this.onClose())
    this.socket?.removeEventListener('message', this.onMessage)
  }

  public reconnectEvery(timeout: number): void {
    setTimeout(() => {
      this.onClose()
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
}

export default SocketConnManager
