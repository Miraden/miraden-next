import styled from "styled-components";
import { PayFormContent } from "./PayFormContent";

interface PayFormProps {
  className?: string;
}

const PayForm = ({ className }: PayFormProps) => {
  return (
    <StyledPayForm className={className}>
      <h2 className="PayForm__head Font_32_120">Форма оплаты</h2>
      <PayFormContent />
    </StyledPayForm>
  );
};

const StyledPayForm = styled.div`
  max-width: 375px;
  border: 1px solid black;

  .PayForm__head {
    padding: 30px 30px 18px 30px;
    border-bottom: 2px solid #f1f7ff;
  }
`;

export { PayForm };
