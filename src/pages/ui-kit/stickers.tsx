import { Sticker } from '@/components/ui'
import styled from 'styled-components'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'

export default function StickersPage() {
  return (
    <BlankLayout>
      <UIKitHead
        title={'Стикеры'}
        className={'Container'}
        backUrl={'/ui-kit'}
      />
      <StyledIcons className={'Container'}>
        <Sticker theme="red">Stiker</Sticker>
        <Sticker theme="green">Stiker</Sticker>
        <Sticker theme="blue">Stiker</Sticker>
        <Sticker theme="grey">Stiker</Sticker>
        <Sticker theme="blue" withNumber>
          Stiker 1
        </Sticker>
        <Sticker theme="black">Stiker</Sticker>
        <Sticker theme="red" tag>
          Tag
        </Sticker>
        <Sticker theme="blue" tag>
          Tag
        </Sticker>
      </StyledIcons>
    </BlankLayout>
  )
}

const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 70px);
  grid-gap: 20px;
`
