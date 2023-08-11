import SocketConnManager from '@/infrastructure/Network/Websockets/SocketConnManager'

class ChatConnManager extends SocketConnManager {
  public joinToRoom(id: number, token: string, leadId: number): void {
    const msg = JSON.stringify({ token: token, roomId: id, leadId: leadId })
    this.send(msg)
  }
}

export default ChatConnManager
