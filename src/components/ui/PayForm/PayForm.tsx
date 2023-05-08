import { CrossIcon } from "@/icons";
import styled from "styled-components";
import { PayFormContent } from "./PayFormContent";

interface PayFormProps {
  className?: string;
  onClose?: any;
}

const PayForm = ({ className, onClose }: PayFormProps) => {
  return (
    <StyledPayForm className={className}>
      <div className="PayForm">
        <div className="PayForm__head">
          <h2 className="Font_32_120">Форма оплаты</h2>
          <button onClick={onClose}>
            <CrossIcon width={24} height={24} className="CrossIcon" />
          </button>
        </div>
        <PayFormContent />
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
    position: absolute;
    z-index: 21;
    max-width: 390px;
  }

  .PayForm__head {
    padding: 30px 30px 18px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    page-break-after: 18px;
    border-bottom: 2px solid #f1f7ff;
  }

  .CrossIcon {
    background: #f1f7ff;
    border-radius: 50%;
    padding: 2px;
    path {
      fill: #7786a5;
    }
  }
`;

export { PayForm };
