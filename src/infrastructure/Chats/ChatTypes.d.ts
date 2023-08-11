declare namespace Chat {
  interface Leads {
    id: number
    title: string
  }

  interface MessageOwner {
    avatar: string
  }

  interface Message {
    owner: MessageOwner
    direction: string
    message: string
    createdAt: string
    isRead: boolean
  }
}
