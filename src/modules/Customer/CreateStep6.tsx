import { Button, RequestButton } from "@/components/ui";
import { ArrowIcon } from "@/icons";
import { SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const CreateStep6 = ({ className }: Props) => {
  const [selected, setSelected] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [startRoom, setStartRoom] = useState<number | null>(null);
  const [selectedRange, setSelectedRange] = useState<number[]>([]);
  const [maxVisibleRooms, setMaxVisibleRooms] = useState(8);

  const handleSelect = useCallback(() => {
    setSelected(!selected);
    setSelectedRange([]);
  }, [selected]);
  const handleRoomClick = (roomIndex: number) => {
    setSelected(false);

    if (startRoom === null) {
      // start new range
      setStartRoom(roomIndex);
      setSelectedRange([roomIndex]);
    } else {
      // continue existing range
      const endRoom = roomIndex;
      const rangeStart = Math.min(startRoom, endRoom);
      const rangeEnd = Math.max(startRoom, endRoom);
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
        setStartRoom(null);
      }
    }

    if (startRoom !== null && roomIndex !== startRoom) {
      const rangeStart = Math.min(startRoom, roomIndex);
      const rangeEnd = Math.max(startRoom, roomIndex);
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
    setMaxVisibleRooms(18);
  }, []);

  const rooms = [];
  for (let room = 1; room <= 18; room++) {
    rooms.push(room);
  }
  const [startSleep, setStartSleep] = useState<number | null>(null);
  const [selectedSleepRange, setSelectedSleepRange] = useState<number[]>([]);
  const [showMoreSleep, setShowMoreSleep] = useState(false);

  const [maxVisibleSleep, setMaxVisibleSleep] = useState(6);

  const handleSleepClick = (sleepIndex: number) => {
    if (startSleep === null) {
      // start new range
      setStartSleep(sleepIndex);
      setSelectedSleepRange([sleepIndex]);
    } else {
      // continue existing range
      const endSleep = sleepIndex;
      const rangeStart = Math.min(startSleep, endSleep);
      const rangeEnd = Math.max(startSleep, endSleep);
      const selectedSleepRange: SetStateAction<number[]> = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        selectedSleepRange.push(i);
      }

      if (selectedSleepRange.every((m) => selectedSleepRange.includes(m))) {
        // update existing range
        setSelectedSleepRange(selectedSleepRange);
      } else {
        // create new range
        setSelectedSleepRange(selectedSleepRange);
        setStartSleep(null);
      }
    }

    if (startSleep !== null && sleepIndex !== startSleep) {
      const rangeStart = Math.min(startSleep, sleepIndex);
      const rangeEnd = Math.max(startSleep, sleepIndex);
      const newRange = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        newRange.push(i);
      }

      if (
        selectedSleepRange.length > 0 &&
        newRange.every((m) => selectedSleepRange.includes(m))
      ) {
        // update existing range
        setSelectedSleepRange(newRange);
      } else {
        // add new range to existing range
        setSelectedSleepRange([...selectedSleepRange, ...newRange]);
      }
    }
  };

  const handleShowMoreSleep = useCallback(() => {
    setShowMoreSleep(true);
    setMaxVisibleSleep(16);
  }, []);

  const sleeps = [];
  for (let sleep = 1; sleep <= 16; sleep++) {
    sleeps.push(sleep);
  }

  const [showMoreBaths, setShowMoreBaths] = useState(false);
  const [startBath, setStartBath] = useState<number | null>(null);
  const [selectedBathsRange, setSelectedBathsRange] = useState<number[]>([]);
  const [maxVisibleBaths, setMaxVisibleBaths] = useState(6);

  const handleBathClick = (bathIndex: number) => {
    setSelected(false);

    if (startBath === null) {
      // start new range
      setStartBath(bathIndex);
      setSelectedBathsRange([bathIndex]);
    } else {
      // continue existing range
      const endBath = bathIndex;
      const rangeStart = Math.min(startBath, endBath);
      const rangeEnd = Math.max(startBath, endBath);
      const selectedBathsRange: SetStateAction<number[]> = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        selectedBathsRange.push(i);
      }

      if (selectedBathsRange.every((m) => selectedBathsRange.includes(m))) {
        // update existing range
        setSelectedBathsRange(selectedBathsRange);
      } else {
        // create new range
        setSelectedBathsRange(selectedBathsRange);
        setStartBath(null);
      }
    }

    if (startBath !== null && bathIndex !== startBath) {
      const rangeStart = Math.min(startBath, bathIndex);
      const rangeEnd = Math.max(startBath, bathIndex);
      const newRange = [];
      for (let i = rangeStart; i <= rangeEnd; i++) {
        newRange.push(i);
      }

      if (
        selectedBathsRange.length > 0 &&
        newRange.every((m) => selectedBathsRange.includes(m))
      ) {
        // update existing range
        setSelectedBathsRange(newRange);
      } else {
        // add new range to existing range
        setSelectedBathsRange([...selectedBathsRange, ...newRange]);
      }
    }
  };

  const handleShowMoreBaths = useCallback(() => {
    setShowMoreBaths(true);
    setMaxVisibleBaths(13);
  }, []);

  const baths = [];
  for (let bath = 1; bath <= 16; bath++) {
    baths.push(bath);
  }

  return (
    <StyledRegStep1 className={className}>
      <div className="">
        <div className="Reg__head">
          <h1 className="Font_32_120 lg:Font_26_120_600 sm:Font_22_120_500">
            Укажите общую площадь недвижимости
          </h1>
        </div>

        <div className="Reg__monthsContainer">
          <div className="Reg__months">
            <RequestButton onClick={handleSelect} active={selected}>
              Неважно
            </RequestButton>
            {[...Array(18)].map((_, index) => {
              const label = index + 1;

              if (index >= maxVisibleRooms) {
                return null;
              }

              const isActive = selectedRange.includes(index);
              const isWithinRange =
                selectedRange.length === 2 &&
                index >= selectedRange[0] &&
                index <= selectedRange[1];
              return (
                <RequestButton
                  key={`${index}`}
                  onClick={() => handleRoomClick(index)}
                  active={isActive}
                  ranged={isWithinRange}
                >
                  {label}
                </RequestButton>
              );
            })}
            {maxVisibleRooms < 18 && (
              <RequestButton
                onClick={handleShowMore}
                className="ShowMoreButton Color_blue_primary"
              >
                Ещё {rooms.length - maxVisibleRooms}
              </RequestButton>
            )}
          </div>
        </div>

        <div>
          <h2>Спальня</h2>
          <div className="Reg__monthsContainer">
            <div className="Reg__months">
              {[...Array(16)].map((_, index) => {
                const label = index + "";

                if (index >= maxVisibleSleep) {
                  return null;
                }

                const isActive = selectedSleepRange.includes(index);
                const isWithinRange =
                  selectedSleepRange.length === 2 &&
                  index >= selectedSleepRange[0] &&
                  index <= selectedSleepRange[1];
                return (
                  <RequestButton
                    key={`${index}`}
                    onClick={() => handleSleepClick(index)}
                    active={isActive}
                    ranged={isWithinRange}
                  >
                    {label}
                  </RequestButton>
                );
              })}
              {maxVisibleSleep < 16 && (
                <RequestButton
                  onClick={handleShowMoreSleep}
                  className="ShowMoreButton Color_blue_primary"
                >
                  Ещё {sleeps.length - maxVisibleSleep}
                </RequestButton>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2>Санузел</h2>
          <div className="Reg__monthsContainer">
            <div className="Reg__months">
              {[...Array(16)].map((_, index) => {
                const label = index + 1;
                if (index >= maxVisibleBaths) {
                  return null;
                }
                const isActive = selectedBathsRange.includes(index);
                const isWithinRange =
                  selectedBathsRange.length === 2 &&
                  index >= selectedBathsRange[0] &&
                  index <= selectedBathsRange[1];
                return (
                  <RequestButton
                    key={`${index}`}
                    onClick={() => handleBathClick(index)}
                    active={isActive}
                    ranged={isWithinRange}
                  >
                    {label}
                  </RequestButton>
                );
              })}
              {maxVisibleBaths < 16 && (
                <RequestButton
                  onClick={handleShowMoreBaths}
                  className="ShowMoreButton Color_blue_primary"
                >
                  Ещё {baths.length - maxVisibleBaths}
                </RequestButton>
              )}
            </div>
          </div>
        </div>

        <div className="Reg__progressBar"></div>
        <div className="Reg__footer">
          <div className="Reg__footerBack">
            <Button
              secondary
              href="/customer/create-step-4"
              className="Reg__goBackButton"
            >
              Назад
            </Button>
            <Button
              secondary
              href="/customer/create-step-4"
              leftIcon={<ArrowIcon />}
              className="Reg__goBackButtonMobile"
            ></Button>
            <div className="Reg__footerSteps">
              <span className="Font_16_24">Шаг</span>
              <span className="Reg__footerCount Font_16_140 Color_blue_primary">
                6
              </span>
              <span className="Font_16_140">/ 11</span>
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
              href="/customer/create-step-6"
            >
              Далее
            </Button>
          </div>
        </div>
      </div>
    </StyledRegStep1>
  );
};

const StyledRegStep1 = styled.section`
  background: #fff;
  border-radius: 10px;

  .Reg__head {
    padding: 30px 30px 18px 30px;
    border: 2px solid #f1f7ff;
  }

  .Reg__radioButtons {
    padding-left: 30px;
    margin-top: 42px;
    margin-left: -30px;
    display: flex;
    align-items: center;

    input {
      margin-left: 30px;
    }
  }

  .Reg__options {
    padding: 41px 30px 30px;
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

  .Reg__monthsContainer {
    padding: 30px;
  }

  .Reg__months {
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
      width: 39%;
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

  @media (max-width: 960px) {
    .Reg__options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: max-content;
      grid-gap: 20px;
      margin-left: 0;
      margin-top: 0;
      height: 797px;
      button {
        max-width: unset;
        width: 100%;
        margin-left: 0;
        margin-top: 0;
      }
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
    .Reg__head {
      padding: 20px;
    }

    .Reg__options {
      padding: 38px 20px;
      display: flex;
      flex-direction: column;
      grid-gap: 12px;
      height: 566px;
      button {
      }
    }

    .Reg__link {
      padding: 5px 20px;
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
  }
`;

export { CreateStep6 };
