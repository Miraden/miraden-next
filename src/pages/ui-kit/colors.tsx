import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'
import styled from 'styled-components'
import { theme } from '../../../styles/tokens'

interface MainProps {
  color: string
  name?: string
  border: string
}

const ColorsPage = () => {
  return (
    <BlankLayout className={'bodyChecker'}>
      <UIKitHead title={'Colors'} className={'Container'} backUrl={'/ui-kit'} />
      <StyledColors className={'Container'}>
        <div className={'ColorsSection'}>
          <h3 className={'Font_24_120'}>{'Main'}</h3>
          <div className={'ColorsSection__wrap'}>
            <div className={'ColorsSection__group'}>
              <div className="ColorsSection__GroupTitle">{'Main'}</div>
              <div className={'ColorsSection__GroupItems'}>
                {renderItem({
                  color: theme.colors.main,
                  name: 'Main/Blue',
                  border: 'none',
                })}
              </div>
            </div>
            <div className={'ColorsSection__group'}>{renderMainBGGroup()}</div>
            <div className={'ColorsSection__group'}>
              {renderMainStrokeGroup()}
            </div>
          </div>
        </div>

        <div className={'ColorsSection'}>
          <h3 className={'Font_24_120'}>{'Text'}</h3>
          <div className={'ColorsSection__wrap'}>
            <div className={'ColorsSection__group'}>{renderTextGroup()}</div>
          </div>
        </div>

        <div className={'ColorsSection'}>
          <h3 className={'Font_24_120'}>{'Fields'}</h3>
          <div className={'ColorsSection__wrap'}>
            <div className={'ColorsSection__group'}>{renderFieldsGroup()}</div>
          </div>
        </div>

        <div className={'ColorsSection'}>
          <h3 className={'Font_24_120'}>{'Buttons'}</h3>
          <div className={'ColorsSection__wrap'}>
            <div className={'ColorsSection__group'}>{renderButtons()}</div>
          </div>
        </div>
      </StyledColors>
    </BlankLayout>
  )
}

function renderButtons(): JSX.Element {
  return (
    <>
      {renderButtonPrimary()}
      {renderButtonSecondary()}
      {renderButtonRequest()}
      {renderButtonHeader()}
      {renderButtonPay()}

      <div className="ColorsSection__GroupTitle">{'Effects'}</div>
      <div className="ColorsSection__GroupItems">
        {renderItem({
          color: theme.colors.effects.overlayGrey,
          name: 'Effects/Overlay',
          border: 'none',
        })}
      </div>
    </>
  )
}

function renderButtonPrimary(): JSX.Element {
  const primary = theme.colors.button.primary
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'Primary'}</div>
      <div className={'ColorsSection__GroupItems'}>
        {renderItem({
          color: primary.bg.default,
          name: 'Primary/Bg Default',
          border: 'none',
        })}
        {renderItem({
          color: primary.text.default,
          name: 'Primary/Text Default',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: primary.bg.hover,
          name: 'Primary/BG Hover',
          border: 'none',
        })}
        {renderItem({
          color: primary.text.hover,
          name: 'Primary/Text Hover',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: primary.bg.focused,
          name: 'Primary/BG Focused',
          border: 'none',
        })}
        {renderItem({
          color: primary.stroke.focused,
          name: 'Primary/Stroke Focused',
          border: 'none',
        })}
        {renderItem({
          color: primary.text.focused,
          name: 'Primary/Text Focused',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: primary.bg.click,
          name: 'Primary/Bg Click',
          border: 'none',
        })}
        {renderItem({
          color: primary.text.click,
          name: 'Primary/Text Click',
          border: '#EBEBEB',
        })}
      </div>
    </>
  )
}

function renderButtonSecondary(): JSX.Element {
  const secondary = theme.colors.button.secondary
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'Secondary'}</div>
      <div className="ColorsSection__GroupItems">
        {renderItem({
          color: secondary.bg.default,
          name: 'Sec/Bg Default',
          border: 'none',
        })}
        {renderItem({
          color: secondary.text.default,
          name: 'Sec/Text Default',
          border: 'none',
        })}
        {renderItem({
          color: secondary.bg.hover,
          name: 'Sec/Bg Hover',
          border: 'none',
        })}
        {renderItem({
          color: secondary.text.hover,
          name: 'Sec/Text Hover',
          border: 'none',
        })}
        {renderItem({
          color: secondary.bg.focused,
          name: 'Sec/Bg Focused',
          border: 'none',
        })}
        {renderItem({
          color: secondary.stroke.focused,
          name: 'Sec/Stroke Focused',
          border: 'none',
        })}
        {renderItem({
          color: secondary.text.focused,
          name: 'Sec/Text Focused',
          border: 'none',
        })}
        {renderItem({
          color: secondary.bg.click,
          name: 'Sec/Bg Click',
          border: 'none',
        })}
        {renderItem({
          color: secondary.text.click,
          name: 'Sec/Text Click',
          border: 'none',
        })}
      </div>
    </>
  )
}

