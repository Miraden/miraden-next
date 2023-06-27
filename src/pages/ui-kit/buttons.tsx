import {Button, PayButton} from "@/components/ui";
import {ArrowIcon, StarIcon, VisaIcon} from "@/icons";
import styled from "styled-components";
import {BlankLayout} from "@/modules/Base/BlankLayout";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";
import {theme} from "../../../styles/tokens";
import {ArrowsIcon} from "@/icons/ArrowsIcon";

const mobile = theme.breakpoints.mobile.max + "px"
const tablet = theme.breakpoints.tablet.max + "px"

export default function ButtonsPage() {
  return (
    <BlankLayout>
      <UIKitHead title={"Buttons"} className={"Container"} backUrl={"/ui-kit"}/>
      <StyledButtons className={"Container"}>

        <div className={"Button"}>{renderPrimary()}</div>
        <div className={"Button"}>{renderSecondary()}</div>
        <div className={"Button"}>{renderTertiary()}</div>
        <div className={"Button"}>{renderIconify()}</div>
        <div className={"Button"}>{renderRequest()}</div>
        <div className={"Button"}>{renderSort()}</div>
        <div className={"Button"}>{renderHeader()}</div>
        <div className={"Button"}>{renderPay()}</div>
      </StyledButtons>
    </BlankLayout>
  );
}

function renderPrimary(): JSX.Element {
  return (
    <>
      <h3 className={"Font_24_120 ButtonsHeadline"}>{"Primary"}</h3>
      <div className={"Buttons__wrap"}>
        <div className={"Buttons__group"}>
          <div className="Buttons__GroupTitle Font_Accent_20_B">{"Large"}</div>
          <Button>Button</Button>
          <Button rightIcon={<StarIcon/>}>Button</Button>
          <Button leftIcon={<StarIcon/>}>Button</Button>
          <Button disabled>Button</Button>
          <Button disabled rightIcon={<StarIcon/>}>Button</Button>
          <Button disabled leftIcon={<StarIcon/>}>Button</Button>
        </div>
        <div className={"Buttons__group"}>
          <div className="Buttons__GroupTitle Font_Accent_20_B">{"Medium"}</div>
          <Button compact>Button</Button>
          <Button compact rightIcon={<StarIcon/>}>Button</Button>
          <Button compact leftIcon={<StarIcon/>}>Button</Button>
          <Button compact disabled>Button</Button>
          <Button compact disabled rightIcon={<StarIcon/>}>Button</Button>
          <Button compact disabled leftIcon={<StarIcon/>}>Button</Button>
        </div>
      </div>
    </>
  )
}

function renderSecondary(): JSX.Element {
  return (
    <>
      <h3 className={"Font_24_120 ButtonsHeadline"}>{"Secondary"}</h3>
      <div className={"Buttons__wrap"}>
        <div className={"Buttons__group"}>
          <div className="Buttons__GroupTitle Font_Accent_20_B">{"Large"}</div>
          <Button secondary>Button</Button>
          <Button secondary rightIcon={<StarIcon/>}>Right icon</Button>
          <Button secondary leftIcon={<StarIcon/>}>Left Icon</Button>
          <Button secondary disabled>Button</Button>
          <Button secondary disabled rightIcon={<StarIcon/>}>Right icon</Button>
          <Button secondary disabled leftIcon={<StarIcon/>}>Left Icon</Button>
        </div>

        <div className={"Buttons__group"}>
          <div className="Buttons__GroupTitle Font_Accent_20_B">{"Medium"}</div>
          <Button secondary compact>Default</Button>
          <Button secondary compact rightIcon={<StarIcon/>}>Right icon</Button>
          <Button secondary compact leftIcon={<StarIcon/>}>Left Icon</Button>
          <Button secondary compact disabled>Button</Button>
          <Button secondary compact disabled rightIcon={<StarIcon/>}>Right
            icon</Button>
          <Button secondary compact disabled leftIcon={<StarIcon/>}>Left
            Icon</Button>
        </div>
      </div>
    </>
  )
}

function renderTertiary(): JSX.Element {
  return (
    <>
      <h3 className={"Font_24_120 ButtonsHeadline"}>{"Tertiary"}</h3>
      <div className={"Buttons__wrap"}>
        <div className={"Buttons__group"}>
          <div className="Buttons__GroupTitle Font_Accent_20_B">{"Large"}</div>
          <Button tertiary>Button</Button>
          <Button tertiary rightIcon={<StarIcon/>}>Right icon</Button>
          <Button tertiary leftIcon={<StarIcon/>}>Left Icon</Button>
          <Button tertiary disabled>Button</Button>
          <Button tertiary disabled rightIcon={<StarIcon/>}>Right icon</Button>
          <Button tertiary disabled leftIcon={<StarIcon/>}>Left Icon</Button>
        </div>

        <div className={"Buttons__group"}>
          <div className="Buttons__GroupTitle Font_Accent_20_B">{"Medium"}</div>
          <Button tertiary compact>Default</Button>
          <Button tertiary compact rightIcon={<StarIcon/>}>Right icon</Button>
          <Button tertiary compact leftIcon={<StarIcon/>}>Left Icon</Button>
          <Button tertiary compact disabled>Button</Button>
          <Button tertiary compact disabled rightIcon={<StarIcon/>}>Right
            icon</Button>
          <Button tertiary compact disabled leftIcon={<StarIcon/>}>Left
            Icon</Button>
        </div>
      </div>
    </>
  )
}

