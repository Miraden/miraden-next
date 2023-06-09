import { KebabIcon, WarningIcon } from "@/icons";
import styled from "styled-components";

interface NotificationProps {
  className?: string;
  error?: boolean;
  success?: boolean;
  compact?: boolean;
}

const Notification = ({
  success,
  error,
  className,
  compact,
}: NotificationProps) => {
  return (
    <StyledNotification className={className} error={error} success={success}>
      <div>
        {compact ? (
          <div className="Notification__compact">
            <div>
              <WarningIcon className="Notification__warningIcon" />
              <p>Notification message. Here will be information</p>
            </div>
            <button className="Notification__button">
              <KebabIcon />
            </button>
          </div>
        ) : (
          <div className="Notification__large">
            <div>
              <div className="Notification__head">
                <WarningIcon className="Notification__warningIcon" />
                {error ? (
                  <h2 className="Font_16_20">Error notification</h2>
                ) : (
                  <h2 className="Font_16_20">Info notification</h2>
                )}
              </div>
              <p className="Notification__description">
                Notification message. Here will be information
              </p>
            </div>
            <button className="Notification__button">
              <KebabIcon />
            </button>
          </div>
        )}
      </div>
    </StyledNotification>
  );
};

const StyledNotification = styled.div<NotificationProps>`
  padding: 15px;
  background: ${(props) => (props.error ? "#FFF5F5 !important" : "#eff3fb")};
  background: ${(props) => (props.success ? "#EAFFF3" : "#eff3fb")};
  max-width: 449px;
  border-radius: 10px;

  .Notification__compact {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      p {
        margin-left: 8px;
      }
    }
  }

  .Notification__warningIcon {
    path {
      fill: ${(props) => (props.error ? "#F34942 !important" : "#4E6AF3")};
      fill: ${(props) => (props.success ? "#0AB258" : "#4E6AF3")};
    }
  }

  .Notification__large {
    display: flex;
    justify-content: space-between;
  }

  .Notification__head {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 8px;
      line-height: 19px;
      font-weight: 600;
    }
  }

  .Notification__description {
    margin-top: 10px;
    margin-left: 24px;
  }

  .Notification__button {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    :hover {
      background-color: #f1f7ff;
    }
    :focus {
      outline: 2px solid #f845fc;
    }
    :active {
      background-color: #e1edfd;
    }
    :disabled {
      background: none;
      svg {
        path {
          fill: #b8c6e3;
        }
      }
    }
    svg {
      margin-top: 4px;
    }
  }
`;

export { Notification };
