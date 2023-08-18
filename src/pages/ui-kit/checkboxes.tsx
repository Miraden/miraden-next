import { Checkbox, Radio, ToggleButton } from '@/components/ui'
import styled from 'styled-components'
import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'

export default function CheckboxesPage() {
  return (
    <BlankLayout>
      <UIKitHead
        title={'Select Controls'}
        className={'Container'}
        backUrl={'/ui-kit'}
      />
      <StyledCheckboxes className={'Container'}>
        <div className={'Controls__section'}>
          <h2>Checkboxes</h2>
          <Checkbox label={'Checkbox'} />
          <Checkbox label={'Checkbox'} error />
          <Checkbox label={'Checkbox'} disabled />
        </div>

        <div className={'Controls__section'}>
          <h2>Radio</h2>
          <Radio value={'Label'} />
          <Radio error />
          <Radio disabled />
        </div>

        <div className={'Controls__section'}>
          <h2>Toggle</h2>
          <ToggleButton state={true} label={'Toggle'} />
          <ToggleButton state={true} disabled />
        </div>

        <div className={'Controls__section Controls__onGray'}>
          <h2>Grey bg</h2>
          <ToggleButton
            state={true}
            label={'Label'}
            disabled
            className={'Controls__onGray'}
          />
          <Checkbox className={'Controls__onGray'} disabled />
          <Radio className={'Controls__onGray'} disabled />
        </div>
      </StyledCheckboxes>
    </BlankLayout>
  )
}

const StyledCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .Controls__section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  .Controls__onGray {
    color: ${({ theme }) => theme.colors.grey.disabled};
    background: #eef1f5;
  }
`
