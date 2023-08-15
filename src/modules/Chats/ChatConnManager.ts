import SocketConnManager from '@/infrastructure/Network/Websockets/SocketConnManager'
import commander from "commander";

class ChatConnManager extends SocketConnManager {
  private leadId: number
  private token: string
  private roomId: number

  constructor() {
    super()
    this.leadId = 0
    this.token = ''
    this.roomId = 0
  }

  public joinToRoom(id: number, token: string, leadId: number): void {
    const request: Chat.SocketRequestType = {
      command: "joinRoom",
      token: token,
      payload: {
        roomId: id,
        leadId: leadId
      }
    }
    this.leadId = leadId
    this.roomId = id
    this.token = token
    this.send(JSON.stringify(request))
  }

  public sendMessage(msg: string): void {
    const request: Chat.SocketRequestType = {
      command: "sendMessage",
      token: this.token,
      payload: {
        msg: msg,
        roomId: this.roomId,
        leadId: this.leadId
      }
    }

    this.send(JSON.stringify(request))
  }

  public queryHistory(): void {
    const request: Chat.SocketRequestType = {
      command: "getHistory",
      token: this.token,
      payload: {
        roomId: this.roomId
      }
    }
    this.send(JSON.stringify(request))
  }

  public queryRoomsList(leadId: number = 0, token: string = ''): void {
    const request: Chat.SocketRequestType = {
      command: "getRoomsList",
      token: token,
      payload: {
        leadId: leadId
      }
    }
    this.send(JSON.stringify(request))
  }

  public queryMyProfile(token: string = ''): void {
    const request: Chat.SocketRequestType = {
      command: "getMyProfile",
      token: token,
    }
    this.send(JSON.stringify(request))
  }
}

export default ChatConnManager
