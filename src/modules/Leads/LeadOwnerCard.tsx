import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/tokens'
import {Button, Notification, Sticker} from '@/components/ui'
import { LocationIcon } from '@/icons/LocationIcon'
import { VerifiedIcon } from '@/icons'
import { StarIconFilled } from '@/icons/StarIconFilled'
import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'
import {
  ApiResponse,
  ApiResponseStructure,
} from '@/infrastructure/Network/Http/ApiResponse'
import FavoritesProvider from "@/modules/Favorites/FavoritesProvider";

interface LeadOwnerProps {
  leadId: number
  className?: string
  isUserReady: boolean
  isUserAuth: boolean
}

interface OwnerStruct {
  id: number
  photo?: string
  name?: string
  surname?: string
  sellerStatus?: string
  location?: string
  isPro?: boolean
  rating?: string
  isPassportVerified?: boolean
  inFavorite: boolean
  leadOwnerId: number
  registeredTransl?: {
    months?: string,
    days?: string
    years?: string
  }
}

const OwnerStructDefault = {
  id: 0,
  inFavorite: false,
  photo: '',
  rating: '0',
  isPro: false,
  sellerStatus: '',
  surname: '',
  name: '',
  location: '',
  isPassportVerified: false,
  registeredTransl: {},
  leadOwnerId: 0,
}

class OwnerProvider {
  private isFetchCompleted: boolean
  private data?: typeof ApiResponseStructure | null
  private payload: any

  constructor() {
    this.isFetchCompleted = false
    this.data = null
    this.payload = {}
  }

  public getPayload(): any {
    return this.payload
  }

  public getOwner(): OwnerStruct {
    return this.payload as OwnerStruct
  }

  public fetchByLeadId(id: number): Promise<any> {
    const url = '/lead/' + id + '/owner'
    const apiRequest: ApiRequest = new ApiRequest()
    let headers: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    if(localStorage.getItem('token')) {
      headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    }

    const apiResponse: ApiResponse = new ApiResponse()

    const response = apiRequest
      .fetch({
        method: ApiRequestMethods.GET,
        headers: headers,
        endpoint: url,
      })
      .then(async res => {
        return res
      })

    return response.then(async res => {
      const p: ApiResponseType = apiResponse.makeFromObject(res)
      this.data = p
      if (typeof p.payload == 'object') {
        this.payload = p.payload
      }
      this.isFetchCompleted = true
      return p
    })
  }
}

const dataProvider: OwnerProvider = new OwnerProvider()
const favoritesProvider: FavoritesProvider = new FavoritesProvider()

const LeadOwnerCard = (props: LeadOwnerProps): JSX.Element => {
  const [owner, setOwner] = useState<OwnerStruct>(OwnerStructDefault)
  useEffect(() => {
    dataProvider.fetchByLeadId(props.leadId).then(res => {
      setOwner(dataProvider.getOwner())
    })
  }, [props.leadId])

  const onClickFavorites = useCallback((e: any) => {
    favoritesProvider.add(owner.leadOwnerId).then(res => {
      owner.inFavorite = true
      setNotifyFavoriteVisible(true)
      setTimeout(() => {
        setNotifyFavoriteVisible(false)
      }, 3000)
    })
  }, [owner])

  const [notifyFavoriteVisible, setNotifyFavoriteVisible] = useState<boolean>(false)

  return (
    <StyledCard className={'SingleApplicationSideBar'}>
      <div className={'SideBar'}>
        <div className="SideBar__head Font_Accent_12_caps">Заявка от</div>
        <div className="LeadOwner Font_body_alt">
          <div className="LeadOwner--photo">
            <img src={owner?.photo} alt="" />
          </div>
          <div className="LeadOwner--name Font_headline_5">
            {owner?.name} {owner?.surname}
          </div>
          <div className="LeadOwner--status">{owner?.sellerStatus}</div>
          <div className="LeadOwner--location">
            <LocationIcon /> Кипр, Лимассол
          </div>
          <div className="LeadOwner--account_status">
            {owner?.registeredTransl && <span>На сайте {owner.registeredTransl.years} {owner.registeredTransl.months} {owner.registeredTransl.days}</span>}
            <span className={'LeadOwner--accountDivider'}></span>{' '}
            <span className={'LeadOwner--online'}>В сети</span>
          </div>
          <div className="LeadOwner--info">
            <VerifiedIcon className={'LeadOwner--verified'} />
            {owner?.isPro && (
              <Sticker theme="black" className="LeadOwner--sticker">
                pro
              </Sticker>
            )}
            <div className="LeadOwner--rating">
              <StarIconFilled
                width={14}
                height={14}
                className="LeadOwner--ratingIcon"
              />
              <p className="Font_14_140">{owner?.rating}</p>
            </div>
          </div>
        </div>
        <div className="LeadSidebar--response">
          <Button>Предложить</Button>
        </div>
        <div className="LeadSidebar--description Font_body_alt">
          <p>
            Сделайте предложение — это бесплатно. Если пользователь решит
            обменяться контактами, тогда с вас будет списано:
          </p>
        </div>
        <div className="LeadSidebar--price Font_Accent_16_S">10 €</div>
      </div>

      <div className="SideBar__section">
        <Button tertiary>Задать вопрос в чате</Button>
        {props.isUserAuth && !owner?.inFavorite && <Button onClick={onClickFavorites} tertiary>В избранное</Button>}
      </div>

      {notifyFavoriteVisible && (
        <div className={'Notifications'}>
          <Notification
            success
            title={'Избранное'}
            message={
              notifyFavoriteVisible
                ? 'Пользователь в списке избранных'
                : 'Пользователь удален из списка избранных'
            }
          />
        </div>
      )}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  .SideBar {
    height: fit-content;
    padding: 30px;
    background: #fff;
    border-radius: ${theme.border.radius};
    text-align: center;
  }

  .SideBar__section {
    margin-top: 10px;
    background: #fff;
    border-radius: ${theme.border.radius};
    text-align: center;

    button {
      padding: 22px 0;
      width: 100%;
      border-radius: 0;
      border-bottom: 1px solid ${theme.colors.stroke.divider};

      &:first-of-type {
        border-top-left-radius: ${theme.border.radius};
        border-top-right-radius: ${theme.border.radius};
      }

      &:last-of-type {
        border-bottom-left-radius: ${theme.border.radius};
        border-bottom-right-radius: ${theme.border.radius};
        border-bottom: none;
      }
    }
  }

  .SideBar__head {
    padding-bottom: 15px;
    color: ${theme.colors.text.grey};
    border-bottom: 1px solid ${theme.colors.stroke.divider};
  }

  .LeadOwner {
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    &--account_status {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: ${theme.colors.text.grey};
    }

    &--accountDivider {
      width: 3px;
      height: 3px;
      border-radius: 100%;
      display: inline-block;
      background: ${theme.colors.text.grey};
    }

    &--photo {
      img {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 100%;
      }
    }

    &--name {
      margin-top: 10px;
    }

    &--location {
      color: ${theme.colors.text.grey};
      display: flex;
      align-items: center;
      justify-content: center;

      svg path {
        fill: ${theme.colors.text.grey};
      }
    }

    &--account_status {
    }

    &--info {
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 6px;
    }

    &--verified {
    }

    &--rating {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;

        path {
          fill: ${theme.colors.text.grey};
        }
      }
    }
  }

  .LeadSidebar {
    &--response {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--description {
      color: ${theme.colors.text.grey};
    }

    &--price {
      color: ${theme.colors.main};
      margin-top: 5px;
    }
  }
`

export default LeadOwnerCard
