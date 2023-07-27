import styled from 'styled-components'
import { useCallback, useState } from 'react'
import { Button } from '@/components/ui'

interface Props {
  className?: string
  onChanged?: Function
}

type Option = "buy" | "rent";

const StepFormat = (props: Props): JSX.Element => {
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
    if(props.onChanged) props.onChanged(option)
  }, [props]);

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
          onClick={() => handleSelect("rent")}
          active={selected === "rent"}
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