function renderButtonRequest(): JSX.Element {
  const request = theme.colors.button.request
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'Request'}</div>
      <div className="ColorsSection__GroupItems">
        {renderItem({
          color: request.bg.default,
          name: 'Req/Default',
          border: 'none',
        })}
        {renderItem({
          color: request.text.default,
          name: 'Req/Text Default',
          border: 'none',
        })}
        {renderItem({
          color: request.bg.hover,
          name: 'Req/Bg Hover',
          border: 'none',
        })}
        {renderItem({
          color: request.text.hover,
          name: 'Req/Text Hover',
          border: 'none',
        })}
        {renderItem({
          color: request.bg.focused,
          name: 'Req/Bg Focused',
          border: 'none',
        })}
        {renderItem({
          color: request.strokeFocused,
          name: 'Req/Stroke Focused',
          border: 'none',
        })}
        {renderItem({
          color: request.text.focused,
          name: 'Req/Text Focused',
          border: 'none',
        })}
        {renderItem({
          color: request.bg.click,
          name: 'Req/BG Click',
          border: 'none',
        })}
        {renderItem({
          color: request.text.click,
          name: 'Req/Text Click',
          border: 'none',
        })}
        {renderItem({
          color: request.bg.active,
          name: 'Req/Bg Active',
          border: 'none',
        })}
        {renderItem({
          color: request.text.active,
          name: 'Req/Text Active',
          border: '#EBEBEB',
        })}
      </div>
    </>
  )
}

function renderButtonHeader(): JSX.Element {
  const header = theme.colors.button.header
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'Header'}</div>
      <div className="ColorsSection__GroupItems">
        {renderItem({
          color: header.bg.default,
          name: 'Header/Bg Default',
          border: 'none',
        })}
        {renderItem({
          color: header.text.default,
          name: 'Header/Text Default',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: header.bg.hover,
          name: 'Header/Bg Hover',
          border: 'none',
        })}
        {renderItem({
          color: header.text.hover,
          name: 'Header/Text Hover',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: header.bg.focused,
          name: 'Header/Bg Focused',
          border: 'none',
        })}
        {renderItem({
          color: header.text.focused,
          name: 'Header/Text Focused',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: header.strokeFocused,
          name: 'Header/Stroke Focused',
          border: 'none',
        })}
        {renderItem({
          color: header.bg.click,
          name: 'Header/Bg Click',
          border: 'none',
        })}
        {renderItem({
          color: header.text.click,
          name: 'Header/Text Click',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: header.bg.active,
          name: 'Header/Bg Active',
          border: 'none',
        })}
        {renderItem({
          color: header.text.active,
          name: 'Header/Text Active',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: header.bg.disabled,
          name: 'Header/Bg Disabled',
          border: 'none',
        })}
        {renderItem({
          color: header.text.disabled,
          name: 'Header/Text Disabled',
          border: 'none',
        })}
      </div>
    </>
  )
}

function renderButtonPay(): JSX.Element {
  const pay = theme.colors.button.pay
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'Pay'}</div>
      <div className="ColorsSection__GroupItems">
        {renderItem({
          color: pay.bg.default,
          name: 'Pay/Bg Default',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: pay.text.default,
          name: 'Pay/Text Default',
          border: 'none',
        })}
        {renderItem({
          color: pay.stroke.default,
          name: 'Pay/Stroke Default',
          border: 'none',
        })}
        {renderItem({
          color: pay.bg.hover,
          name: 'Pay/Bg Hover',
          border: 'none',
        })}
        {renderItem({
          color: pay.text.hover,
          name: 'Pay/Text Hover',
          border: 'none',
        })}
        {renderItem({
          color: pay.bg.focused,
          name: 'Pay/Bg Focused',
          border: 'none',
        })}
        {renderItem({
          color: pay.text.focused,
          name: 'Pay/Text Focused',
          border: 'none',
        })}
        {renderItem({
          color: pay.stroke.focused,
          name: 'Pay/Stroke Focused',
          border: 'none',
        })}
        {renderItem({
          color: pay.bg.click,
          name: 'Pay/Bg Click',
          border: 'none',
        })}
        {renderItem({
          color: pay.text.click,
          name: 'Pay/Text Click',
          border: 'none',
        })}
        {renderItem({
          color: pay.bg.active,
          name: 'Pay/Bg Active',
          border: 'none',
        })}
        {renderItem({
          color: pay.text.active,
          name: 'Pay/Text Active',
          border: 'none',
        })}
      </div>
    </>
  )
}

