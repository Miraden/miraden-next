import { Sticker } from "@/components/ui";
import { ArrowAccordionIcon } from "@/icons";
import styled from "styled-components";

const ApplicationInfo = () => {
  return (
    <StyledApplicationInfo>
      <div className="ApplicationInfo">
        <button className="ApplicationInfo__backButton">
          <ArrowAccordionIcon className="ArrowIcon" />
        </button>
        <div className="ApplicationInfo__container">
          <div className="ApplicationInfo__headContent">
            <h2 className="Font_24_120">Заявка #12463</h2>
            <Sticker theme="black">TRUE</Sticker>
          </div>
          <p className="ApplicationInfo__headDescription Font_16_150">
            Куплю 3-х комнатную квартиру на Северном Кипре для инвестиций
          </p>
        </div>
      </div>
    </StyledApplicationInfo>
  );
};

const StyledApplicationInfo = styled.div`
  background: #2a344a;
  color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 625px;

  .ApplicationInfo {
    display: flex;
  }

  .ApplicationInfo__backButton {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #3a465d;
  }

  .ArrowIcon {
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
    path {
      fill: #fff;
    }
  }

  .ApplicationInfo__container {
    margin-left: 15px;
  }

  .ApplicationInfo__headContent {
    display: flex;
    justify-content: space-between;
  }

  .ApplicationInfo__headDescription {
    margin-top: 15px;
  }
`;

export { ApplicationInfo };
