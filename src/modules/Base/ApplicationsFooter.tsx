import { Button } from "@/components/ui";
import {
  Applications,
  HomeIcon,
  KebabIcon,
  ListItemsIcon,
  PlusIcon,
} from "@/icons";
import cn from "classnames";
import { useRouter } from "next/router";
import styled from "styled-components";

const ApplicationsFooter = () => {
  const router = useRouter();
  const currentUrl = router.pathname;
  return (
    <StyledApplicationsFooter>
      <div className="Application__Footer">
        <div className="Application__FooterButtons">
          <Button tertiary className="FooterButton Font_12_16">
            <ListItemsIcon />
            Лента
          </Button>
          <Button
            tertiary
            className="FooterButton Font_12_16"
            active={currentUrl.includes("application")}
          >
            <Applications
              className={cn("Active", { Active1: { currentUrl } })}
            />
            Мои заявки
          </Button>
          <div className="PlusIconContainer">
            <Button>
              <PlusIcon width={24} height={24} />
            </Button>
          </div>

          <Button tertiary className="FooterButton Font_12_16">
            <HomeIcon width={18} height={18} />
            Объекты
          </Button>
          <Button tertiary className="FooterButton Font_12_16">
            <KebabIcon className="KebabIcon" />
            Ещё
          </Button>
        </div>
      </div>
    </StyledApplicationsFooter>
  );
};

const StyledApplicationsFooter = styled.div`
  .Application__Footer {
    display: none;
    border-top: 2px solid #eef1f5;
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff;
    padding: 10px 10px 0 0;
    border-radius: 10px;
  }

  .Active {
    path {
      fill: #4e6af3 !important;
    }
  }

  .Application__FooterButtons {
    display: flex;
    justify-content: center;

    div,
    button:not(:first-child) {
      margin-left: 64px;
    }
  }

  .PlusIconContainer {
    padding: 2px;
    background: #eef1f5;
    border-radius: 50%;
    transform: translate(0, -34px);

    button {
      background: #4e6af3;
      width: fit-content;
      height: fit-content;
      padding: 10px !important;
      border-radius: 50%;
    }
  }

  .FooterButton {
    padding: 5px 0 0 0;
    max-width: 74px;
    width: 100%;

    :hover {
      svg {
        path {
          fill: #4e6af3;
        }
      }
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        margin-bottom: 2px;
        path {
          fill: #7786a5;
        }
      }
    }
  }

  .KebabIcon {
    transform: rotate(90deg);
  }

  @media (max-width: 1024px) {
    .Application__Footer {
      display: block;
    }
  }
`;

export { ApplicationsFooter };