function renderTextGroup(): JSX.Element {
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'Text'}</div>
      <div className={'ColorsSection__GroupItems'}>
        {renderItem({
          color: theme.colors.text.black,
          name: 'Text/Black',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.text.white,
          name: 'Text/White',
          border: theme.colors.stroke.grey,
        })}
        {renderItem({
          color: theme.colors.text.grey,
          name: 'Text/Grey',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.text.disabled,
          name: 'Text/Disabled',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.text.warning,
          name: 'Text/Warning',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.text.error,
          name: 'Text/Error',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.text.success,
          name: 'Text/Success',
          border: 'none',
        })}
      </div>
    </>
  )
}

function renderMainStrokeGroup(): JSX.Element {
  const stroke = theme.colors.stroke
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'Stroke'}</div>
      <div className={'ColorsSection__GroupItems'}>
        {renderItem({
          color: stroke.focused,
          name: 'Stroke/Focused',
          border: 'none',
        })}
        {renderItem({
          color: stroke.grey,
          name: 'Stroke/Grey',
          border: 'none',
        })}
        {renderItem({
          color: stroke.lightGrey,
          name: 'Stroke/LightGrey',
          border: 'none',
        })}
        {renderItem({
          color: stroke.dividerForm,
          name: 'Stroke/DividerForm',
          border: 'none',
        })}
      </div>
    </>
  )
}

function renderMainBGGroup(): JSX.Element {
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'BG'}</div>
      <div className={'ColorsSection__GroupItems'}>
        {renderItem({
          color: theme.colors.white,
          name: 'BG/White',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: theme.colors.background.lightBlue,
          name: 'BG/LightBlue',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.background.disabled,
          name: 'BG/Disabled',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.background.lightGrey,
          name: 'BG/LightGrey',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.background.black,
          name: 'BG/Black',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.background.grey,
          name: 'BG/Grey',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.background.green,
          name: 'BG/Green',
          border: 'none',
        })}
        {renderItem({
          color: theme.colors.background.lianer,
          name: 'BG/Lianer',
          border: '#EBEBEB',
        })}
      </div>
    </>
  )
}

function renderFieldsGroup(): JSX.Element {
  const fields = theme.colors.fields
  return (
    <>
      <div className="ColorsSection__GroupTitle">{'Fields'}</div>
      <div className={'ColorsSection__GroupItems'}>
        {renderItem({
          color: fields.form,
          name: 'Fields/Form',
          border: '#EBEBEB',
        })}
        {renderItem({
          color: fields.title,
          name: 'Fields/Title',
          border: 'none',
        })}
        {renderItem({
          color: fields.text,
          name: 'Fields/Text',
          border: 'none',
        })}
        {renderItem({
          color: fields.description,
          name: 'Fields/Description',
          border: 'none',
        })}
        {renderItem({
          color: fields.stroke,
          name: 'Fields/Stroke',
          border: 'none',
        })}
        {renderItem({
          color: fields.strokeHover,
          name: 'Fields/Stroke Hover',
          border: 'none',
        })}
        {renderItem({
          color: fields.strokeFocused,
          name: 'Fields/Stroke Focused',
          border: 'none',
        })}
        {renderItem({
          color: fields.strokeValidation,
          name: 'Fields/StrokeValidation',
          border: 'none',
        })}
        {renderItem({
          color: fields.bgValidation,
          name: 'Fields/StrokeBgValidation',
          border: 'none',
        })}
        {renderItem({
          color: fields.strokeError,
          name: 'Fields/StrokeError',
          border: 'none',
        })}
        {renderItem({
          color: fields.strokeErrorBg,
          name: 'Fields/BGError',
          border: 'none',
        })}
      </div>
    </>
  )
}

function renderItem(props: MainProps): JSX.Element {
  return (
    <StyledItem color={props.color} border={props.border}>
      <div className={'ColorsSection__Item'}>
        <div className="ColorsSection__ItemSample"></div>
        <div className="ColorsSection__ItemHex">{props.color}</div>
        <div className="ColorsSection__ItemName">{props.name}</div>
      </div>
    </StyledItem>
  )
}

const StyledItem = styled.div<MainProps>`
  width: 100px;

  .ColorsSection__Item {
    &Sample {
      width: 80px;
      height: 80px;
      background: ${props => props.color};
      border-radius: ${({ theme }) => theme.border.radius};
      margin-bottom: 10px;
      box-shadow: 0 0 10px #dcdcdc;
    }

    &Hex {
      color: ${({ theme }) => theme.colors.text.grey};
      font-size: 11px;
    }

    &Name {
      font-size: 12px;
    }
  }
`

const StyledColors = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;

  h3 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 20px;
    font-weight: 700;
  }

  .ColorsSection {
    &__wrap {
      display: flex;
      flex-direction: row;
      gap: 20px;
      flex-wrap: wrap;
    }

    &__GroupTitle {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.text.grey};
      font-weight: 700;
    }

    &__group {
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__GroupItems {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }
`

export default ColorsPage
