declare namespace Chat {
  interface Leads {
    id: number
    title: string
  }

  interface Preview {
    roomId: number
    id: number
    name: string
    surname: string
    photo: string
    rating: number
    isRolePro: boolean
    isPassportVerified: boolean
    status: string
    unreadMessages: number
    createdAt: string
    message: string
    leadId: number
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

  declare interface SocketRequestType {
    token: string
    payload?: Object
    command: string
  }

  interface MyProfile {
    id: number
    name: string
    surname: string
    isPassportVerified: boolean
    rating: number
    sellerStatus: string
    photo: string
    user_is_role_pro: boolean
  }

  interface MessageSocketResponse {
    message_text: string
    message_id: number
    message_created_date: string
    message_is_guest_reading: boolean
    message_objects_ids: number[]
    owner_id: number
    owner_photo: string
  }
}
