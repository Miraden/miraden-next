class SocketConnManager {
  private socket: WebSocket | null
  private url: string
  private onOpen: Function
  private onClose: Function
  private onMessage: Function

  constructor() {
    this.url = ''
    this.socket = null
    this.onOpen = (): void => {}
    this.onMessage = (): void => {}
    this.onClose = (): void => {}
  }

  public create(url: string): void {
    this.socket = new WebSocket(url)
    this.makeEvents()
  }

  public makeEvents(): void {
    this.socket?.addEventListener('open', () => {
      this.onOpen()
    })
    this.socket?.addEventListener('close', () => {
      this.reconnectEvery(2000)
      this.onClose()
    })
    this.socket?.addEventListener('message', this.onMessage())
  }

  public clearEvents(): void {
    this.socket?.removeEventListener('open', this.onOpen())
    this.socket?.removeEventListener('close', this.onClose())
    this.socket?.removeEventListener('message', this.onMessage())
  }

  public reconnectEvery(timeout: number): void {
    setTimeout(() => {
      this.create(this.url)
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

  public OnMessage(callback: Function): void {
    this.onMessage = callback
  }
}

export default SocketConnManager
