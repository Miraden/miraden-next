import { Button, RequestButton } from "@/components/ui";
import { TooltipComponent } from "@/components/ui/Tooltip/MyComponent";
import { ArrowIcon } from "@/icons";
import { InfoIconGrey } from "@/icons/InfoIconGrey";
import { SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const CreateStep5 = ({ className }: Props) => {
  const [selected, setSelected] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [startSquare, setStartSquare] = useState<number | null>(null);
  const [selectedRange, setSelectedRange] = useState<number[]>([]);
  const [maxVisibleSquare, setMaxVisibleSquare] = useState(21);

  const handleSelect = useCallback(() => {
    setSelected(!selected);
    setSelectedRange([]);
  }, [selected]);

  const handleSquareClick = (squareIndex: number) => {
    setSelected(false);

    if (startSquare === null) {
      // start new range
      setStartSquare(squareIndex);
      setSelectedRange([squareIndex]);
    } else {
      // continue existing range
      const endSquare = squareIndex;
      const rangeStart = Math.min(startSquare, endSquare);
      const rangeEnd = Math.max(startSquare, endSquare);
      const selectedRange: SetStateAction<number[]> = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        selectedRange.push(i);
      }

      if (selectedRange.every((m) => selectedRange.includes(m))) {
        // update existing range
        setSelectedRange(selectedRange);
      } else {
        // create new range
        setSelectedRange(selectedRange);
        setStartSquare(null);
      }
    }

    if (startSquare !== null && squareIndex !== startSquare) {
      const rangeStart = Math.min(startSquare, squareIndex);
      const rangeEnd = Math.max(startSquare, squareIndex);
      const newRange = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        newRange.push(i);
      }

      if (
        selectedRange.length > 0 &&
        newRange.every((m) => selectedRange.includes(m))
      ) {
        // update existing range
        setSelectedRange(newRange);
      } else {
        // add new range to existing range
        setSelectedRange([...selectedRange, ...newRange]);
      }
    }
  };

  const handleShowMore = useCallback(() => {
    setShowMore(true);
    setMaxVisibleSquare(64);
  }, []);

  const handleShowLess = useCallback(() => {
    setShowMore(false);
    setMaxVisibleSquare(18);
  }, []);

  const squares = [];
  for (let square = 10; square <= 800; square += 10) {
    squares.push(square);
  }
  const [selectedLiving, setSelectedLiving] = useState(false);
  const [startLivingSquare, setStartLivingSquare] = useState<number | null>(
    null
  );
  const [selectedLivingRage, setSelectedLivingRage] = useState<number[]>([]);
  const [showMoreLiving, setShowMoreLiving] = useState(false);
  const [maxVisibleLivingSquare, setMaxVisibleLivingSquare] = useState(21);

  const handleSelectLiving = useCallback(() => {
    setSelectedLiving(!selectedLiving);
    setSelectedLivingRage([]);
  }, [selectedLiving]);

  const handleLivingSquareClick = (squareIndexLiving: number) => {
    if (startLivingSquare === null) {
      // start new range
      setSelectedLiving(false);
      setStartLivingSquare(squareIndexLiving);
      setSelectedLivingRage([squareIndexLiving]);
    } else {
      // continue existing range
      const endLivingSquare = squareIndexLiving;
      const livingRangeStart = Math.min(startLivingSquare, endLivingSquare);
      const livingRangeEnd = Math.max(startLivingSquare, endLivingSquare);
      const selectedLivingRage: SetStateAction<number[]> = [];
      for (let i = livingRangeStart; i <= livingRangeEnd; i++) {
        selectedLivingRage.push(i);
      }

      if (selectedLivingRage.every((m) => selectedLivingRage.includes(m))) {
        // update existing range
        setSelectedLivingRage(selectedLivingRage);
      } else {
        // create new range
        setSelectedLivingRage(selectedLivingRage);
        setStartLivingSquare(null);
      }
    }

    if (startLivingSquare !== null && squareIndexLiving !== startLivingSquare) {
      const livingRangeStart = Math.min(startLivingSquare, squareIndexLiving);
      const livingRangeEnd = Math.max(startLivingSquare, squareIndexLiving);
      const newRange = [];
      for (let i = livingRangeStart; i <= livingRangeEnd; i++) {
        newRange.push(i);
      }

      if (
        selectedLivingRage.length > 0 &&
        newRange.every((m) => selectedLivingRage.includes(m))
      ) {
        // update existing range
        setSelectedLivingRage(newRange);
      } else {
        // add new range to existing range
        setSelectedLivingRage([...selectedLivingRage, ...newRange]);
      }
    }
  };

  const handleShowMoreLiving = useCallback(() => {
    setShowMoreLiving(true);
    setMaxVisibleLivingSquare(64);
  }, []);

  const handleShowLessLiving = useCallback(() => {
    setShowMoreLiving(false);
    setMaxVisibleLivingSquare(18);
  }, []);

  const livingSquares = [];
  for (let livingSquare = 10; livingSquare <= 800; livingSquare += 10) {
    livingSquares.push(livingSquare);
  }

  const minIndex = Math.min(...selectedRange);
  const maxIndex = Math.max(...selectedRange);
  const minIndexLiving = Math.min(...selectedLivingRage);
  const maxIndexLiving = Math.max(...selectedLivingRage);
  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Укажите общую площадь недвижимости
            </h1>
          </div>
        </div>
        <div className="Reg__selectContainer">
          <div className="Reg__squareContainer">
            <div className="Reg__square">
              <RequestButton onClick={handleSelect} active={selected}>
                Неважно
              </RequestButton>
              {[...Array(64)].map((_, index) => {
                const label = index + "0 м²";
                if (index === 0) {
                  return label === "уже построена";
                }
                if (index >= maxVisibleSquare) {
                  return null;
                }

                const isRanged = index > minIndex && index < maxIndex;
                return (
                  <RequestButton
                    key={`${index}`}
                    onClick={() => handleSquareClick(index)}
                    active={isRanged ? false : selectedRange.includes(index)}
                    ranged={isRanged}
                  >
                    {label}
                  </RequestButton>
                );
              })}
              {maxVisibleSquare < 64 && (
                <RequestButton
                  onClick={handleShowMore}
                  className="ShowMoreButton Color_blue_primary"
                >
                  Ещё {squares.length - maxVisibleSquare}
                </RequestButton>
              )}
              {maxVisibleSquare >= 64 && (
                <RequestButton
                  onClick={handleShowLess}
                  className="ShowMoreButton Color_blue_primary"
                >
                  Скрыть
                </RequestButton>
              )}
            </div>
          </div>
          <div className="Reg__squareLivingContainer">
            <div className="Reg__squareHead">
              <h2 className="Font_20_120 sm:Font_18_120_500">Жилая площадь</h2>
              <TooltipComponent
                className="Tooltip"
                trigger={<InfoIconGrey />}
                text="В жилую площадь не входят кухни, санузлы, коридоры, балконы и прочие подобные помещения"
              />
            </div>
            <div className="Reg__square">
              <RequestButton
                onClick={handleSelectLiving}
                active={selectedLiving}
              >
                Неважно
              </RequestButton>
              {[...Array(64)].map((_, index) => {
                const label = index + "0 м²";
                if (index === 0) {
                  return label === "уже построена";
                }
                if (index >= maxVisibleLivingSquare) {
                  return null;
                }

                const isRanged =
                  index > minIndexLiving && index < maxIndexLiving;
                return (
                  <RequestButton
                    key={`${index}`}
                    onClick={() => handleLivingSquareClick(index)}
                    active={
                      isRanged ? false : selectedLivingRage.includes(index)
                    }
                    ranged={isRanged}
                  >
                    {label}
                  </RequestButton>
                );
              })}
              {maxVisibleLivingSquare < 64 && (
                <RequestButton
                  onClick={handleShowMoreLiving}
                  className="ShowMoreButton Color_blue_primary"
                >
                  Ещё {livingSquares.length - maxVisibleLivingSquare}
                </RequestButton>
              )}
              {maxVisibleLivingSquare >= 64 && (
                <RequestButton
                  onClick={handleShowLessLiving}
                  className="ShowMoreButton Color_blue_primary"
                >
                  Скрыть
                </RequestButton>
              )}
            </div>
          </div>
        </div>
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>
          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button
                secondary
                href="/lead/add/4"
                className="Reg__goBackButton"
              >
                Назад
              </Button>
              <Button
                secondary
                href="/lead/add/4"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
              <div className="Reg__footerSteps">
                <span className="Font_16_24">Шаг</span>
                <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                  5
                </span>
                <span className="Font_16_140 Color_text_grey">/ 11</span>
              </div>
            </div>
            <div className="Reg__nextButtonContainer">
              <div>
                <span className="Color_text_grey Font_16_24">
                  Найдено продавцов
                </span>
                <p className="Color_blue_primary Font_16_140">317</p>
              </div>

              <Button
                disabled={selectedRange.length === 0 && !selected}
                href="/lead/add/6"
              >
                Далее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledRegStep1>
  );
};

