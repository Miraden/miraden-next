import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'
import styled from 'styled-components'
import TableKeyValue from '@/components/ui/Tables/TableKeyValue'
import TableKeyValueItem from '@/components/ui/Tables/TableKeyValueItem'
import { PointIconFooter } from '@/icons'
import { CashIcon } from '@/icons/CashIcon'

const TablesPage = (): JSX.Element => {
  return (
    <BlankLayout>
      <UIKitHead title={'Tables'} className={'Container'} backUrl={'/ui-kit'} />
      <StyledPage className="Fields Container">
        <TableKeyValue>
          <TableKeyValueItem
            Value={'Кипр/Ларнака'}
            Key={
              <>
                <PointIconFooter width={18} height={18} />
                Локация
              </>
            }
          />
          <TableKeyValueItem
            Key={
              <>
                <CashIcon width={18} height={18} />
                Формат сделки
              </>
            }
            Value={'Покупка'}
          />
          <TableKeyValueItem
            Key={
              <>
                <CashIcon width={18} height={18} />
                Тип
              </>
            }
            Value={'Квартира / апартаменты'}
          />
          <TableKeyValueItem
            Key={
              <>
                <CashIcon width={18} height={18} />
                Формат сделки
              </>
            }
            Value={'Покупка'}
          />
        </TableKeyValue>
      </StyledPage>
    </BlankLayout>
  )
}

const StyledPage = styled.div``

export default TablesPage
