import cn from "classnames";
import styled from "styled-components";
import { ObjectItem } from "./components/ObjectItem";
import { ObjectSidebar } from "./components/ObjectSidebar";
import { ObjectDescription } from "./components/ObjectDescription";
import { ObjectLocation } from "./components/ObjectLocation";
import { ApartmentInfo } from "./components/ApartmentInfo";
import { Documents } from "./components/Documents";
import { BuildingInfo } from "./components/BuildingInfo";
import { TerritoryInfo } from "./components/TerritoryInfo";
import { VideoSection } from "./components/VideoSection";
interface ApplicationProps {
  className?: string;
}

const Objects = ({ className }: ApplicationProps) => {
  return (
    <>
      <StyledApplication>
        <div
          className={cn("Application__wrapper", {
            IsOpenSidebar: true,
          })}
        >
          <ObjectItem />
          <ObjectDescription />
          <ObjectLocation />
          <VideoSection videoLink="https://www.youtube.com/embed/hPr-Yc92qaY" />
          <ApartmentInfo />
          <BuildingInfo />
          <TerritoryInfo />
          <Documents />
        </div>
        <ObjectSidebar className="SingleApplicationSideBar" />
      </StyledApplication>
    </>
  );
};

const StyledApplication = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-gap: 30px;
  padding-left: 55px;
  padding-right: 55px;
  &.Test {
    padding-right: 0 !important;
  }

  .Application__wrapper {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
    margin-top: 30px;
  }

  .Application__headButton {
    padding: 4px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 10px;
    background: #fff;
    :hover {
      background: #f1f7ff;
    }
    :focus {
      background: #fff;
    }

    :active {
      background: #e1edfd;
    }
  }

  .Application__TabButton {
    :active {
      background: transparent !important;
    }
  }

  .Application__headTabButton {
    position: relative;
    ::before {
      position: absolute;
      top: 35px;
      content: "";
      background: #4e6af3;
      width: 100%;
      height: 4px;
      border-radius: 10px;
    }

    p {
      color: #4e6af3;
    }

    :active {
      background: transparent !important;
    }
  }

  .SingleApplicationSideBar {
    position: sticky;
    top: 94px;
    max-width: 970px;
    min-width: 355px;
    overflow: auto;
    grid-column: 16 / span 3;
    margin-top: 30px;
    margin-left: -30px;
    height: calc(100vh - 114px);
  }

  @media (max-width: 1660px) {
    padding-left: 0;
    padding-right: 0;
    grid-gap: 15px;
    .Application__wrapper {
      grid-column: 5 / span 10;
      width: 100%;

      &.IsOpenSidebar,
      &.IsOpenFilter {
        grid-column: 1 / span 11;
      }
    }
  }

  @media (max-width: 1441px) {
    grid-gap: 20px;
    padding-left: 0;
    padding-right: 0;

    display: flex;
    flex-direction: column;

    .Application__wrapper {
      margin: 0 auto;
      grid-column: 1 / span 14;
      width: 100%;
      max-width: 970px;
      min-width: unset;

      &.IsOpenFilter,
      &.IsOpenSidebar {
        grid-column: 1 / span 18;
        max-width: 970px;
      }
    }

    .SingleApplicationSideBar {
      width: 100%;
      margin: 0 auto;
      grid-column: 1 / span 18;
      margin-top: 16px;
      height: fit-content;
      padding-bottom: 120px;
    }
  }

  .Applications__filterMobile {
    display: none;
  }

  @media (max-width: 1024px) {
    display: flex;

    flex-direction: column;
    padding-bottom: 80px;
    .Application__headContainer {
      margin-top: 0;
    }
    .TestFilter {
      transform: none;
    }

    .Applications__filterMobile {
      position: relative;
      display: block;
      overflow: auto;
      height: 100vh;
    }

    .Applications__list {
      margin-top: 16px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .Application__Footer {
      display: block;
    }
  }

  @media (max-width: 660px) {
    .Application__headContainer {
      padding-right: 0;
    }

    .Application__headTabsContainer {
      overflow: auto;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media (max-width: 576px) {
    .Applications__list {
      padding-left: 0;
      padding-right: 0;
    }
    .TestFilter {
      display: none;
    }

    .Applications__filterMobileContainer {
      position: absolute;
      z-index: 999;
      width: 100%;
      height: 100vh;
      top: -58px;
    }
    .Application__FooterButtons {
      display: flex;
      justify-content: center;

      div,
      button:not(:first-child) {
        margin-left: 5px;
      }
    }

    .Application__headTabs {
      margin-top: 16px;
    }

    .Application__headTabsBar {
      margin-top: 8px;
    }

    .Application__headTabButton {
      ::before {
        top: 28px;
      }
    }
  }
`;

export { Objects };
