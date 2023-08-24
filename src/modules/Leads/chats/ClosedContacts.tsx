import { LocationIcon } from '@/icons/LocationIcon'
import { VerifiedIcon } from '@/icons'
import { Button, Sticker } from '@/components/ui'
import { StarIconFilled } from '@/icons/StarIconFilled'
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface ContactsProps {
  user?: User.PublicProfile
}

const ClosedContacts = (
  props: PropsWithChildren<ContactsProps>
): JSX.Element => {
  return (
    <StyledContacts>
      <div className="LeadOwner Font_body_alt">
        <div className="LeadOwner--photo">
          <img src={props.user?.photo} alt="" />
        </div>
        <div className="LeadOwner--name Font_headline_5">
          {props.user?.name} {props.user?.surname}
        </div>
        <div className="LeadOwner--status">{props.user?.sellerStatus}</div>
        <div className="LeadOwner--location">
          <LocationIcon /> Кипр, Лимассол
        </div>
        <div className="LeadOwner--account_status">
          {props.user?.registeredTransl && (
            <span>
              На сайте {props.user?.registeredTransl.years}{' '}
              {props.user?.registeredTransl.months}{' '}
              {props.user?.registeredTransl.days}
            </span>
          )}
          <span className={'LeadOwner--accountDivider'}></span>{' '}
          <span className={'LeadOwner--online'}>В сети</span>
        </div>
        <div className="LeadOwner--info">
          <VerifiedIcon className={'LeadOwner--verified'} />
          {props.user?.isPro && (
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
            <p className="Font_14_140">{props.user?.rating}</p>
          </div>
        </div>
        <div className={'Contacts__action'}>{props.children}</div>
      </div>
    </StyledContacts>
  )
}

const StyledContacts = styled.div``

export default ClosedContacts
