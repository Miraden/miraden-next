import SocketConnManager from '@/infrastructure/Network/Websockets/SocketConnManager'
import commander from 'commander'
import { ChatEvents } from '@/modules/Chats/ChatEvents'

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

  public joinToRoom(id: number, token: string, callback?: Function): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'joinRoom',
      token: token,
      requestId: requestId,
      payload: {
        roomId: id,
      },
    }
    this.roomId = id
    this.token = token
    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onRoomJoin],
      requestId
    )
  }

  public sendMessage(msg: string, callback?: Function): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'sendMessage',
      token: this.token,
      requestId: requestId,
      payload: {
        msg: msg,
        roomId: this.roomId,
        leadId: this.leadId,
      },
    }

    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onMessageDelivered],
      requestId
    )
  }

  public queryHistory(
    token: string = '',
    roomId: number = 0,
    callback?: Function
  ): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'getHistory',
      token: token,
      requestId: requestId,
      payload: {
        roomId: roomId,
      },
    }
    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onHistoryPageUpdate],
      requestId
    )
  }

  public getRoomsList(
    leads: number[] = [],
    token: string = '',
    view: string = '',
    callback?: Function
  ): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'getRoomsList',
      token: token,
      requestId: requestId,
      payload: {
        leads: leads,
        view: view,
      },
    }
    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onGetRoomsList],
      requestId
    )
  }

  public getLeadsList(
    token: string = '',
    view: string = '',
    callback?: Function
  ): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'getLeadsList',
      token: token,
      requestId: requestId,
      payload: {
        view: view,
      },
    }
    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onGetLeadsList],
      requestId
    )
  }

  public getCompanionsForRoom(
    token: string,
    roomId: number,
    callback?: Function
  ): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'getCompanions',
      token: token,
      requestId: requestId,
      payload: {
        roomId: roomId,
      },
    }
    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onGetCompanions],
      requestId
    )
  }

  public getCompanionsByLead(
    token: string,
    leadId: number,
    callback?: Function
  ): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'getCompanions',
      token: token,
      requestId: requestId,
      payload: {
        leadId: leadId,
      },
    }
    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onGetCompanions],
      requestId
    )
  }

  public getLead(token: string, leadId: number, callback?: Function): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'getLead',
      token: token,
      requestId: requestId,
      payload: {
        leadId: leadId,
      },
    }
    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onGetLead],
      requestId
    )
  }

  public getPublicProfile(
    token: string,
    userId: number,
    callback?: Function
  ): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'getPublicProfile',
      token: token,
      requestId: requestId,
      payload: {
        userId: userId,
      },
    }
    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onGetUserPublicProfile],
      requestId
    )
  }

  public getFullProfile(token: string, userId: number, callback?: Function): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'getFullProfile',
      token: token,
      requestId: requestId,
      payload: {
        userId: userId,
      },
    }

    this.send(JSON.stringify(request))

    this.subscribe(
      (event: MessageEvent) => {
        const response = JSON.parse(event.data) as ApiResponseType
        if (response.metadata?.requestId !== requestId) return
        if (callback) callback(event)
      },
      [ChatEvents.onGetUserFullProfile],
      requestId
    )
  }

  public openContact(token: string, companionId: number, roomId: number, callback?: Function): void {
    const requestId = crypto.randomUUID()
    const request: Chat.SocketRequestType = {
      command: 'openFullContacts',
      token: token,
      requestId: requestId,
      payload: {
        roomId: roomId,
        companionId: companionId,
      },
    }
    this.send(JSON.stringify(request))

    this.subscribe((event: MessageEvent) => {
      const response = JSON.parse(event.data) as ApiResponseType
      if (response.metadata?.requestId !== requestId) return
      if (callback) callback(event)
    }, [ChatEvents.onContactOpened], requestId)
  }
}

export default ChatConnManager
