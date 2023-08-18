import { BlankLayout } from '@/modules/Base/BlankLayout'
import UIKitHead from '@/modules/UIKitTest/UIKitHead'
import styled from 'styled-components'
import { theme } from '../../../styles/tokens'

const mobile = theme.breakpoints.mobile.max + 'px'
const tablet = theme.breakpoints.tablet.max + 'px'

export default function Typography(): JSX.Element {
  return (
    <BlankLayout>
      <UIKitHead
        title={'Typography'}
        className={'Container'}
        backUrl={'/ui-kit'}
      />
      <StyledPage className={'Container'}>
        <div className={'TypographySection'}>{renderHeadlines()}</div>
        <div className={'TypographySection'}>{renderBody()}</div>
        <div className={'TypographySection'}>{renderAccent()}</div>
        <div className={'TypographySection'}>{renderFields()}</div>
        <div className={'TypographySection'}>{renderButtonsLinks()}</div>
        <div className={'TypographySection'}>{renderTable()}</div>
        <div className={'TypographySection'}>{renderCaptions()}</div>
      </StyledPage>
    </BlankLayout>
  )
}

function renderHeadlines(): JSX.Element {
  return (
    <>
      <h3 className={'Font_24_120 TypographyHeadline'}>{'Headlines'}</h3>
      <div className={'Typography__wrap'}>
        <div className={'TypographySection__Group'}>
          <div className={'TypographySection__GroupItems'}>
            <div className={'TypographySection__Item'}>
              <h1 className={'Font_headline_1'}>Headline 1</h1>
            </div>
            <div className={'TypographySection__Item'}>
              <h2 className={'Font_headline_2'}>Headline 2</h2>
            </div>
            <div className={'TypographySection__Item'}>
              <h3 className={'Font_headline_3'}>Headline 3</h3>
            </div>
            <div className={'TypographySection__Item'}>
              <h4 className={'Font_headline_4'}>Headline 4</h4>
            </div>
            <div className={'TypographySection__Item'}>
              <h5 className={'Font_headline_5'}>Headline 5</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function renderBody(): JSX.Element {
  return (
    <>
      <h3 className={'Font_24_120 TypographyHeadline'}>{'Body'}</h3>
      <div className={'Typography__wrap'}>
        <div className={'TypographySection__GroupItems'}>
          <div className={'TypographySection__Item'}>
            <p className={'Font_body_base'}>
              Мы используем 2 основных начертания шрифта: Medium — заголовки,
              Regular — для набора основного текста в интерфейсах
            </p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_body_alt'}>Body 2</p>
          </div>
        </div>
      </div>
    </>
  )
}

function renderFields(): JSX.Element {
  return (
    <>
      <h3 className={'Font_24_120 TypographyHeadline'}>{'Fields'}</h3>
      <div className={'Typography__wrap TypographyFields'}>
        <div className={'TypographySection__GroupItems'}>
          <div className={'TypographySection__Item'}>
            <p className={'Font_fields_placeholder'}>Placeholder</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_fields_title'}>Title</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_fields_description'}>Description</p>
          </div>
        </div>
      </div>
    </>
  )
}

function renderButtonsLinks(): JSX.Element {
  return (
    <>
      <h3 className={'Font_24_120 TypographyHeadline'}>{'Button/Link'}</h3>
      <div className={'Typography__wrap TypographyButtons'}>
        <div className={'TypographySection__GroupItems'}>
          <div className={'TypographySection__Item'}>
            <p className={'Font_button_normal'}>Normal</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_button_medium'}>Medium</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_button_small'}>Small</p>
          </div>
        </div>
      </div>
    </>
  )
}

function renderAccent(): JSX.Element {
  return (
    <>
      <h3 className={'Font_24_120 TypographyHeadline'}>{'Accent'}</h3>
      <div className={'Typography__wrap TypographyAccent'}>
        <div className={'TypographySection__GroupItems'}>
          <div className={'TypographySection__Item'}>
            <p className={'Font_Accent_20_B'}>Accent 20(B)</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_Accent_16_S'}>Accent 16(S)</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_Accent_14_m'}>Accent 14(M)</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_Accent_12_caps'}>Accent 12 caps</p>
          </div>
        </div>
      </div>
    </>
  )
}

function renderTable(): JSX.Element {
  return (
    <>
      <h3 className={'Font_24_120 TypographyHeadline'}>{'Table'}</h3>
      <div className={'Typography__wrap TypographyTable'}>
        <div className={'TypographySection__GroupItems'}>
          <div className={'TypographySection__Item'}>
            <p className={'Table_headline'}>Headline</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Table_body_base'}>Body base</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Table_body_alt'}>Body alt</p>
          </div>
        </div>
      </div>
    </>
  )
}

function renderCaptions(): JSX.Element {
  return (
    <>
      <h3 className={'Font_24_120 TypographyHeadline'}>{'Captions'}</h3>
      <div className={'Typography__wrap TypographyCaptions'}>
        <div className={'TypographySection__GroupItems'}>
          <div className={'TypographySection__Item'}>
            <p className={'Font_captions_1'}>Caption 1</p>
          </div>
          <div className={'TypographySection__Item'}>
            <p className={'Font_captions_2'}>Caption 2</p>
          </div>
        </div>
      </div>
    </>
  )
}

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  .TypographyHeadline {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 20px;
    font-weight: 700;
  }

  .TypographySection__GroupItems {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .TypographyFields {
    .TypographySection__GroupItems {
      flex-direction: row;
      align-items: baseline;
    }
  }

  .TypographyButtons {
    .TypographySection__GroupItems {
      flex-direction: row;
      align-items: baseline;
    }
  }

  .TypographyCaptions {
    .TypographySection__GroupItems {
      flex-direction: row;
      align-items: baseline;
    }
  }

  .TypographyTable {
    .TypographySection__GroupItems {
      flex-direction: row;
      align-items: baseline;
    }
  }

  .TypographyAccent {
    .TypographySection__GroupItems {
      flex-direction: column;
      align-items: baseline;
    }
  }

  @media (max-width: ${tablet}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  @media (max-width: ${mobile}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`
