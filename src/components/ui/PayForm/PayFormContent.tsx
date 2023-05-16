import {
  ApplePayIcon,
  CreditCardPlusIcon,
  QiwiIcon,
  VisaIcon,
  WebMoneyIcon,
  YouMoneyIcon,
} from "@/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { PayButton } from "../PayButton";

interface Props {
  className?: string;
  totalTax?: any;
  additionalRequests?: any;
  openToEveryone?: any;
  getUp?: any;
}

const payOptions = [
  { label: "Банковская карта", icon: <VisaIcon />, tax: 3.5 },
  { label: "Юmoney", icon: <YouMoneyIcon />, tax: 3.5 },
  { label: "Webmoney", icon: <WebMoneyIcon />, tax: 6 },
  { label: "QIWI Кошелёк", icon: <QiwiIcon />, tax: 6 },
  { label: "Apple Pay", icon: <ApplePayIcon />, tax: 4 },
  { label: "Выставить счёт (B2B)", icon: <CreditCardPlusIcon /> },
];

const PayFormContent = ({
  className,
  totalTax,
  openToEveryone,
  additionalRequests,
  getUp,
}: Props) => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTax, setSelectedTax] = useState(null);

  const handleSelect = useCallback(
    (option: any) => {
      if (selectedOption === option) {
        setSelectedOption(null);
        setSelectedTax(null);
      } else {
        setSelectedOption(option);
        setSelectedTax(option.tax);
      }
    },
    [selectedOption]
  );

  return (
    <StyledPayFormContent className={className}>
      <div className="PayFormContent__body Font_16_24">
        <span className="PayFormContent__bill">Счёт № 3655 от 20.01.2023</span>
        <div className="PayFormContent__costs">
          {openToEveryone && (
            <div className="PayFormContent__costsItem">
              <span>Открыть заявку для всех</span>
              <span className="PayFormContent__cost Font_16_140">
                {openToEveryone}€
              </span>
            </div>
          )}
          {additionalRequests && (
            <div className="PayFormContent__costsItem">
              <span>Закрепить вверху на 24 часа</span>
              <span className="PayFormContent__cost Font_16_140">
                {additionalRequests}€
              </span>
            </div>
          )}
          {getUp && (
            <div className="PayFormContent__costsItem">
              <span>Поднимать каждые 3 дня</span>
              <span className="PayFormContent__cost Font_16_140">{getUp}€</span>
            </div>
          )}
          {selectedOption && (
            <div>
              <span>Комиссия </span>
              <span className="PayFormContent__cost Font_16_140">
                {selectedTax}%
              </span>
            </div>
          )}

          <div className="PayFormContent__totalCost">
            <span>Итого к оплате</span>
            <span className="Font_32_120">
              {totalTax + (selectedTax ? (totalTax * selectedTax) / 100 : 0)}€
            </span>
          </div>
        </div>
      </div>
      <div className="PayFormContent__payButtons Font_16_24">
        <p>Оплатите удобным для вас способом</p>
        <ul className="">
          {payOptions.map((option, index) => (
            <li key={index}>
              <PayButton
                leftIcon={option.icon}
                tax={option.tax}
                active={selectedOption === option} // Проверяем, является ли текущий элемент выбранным
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </PayButton>
            </li>
          ))}
        </ul>
        <button onClick={handleShow} className="PayFormContent__payVariants">
          {isShow ? "Скрыть способы оплаты" : "Открыть ещё способы"}
        </button>
        {isShow && <div>Другие способы оплаты</div>}
      </div>
    </StyledPayFormContent>
  );
};

const StyledPayFormContent = styled.div`
  .PayFormContent__body {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    border-bottom: 5px solid #f1f7ff;
  }

  .PayFormContent__costs {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    span {
      margin-top: 15px;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .PayFormContent__costsItem {
    display: flex;
    justify-content: space-between;
  }

  .PayFormContent__cost {
    color: #4e6af3;
  }

  .PayFormContent__totalCost {
    color: #4e6af3;
  }

  .PayFormContent__bill {
    color: #7786a5;
  }

  .PayFormContent__payButtons {
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    height: 514px;

    p {
      margin-bottom: 5px;
    }

    a {
      margin-top: 10px;
    }
  }

  .PayFormContent__payVariants {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
    color: #4e6af3;
  }
`;

export { PayFormContent };
