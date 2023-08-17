declare namespace Chat {
  interface Leads {
    id: number
    title: string
  }

  interface RoomsList {
    roomId: number
    leadId: number
    name: string
    surname: string
    photo: string
    rating: number
    isPassportVerified: boolean
    isRolePro: boolean
    last_message: {
      message: string|null
      created_at: string|null
    }
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
    roomId: number
  }

  declare interface SocketRequestType {
    token: string
    payload?: Object
    command: string
  }

  interface UserProfile {
    id: number
    name: string
    surname: string
    isPassportVerified: boolean
    rating: number
    photo: string
    isRolePro: boolean
    sellerStatus?: string
  }

  interface MessageSocketResponse {
    message_text: string
    message_id: number
    message_created_date: string
    message_is_guest_reading: boolean
    message_objects_ids: number[]
    owner_id: number
    owner_photo: string
    roomId: number
  }

  interface Companions {
    roomid: number
    lead: Leads
    companions: {
      seller: UserProfile
      buyer: UserProfile
      last_message: {
        message: string|null
        created_at: string|null
      }
    }
    seller_state: string
    myCompanion: UserProfile
  }
}
