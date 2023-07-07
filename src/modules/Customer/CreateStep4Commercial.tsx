import { Button, RequestButton } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

type Option = "new" | "secondary" | "any";

const CreateStep4Commercial = ({ className }: Props) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [showAllYears, setShowAllYears] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [startMonth, setStartMonth] = useState<number | null>(null);
  const [selectedRange, setSelectedRange] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedAlready, setSelectedAlready] = useState(false);

  const handleSelectAlready = useCallback(() => {
    setSelectedAlready(!selectedAlready);
    setSelectedRange([]);
  }, [selectedAlready]);

  const handleYearSelection = (year: any) => {
    setSelectedYear(year);
  };
  const [maxVisibleMonths, setMaxVisibleMonths] = useState(18);
  const handleSelect = useCallback((option: Option) => {
    setSelected(option);
    setShowMore(false); // reset show more button state when new option is selected
    setMaxVisibleMonths(18);
  }, []);

  const handleMonthClick = (monthIndex: number) => {
    if (startMonth === null) {
      // start new range
      setStartMonth(monthIndex);
      setSelectedRange([monthIndex]);
      setSelectedAlready(false);
    } else {
      // continue existing range
      const endMonth = monthIndex;
      const rangeStart = Math.min(startMonth, endMonth);
      const rangeEnd = Math.max(startMonth, endMonth);
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
        setStartMonth(null);
      }
    }

    // add all months between start and end of selected range
    if (startMonth !== null && monthIndex !== startMonth) {
      const rangeStart = Math.min(startMonth, monthIndex);
      const rangeEnd = Math.max(startMonth, monthIndex);
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

  const handleShowAllYears = useCallback(() => {
    setShowAllYears(true);
  }, []);

  const handleShowLessYears = useCallback(() => {
    setShowAllYears(false);
  }, []);

  const handleShowMore = useCallback(() => {
    setShowMore(true);
    setMaxVisibleMonths(64);
  }, []);

  const handleShowLess = useCallback(() => {
    setShowMore(false);
    setMaxVisibleMonths(18);
    setShowAllYears(false);
  }, []);

  const years = [];
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 50;

  for (let year = currentYear; year >= minYear; year--) {
    years.push(year);
  }

  const visibleYears = showAllYears ? years : years.slice(0, 10);
  const minIndex = Math.min(...selectedRange);
  const maxIndex = Math.max(...selectedRange);
  return (
    <StyledRegStep1 className={className}>
      <div className="Reg">
        <div className="Reg__headContainer">
          <div className="Reg__head">
            <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
              Укажите состояние недвижимости
            </h1>
          </div>
        </div>

        <div className="Reg__options ">
          <RequestButton
            onClick={() => handleSelect("new")}
            active={selected === "new"}
          >
            Новая
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("secondary")}
            active={selected === "secondary"}
          >
            Вторичная
          </RequestButton>
          <RequestButton
            onClick={() => handleSelect("any")}
            active={selected === "any"}
          >
            Неважно
          </RequestButton>
          {selected === "new" && (
            <div className="Reg__monthsContainer">
              <h2 className="Font_20_120 sm:Font_18_120_500">
                Ввод в эксплуатацию через
              </h2>
              <div className="Reg__months">
                <RequestButton
                  onClick={handleSelectAlready}
                  active={selectedAlready}
                >
                  Уже построена
                </RequestButton>
                {[...Array(64)].map((_, index) => {
                  const month = index % 12;

                  const label = index + " мес";
                  if (index === 0) {
                    return label === "уже построена";
                  }
                  if (index >= maxVisibleMonths) {
                    return null;
                  }

                  const isRanged = index > minIndex && index < maxIndex;
                  return (
                    <RequestButton
                      key={`${index}`}
                      onClick={() => handleMonthClick(index)}
                      active={isRanged ? false : selectedRange.includes(index)}
                      ranged={isRanged}
                    >
                      {label}
                    </RequestButton>
                  );
                })}
                {maxVisibleMonths < 64 && (
                  <RequestButton
                    onClick={handleShowMore}
                    className="ShowMoreButton Color_blue_primary"
                  >
                    Ещё {maxVisibleMonths}
                  </RequestButton>
                )}
                {maxVisibleMonths >= 64 && (
                  <RequestButton
                    onClick={handleShowLess}
                    className="Color_blue_primary"
                  >
                    Скрыть
                  </RequestButton>
                )}
              </div>
            </div>
          )}
          {selected === "secondary" && (
            <div className="Reg__monthsContainer">
              <h2 className="Font_20_120 sm:Font_18_120_500">Год постройки</h2>
              <div className="Reg__months">
                {visibleYears.map((year) => (
                  <RequestButton
                    key={year}
                    active={year === selectedYear}
                    onClick={() => handleYearSelection(year)}
                  >
                    {year}
                  </RequestButton>
                ))}{" "}
                {!showAllYears && years.length > 10 && (
                  <RequestButton
                    onClick={handleShowAllYears}
                    className="Color_blue_primary"
                  >
                    Еще {visibleYears.length}
                  </RequestButton>
                )}
                {showAllYears && (
                  <RequestButton
                    onClick={handleShowLessYears}
                    className="Color_blue_primary"
                  >
                    Скрыть
                  </RequestButton>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="Reg__footerContainer">
          <div className="Reg__progressBar"></div>
          <div className="Reg__footer">
            <div className="Reg__footerBack">
              <Button
                secondary
                href="/lead/add/3"
                className="Reg__goBackButton"
              >
                Назад
              </Button>
              <Button
                secondary
                href="/customer/create-step-3"
                leftIcon={<ArrowIcon />}
                className="Reg__goBackButtonMobile"
              ></Button>
              <div className="Reg__footerSteps">
                <span className="Font_16_24">Шаг</span>
                <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                  4
                </span>
                <span className="Font_16_140 Color_text_grey">/ 10</span>
              </div>
            </div>
            <div className="Reg__nextButtonContainer">
              <div>
                <span className="Color_text_grey Font_16_24">
                  Найдено продавцов
                </span>
                <p className="Color_blue_primary Font_16_140">317</p>
              </div>

              {selected === "secondary" ? (
                <Button
                  disabled={!selected}
                  href="/lead/add/5&commercial"
                >
                  Далее
                </Button>
              ) : (
                <Button
                  disabled={!selected}
                  href="/lead/add/5&commercial"
                >
                  Далее
                </Button>
              )}
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

  .Reg__options {
    padding: 41px 30px 0 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;
    align-content: start;
    height: 436px;

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

  .Reg__monthsContainer {
    padding: 30px 30px 0 30px;
  }

  .Reg__months {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    align-content: flex-start;
    height: 206px;
    overflow-y: auto;

    margin-left: -10px;
    button {
      padding: 10px 20px;
      width: fit-content;
      margin-left: 10px;
      margin-top: 10px;
    }
  }

  .Reg__years {
  }

  .Reg__progressBar {
    position: relative;
    height: 6px;
    background-color: #d4ddee;
    ::after {
      position: absolute;
      border-radius: 0 10px 10px 0;
      content: "";
      width: 40%;
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
    .Reg__options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: max-content;
      grid-gap: 20px;
      margin-left: 0;
      margin-top: 0;
      button {
        max-width: unset;
        width: 100%;
        margin-left: 0;
        margin-top: 0;
      }
    }

    .Reg__months {
      height: 606px;
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
    height: 100vh;

    .Reg {
      height: 100%;
    }
    .Reg__head {
      padding: 20px 20px 16px 20px;
    }

    .Reg__options {
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      grid-gap: 12px;
      button {
      }
    }

    .Reg__months {
      height: 463px;
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

export { CreateStep4Commercial };
