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
import { Button } from "../Button";
import { PayButton } from "../PayButton";

interface Props {
  className?: string;
  testCost?: any;
  totalTax?: any;
}

const options = [
  { label: "Дополнительные пожелания", cost: 0 },
  { label: "Открыть заявку для всех", cost: 10 },
  { label: "Закрепить вверху на 24 часа", cost: 15 },
];

const tax = 0.035;

const PayFormContent = ({ className, testCost, totalTax }: Props) => {
  const totalCost = options.reduce((acc, option) => acc + option.cost, 0);
  const commission = totalCost * tax;

  const [isShow, setIsShow] = useState(false);

  const handleShow = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <StyledPayFormContent className={className}>
      <div className="PayFormContent__body Font_16_24">
        <span className="PayFormContent__bill">Счёт № 3655 от 20.01.2023</span>
        <div className="PayFormContent__costs">
          <p>Test {testCost}</p>
          <ul className="">
            {options.map((option, index) => (
              <li key={index} className="PayFormContent__costsItem">
                <span>{option.label}</span>{" "}
                <span className="PayFormContent__cost Font_16_140">
                  {option.cost}€
                </span>
              </li>
            ))}
          </ul>
          <div>
            <span>Комиссия 3.5%</span>
            <span className="PayFormContent__cost Font_16_140">
              {commission.toFixed(2)}€
            </span>
          </div>
          <div className="PayFormContent__totalCost">
            <span>Итого к оплате</span>
            <span className="Font_32_120">{totalTax}€</span>
          </div>
        </div>
      </div>
      <div className="PayFormContent__payButtons Font_16_24">
        <p>Оплатите удобным для вас способом</p>
        <PayButton leftIcon={<VisaIcon />} tax="3.5">
          Банковская карта
        </PayButton>
        <PayButton leftIcon={<YouMoneyIcon />} tax="3.5">
          Юmoney
        </PayButton>
        <PayButton leftIcon={<WebMoneyIcon />} tax="6">
          Webmoney
        </PayButton>
        <PayButton leftIcon={<QiwiIcon />} tax="6">
          QIWI Кошелёк
        </PayButton>
        <PayButton leftIcon={<ApplePayIcon />} tax="от 4">
          Apple Pay
        </PayButton>
        <PayButton leftIcon={<CreditCardPlusIcon />}>
          Банковская карта
        </PayButton>
        <button onClick={handleShow} className="PayFormContent__payVariants">
          {isShow ? "Скрыть способы оплаты" : "Открыть ещё способы"}
        </button>
        {isShow && <div>Другие способы оплаты</div>}
      </div>
      <div className="PayFormContent__totalPay">
        <Button>Оплалить {totalTax}€</Button>
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

  .PayFormContent__totalPay {
    margin-top: 99px;
    padding: 20px 30px;
    border-top: 2px solid #e1edfd;
    button {
      width: 100%;
    }
  }
`;

export { PayFormContent };
