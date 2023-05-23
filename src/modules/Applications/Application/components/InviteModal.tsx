import { Button, Checkbox } from "@/components/ui";
import { CrossIcon } from "@/icons";
import styled from "styled-components";

interface Props {
  className?: string;
  onClick?: any;
  closeModal?: any;
  onSubmit?: any;
}

const InviteModal = ({ className, onClick, closeModal, onSubmit }: Props) => {
  return (
    <StyledInviteModal className={className}>
      <StyledModalContent>
        <button onClick={closeModal} className="CloseButton">
          <CrossIcon className="CrossIcon" width={24} height={24} />
        </button>
        <h3 className="Font_24_120">Открыть контакты</h3>

        <p className="ModalDescription Font_16_150">
          Открывая контакты, вы одновременно сможете видеть контактные данные
          друг друга
        </p>
        <Button type="submit" onClick={onSubmit} className="SubmitButton">
          Открыть контакты
        </Button>
        <Checkbox
          label="Больше не показывать это уведомление"
          className="ModalCheckbox"
        />
      </StyledModalContent>
    </StyledInviteModal>
  );
};

const StyledInviteModal = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100%;
  width: 100%;
  background: rgba(60, 75, 97, 0.6);
  backdrop-filter: blur(11px);

  .CloseButton {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .CrossIcon {
    path {
      fill: #7786a5;
    }
  }

  .ModalDescription {
    margin-top: 15px;
  }

  .SubmitButton {
    margin-top: 40px;
  }

  .ModalCheckbox {
    margin-top: 40px;
  }
`;

const StyledModalContent = styled.div`
  position: absolute;
  max-width: 440px;
  top: 33%;
  left: 50%;
  min-width: 345px;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 40px;
  border-radius: 10px;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { InviteModal };
