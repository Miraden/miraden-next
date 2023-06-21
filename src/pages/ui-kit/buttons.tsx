import {Button, PayButton, RequestButton, TabButtons} from "@/components/ui";
import {StarIcon, VisaIcon} from "@/icons";
import styled from "styled-components";
import {BlankLayout} from "@/modules/Base/BlankLayout";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";

export default function ButtonsPage() {
  return (
    <BlankLayout>
      <UIKitHead title={"Buttons"} className={"ContainerFull"} backUrl={"/ui-kit"}/>
      <StyledButtons className={"ContainerFull"}>
        <Button>Button</Button>
        <Button rightIcon={<StarIcon />}>Button</Button>
        <Button leftIcon={<StarIcon />}>Button</Button>
        <Button compact>Button</Button>
        <Button compact rightIcon={<StarIcon />}>
          Button
        </Button>
        <Button compact leftIcon={<StarIcon />}>
          Button
        </Button>
        <Button disabled>Button</Button>{" "}
        <Button disabled rightIcon={<StarIcon />}>
          Button
        </Button>{" "}
        <Button disabled leftIcon={<StarIcon />}>
          Button
        </Button>
        <Button secondary className="UIKit__buttonSecondary">
          Button
        </Button>
        <Button
          secondary
          rightIcon={<StarIcon />}
          className="UIKit__buttonSecondary"
        >
          Button
        </Button>
        <Button
          secondary
          leftIcon={<StarIcon />}
          className="UIKit__buttonSecondary"
        >
          Button
        </Button>
        <Button secondary compact>
          Button
        </Button>
        <Button secondary compact rightIcon={<StarIcon />}>
          Button
        </Button>
        <Button secondary compact leftIcon={<StarIcon />}>
          Button
        </Button>
        <Button tertiary>Button</Button>
        <Button tertiary rightIcon={<StarIcon />}>
          Button
        </Button>
        <Button tertiary leftIcon={<StarIcon />}>
          Button
        </Button>
        <Button tertiary compact>
          Button
        </Button>
        <RequestButton>Button</RequestButton>
        <div className="PayButtons">
          <Button header>Button</Button>
          <Button header leftIcon={<StarIcon />}>
            Button
          </Button>
          <PayButton leftIcon={<VisaIcon />}>Банковская карта</PayButton>
          <PayButton disabled leftIcon={<VisaIcon />}>
            Банковская карта
          </PayButton>
        </div>
        <div>
          <TabButtons
            tabs={[
              { label: "Text", id: "1" },
              { label: "Text", id: "2" },
            ]}
            defaultTabId={"1"}
          />
        </div>
      </StyledButtons>
    </BlankLayout>
  );
}

const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  .PayButtons {
    padding: 30px;
    background-color: #2a344a;
    a {
      margin-top: 20px;
    }
  }
`;
