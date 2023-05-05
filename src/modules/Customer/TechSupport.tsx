import { CrossIcon, TelegramIcon, WhatsappIcon } from "@/icons";
import styled from "styled-components";

interface Props {
  className?: string;
  onClose?: any;
}

const TechSupport = ({ className, onClose }: Props) => {
  return (
    <StyledTechSupport>
      <div className="TechSupport">
        <div className="TechSupport__head">
          <h2 className="Font_32_120">Поддержка</h2>
          <button onClick={onClose}>
            <CrossIcon width={24} height={24} className="CrossIcon" />
          </button>
        </div>
        <div className="TechSupport__body">
          <p className="Font_16_24">
            Выберите удобный мессенджер для связи с оператором
          </p>
          <div className="TechSupport__buttonsContainer">
            <button className="TechSupport__button">
              <WhatsappIcon />
              <span className="Font_16_140">WhatsApp</span>
            </button>
            <button className="TechSupport__button">
              <TelegramIcon />
              <span className="Font_16_140">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </StyledTechSupport>
  );
};

const StyledTechSupport = styled.div`
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(60, 75, 97, 0.6);
  backdrop-filter: blur(11px);

  .TechSupport {
    background: #fff;
    right: 0;
    height: 100vh;
    top: 0;
    position: absolute;
    z-index: 21;
    max-width: 390px;
  }

  .TechSupport__head {
    padding: 30px 30px 18px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    page-break-after: 18px;
    border-bottom: 2px solid #f1f7ff;
  }

  .CrossIcon {
    path {
      fill: #7786a5;
    }
  }

  .TechSupport__body {
    padding: 35px 30px;
  }

  .TechSupport__buttonsContainer {
    margin-top: 15px;
  }

  .TechSupport__button {
    padding: 9px 12px;
    box-shadow: 0 0 0 2px inset #e1edfd;
    border-radius: 10px;
    width: 100%;
    text-align: start;
    display: flex;
    align-items: center;
    transition: 0.15s ease;
    span {
      margin-left: 20px;
    }

    :hover {
      background: #e1edfd;

      span {
        color: #4e6af3;
      }
    }
  }

  .TechSupport__button:not(:first-child) {
    margin-top: 10px;
  }

  @media (max-width: 576px) {
    .TechSupport {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export { TechSupport };
