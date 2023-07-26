import styled from "styled-components";
import {useCallback, useState} from "react";
import {Button, RequestButton} from "@/components/ui";
import {ArrowIcon} from "@/icons";

interface Props {
  className?: string;
}

type Option = "buy" | "sell";

const StepFormat = (): JSX.Element => {
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
    if (option === "buy") {
      //window.location.href = "/lead/add/3"; // Переход на страницу при выборе "Хочу купить"
    } else if (option === "sell") {
      //window.location.href = "/lead/add/5?sell"; // Переход на страницу при выборе "Хочу арендовать"
    }
  }, []);

  return (
    <StyledRegStep1>
      <div className="Reg__options">
        <Button
          request
          onClick={() => handleSelect("buy")}
          active={selected === "buy"}
        >
          Хочу купить
        </Button>
        <Button
          request
          onClick={() => handleSelect("sell")}
          active={selected === "sell"}
        >
          Хочу арендовать
        </Button>
      </div>
    </StyledRegStep1>
  );
}

const StyledRegStep1 = styled.section`
  .Reg__options {
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;

    button {
      justify-content: flex-start;
      max-width: 340px;
      width: 100%;
      margin-left: 20px;
      margin-top: 20px;

      span {
        text-align: initial;
      }
    }
  }
`;

export default StepFormat
