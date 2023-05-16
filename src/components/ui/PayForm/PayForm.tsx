import { CrossIcon } from "@/icons";
import styled from "styled-components";
import { Button } from "../Button";
import { PayFormContent } from "./PayFormContent";

interface PayFormProps {
  className?: string;
  onClose?: any;
  testCost?: any;
  totalTax?: any;
  openToEveryone?: any;
  additionalRequests?: any;
  getUp?: any;
}

const PayForm = ({
  className,
  onClose,
  testCost,
  totalTax,
  openToEveryone,
  additionalRequests,
  getUp,
}: PayFormProps) => {
  return (
    <StyledPayForm className={className}>
      <div className="PayForm">
        <div className="PayForm__head">
          <h2 className="Font_32_120">Форма оплаты</h2>
          <button onClick={onClose}>
            <CrossIcon width={24} height={24} className="CrossIcon" />
          </button>
        </div>
        <PayFormContent
          className="PayFormContent"
          totalTax={totalTax}
          openToEveryone={openToEveryone}
          additionalRequests={additionalRequests}
          getUp={getUp}
        />
        <div className="PayFormContent__totalPay">
          <Button>Оплалить {totalTax}€</Button>
        </div>
      </div>
    </StyledPayForm>
  );
};

const StyledPayForm = styled.div`
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(60, 75, 97, 0.6);
  backdrop-filter: blur(11px);

  .PayForm {
    background: #fff;
    right: 0;
    height: 100vh;
    top: 0;
    position: relative;
    z-index: 21;
    width: 390px;
  }

  .PayForm__head {
    position: absolute;
    padding: 30px 30px 18px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    page-break-after: 18px;
    background: #fff;
    width: 100%;
    border-bottom: 2px solid #f1f7ff;
    z-index: 2;
  }

  .CrossIcon {
    background: #f1f7ff;
    border-radius: 50%;
    padding: 2px;
    path {
      fill: #7786a5;
    }
  }

  .PayFormContent {
    position: relative;
    padding-top: 88px;
    overflow: scroll;
  }

  .PayFormContent__totalPay {
    position: absolute;
    background: #fff;
    bottom: 0;
    width: 100%;
    margin-top: 99px;
    padding: 20px 30px;
    border-top: 2px solid #e1edfd;
    button {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .PayForm {
      width: 100%;
      max-width: unset;
    }
  }
`;

export { PayForm };