function renderPay(): JSX.Element {
  return (
    <>
      <h3 className={"Font_24_120 ButtonsHeadline"}>{"Pay"}</h3>
      <div className="PayButtons">
        <PayButton leftIcon={<VisaIcon/>}>Банковская карта</PayButton>
        <PayButton disabled leftIcon={<VisaIcon/>}>Банковская карта</PayButton>
      </div>
    </>
  )
}

function renderHeader(): JSX.Element {
  return (
    <>
      <h3 className={"Font_24_120 ButtonsHeadline"}>{"Header"}</h3>
      <div className="HeaderButtons Buttons__group">
        <Button header>Header</Button>
        <Button header disabled>Header</Button>
        <Button header active>Active</Button>
        <Button header leftIcon={<StarIcon/>}>Header</Button>
        <Button header disabled leftIcon={<StarIcon/>}>Header</Button>
        <Button header rightIcon={<StarIcon/>}>Header</Button>
        <Button header active rightIcon={<StarIcon/>}>Active</Button>
        <Button header disabled rightIcon={<StarIcon/>}>Header</Button>
        <Button header rightIcon={<StarIcon/>}></Button>
        <Button header disabled rightIcon={<StarIcon/>}></Button>
      </div>
    </>
  )
}

function renderRequest(): JSX.Element {
  return (
    <>
      <h3 className={"Font_24_120 ButtonsHeadline"}>{"Request"}</h3>
      <div className={"Buttons__wrap"}>
        <div className={"Buttons__group"}>
          <Button request>Button</Button>
          <Button request disabled>Disabled</Button>
          <Button request active>Active</Button>
        </div>

        <div className={"Buttons__group"}>
          <Button request compact>Button</Button>
          <Button request disabled compact>Disabled</Button>
          <Button request compact active>Active</Button>
        </div>
      </div>
    </>
  )
}

function renderIconify(): JSX.Element {
  return (
    <>
      <h3 className={"Font_24_120 ButtonsHeadline"}>{"Iconify"}</h3>
      <div className={"Buttons__wrap"}>
        <div className={"Buttons__group"}>
          <div
            className="Buttons__GroupTitle Font_Accent_20_B">{"Primary"}</div>
          <Button leftIcon={<StarIcon/>}></Button>
          <Button disabled leftIcon={<StarIcon/>}></Button>
          <Button compact leftIcon={<StarIcon/>}></Button>
          <Button disabled compact leftIcon={<StarIcon/>}></Button>
        </div>

        <div className={"Buttons__group"}>
          <div
            className="Buttons__GroupTitle Font_Accent_20_B">{"Secondary"}</div>
          <Button secondary leftIcon={<StarIcon/>}></Button>
          <Button secondary disabled leftIcon={<StarIcon/>}></Button>
          <Button secondary compact leftIcon={<StarIcon/>}></Button>
          <Button secondary disabled compact leftIcon={<StarIcon/>}></Button>
        </div>

        <div className={"Buttons__group"}>
          <div
            className="Buttons__GroupTitle Font_Accent_20_B">{"Tertiary"}</div>
          <Button tertiary leftIcon={<StarIcon/>}></Button>
          <Button disabled tertiary leftIcon={<StarIcon/>}></Button>
          <Button compact tertiary leftIcon={<StarIcon/>}></Button>
          <Button disabled compact tertiary leftIcon={<StarIcon/>}></Button>
        </div>
      </div>
    </>
  )
}

function renderSort(): JSX.Element {
  return (
    <>
      <h3 className={"Font_24_120 ButtonsHeadline"}>{"Sort"}</h3>
      <div className={"Buttons__wrap"}>
        <div className={"Buttons__group"}>
          <Button sort rightIcon={<ArrowsIcon bottom/>}>Sort</Button>
        </div>
      </div>
    </>
  )
}

const StyledButtons = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, auto);

  .Buttons__GroupTitle {
    margin-bottom: 20px;
  }

  @media (max-width: ${tablet}) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: ${mobile}) {
    grid-template-columns: repeat(1, auto);
  }

  .ButtonsHeadline {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.main};
    margin-bottom: 20px;
    font-weight: 700;
  }

  .Buttons__wrap {
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media (max-width: ${mobile}) {
      flex-direction: column;
    }
  }

  .Buttons__group {
    button {
      margin-bottom: 23px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .HeaderButtons {
    padding: 30px;
    background-color: #2a344a;
  }

  .PayButtons {
    padding: 30px;
    background-color: #2a344a;

    a {
      margin-top: 20px;
    }
  }
`;