const StyledRegStep1 = styled.section`
  background: #fff;
  border-radius: 10px;
  margin-top: 150px;

  .Reg__head {
    padding: 30px 30px 18px 30px;
    border-bottom: 2px solid #f1f7ff;
  }

  .Reg__selectContainer {
    height: 416px;
    overflow-y: auto;
  }

  .Reg__squareContainer,
  .Reg__squareLivingContainer {
    padding: 30px 30px 10px 30px;
  }

  .Reg__squareHead {
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    h2 {
      margin-right: 10px;
    }
  }

  .Tooltip {
    height: 18px;

    svg {
      :hover {
        path,
        circle {
          stroke: #4e6af3;
        }
      }
    }
  }

  .Reg__square {
    display: flex;
    flex-wrap: wrap;

    margin-left: -10px;
    margin-top: -10px;
    button {
      padding: 10px 20px;
      width: fit-content;
      margin-left: 10px;
      margin-top: 10px;
    }
  }

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
    ::after {
      position: absolute;
      border-radius: 0 10px 10px 0;
      content: "";
      width: 45.45%;
      height: 6px;
      background-color: #4e6af3;
    }
  }

  .Reg__footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }

  .Reg__footerSteps {
    margin-left: 30px;

    span:last-child {
      margin-left: 4px;
    }
  }

  .Reg__footerCount {
    margin-left: 10px;
  }

  .Reg__nextButtonContainer {
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
    p {
      margin-left: 10px;
      margin-right: 30px;
    }
  }

  .Reg__footerBack {
    display: flex;
    align-items: center;
  }

  .Reg__goBackButtonMobile {
    display: none;
  }

  @media (max-width: 1200px) {
    margin-top: 100px;
  }

  @media (max-width: 960px) {
    margin-top: 10px;

    .Reg__squareContainer {
      padding-top: 36px;
      padding-bottom: 0;
    }

    .Reg__squareLivingContainer {
      padding-top: 36px;
    }

    .Reg__squareHead {
      margin-bottom: 12px;
    }

    .Reg__selectContainer {
      height: 827px;
    }
  }
  @media (max-width: 768px) {
    .Reg__nextButtonContainer {
      div {
        display: none;
      }
    }
  }

  @media (max-width: 576px) {
    margin-top: 0;
    margin-top: 0;
    height: 100vh;

    .Reg {
      height: 100%;
    }
    .Reg__head {
      padding: 20px 20px 16px 20px;
    }

    .Reg__squareContainer {
      padding: 24px 20px 36px 20px;
    }

    .Reg__squareLivingContainer {
      padding-top: 0;
      padding-bottom: 126px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .Reg__squareHead {
      margin-bottom: 12px;
    }
    .Reg__selectContainer {
      height: 934px;
    }

    .Reg__goBackButton {
      display: none;
    }

    .Reg__footer {
      padding: 20px;
    }

    .Reg__footerSteps {
      margin-left: 20px;
    }

    .Reg__goBackButtonMobile {
      padding: 16px;
      display: flex;
      svg {
        transform: rotate(-90deg);
        path {
          fill: none !important;
        }
      }
    }
    .Reg__headContainer {
      position: sticky;
      top: 0;
      background: #fff;
      width: 100%;
    }

    .Reg__footerContainer {
      position: fixed;
      bottom: 0;
      width: 100%;
      background: #fff;
    }
  }
`;

export { CreateStep5 };
