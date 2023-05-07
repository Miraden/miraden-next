import { Button, RequestButton } from "@/components/ui";
import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { ApplicationsCard } from "./components/ApplicationsCard";

const applications = [
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Черногория",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Черногория",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Таиланд / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Таиланд / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Испания / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Испания",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Черногория",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Черногория",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Таиланд / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Таиланд / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Кипр / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Испания / Лимассол / Все районы",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
  {
    title: "Куплю 3-х комнатную квартиру на Кипре",
    location: "Испания",
    year: 2022,
    square: 294,
    sleeps: 6,
    baths: 2,
    price: "158 000 – 230 000",
  },
];

const Applications = () => {
  const [location, setLocation] = useState("Кипр");

  const filteredApplications = applications.filter((app) =>
    location ? app.location.includes(location) : true
  );

  const handleButtonClick = (location: SetStateAction<string>) => {
    setLocation(location);
  };

  const hasSpainLocation = applications.some((app) =>
    app.location.includes("Испания")
  );

  const hasCyprusLocation = applications.some((app) =>
    app.location.includes("Кипр")
  );
  const hasThailandLocation = applications.some((app) =>
    app.location.includes("Таиланд")
  );
  const hasMontenegroLocation = applications.some((app) =>
    app.location.includes("Черногория")
  );

  const renderApplications = (apps: any[]) => {
    return apps.map((app) => (
      <ApplicationsCard
        className="Card"
        key={app.title}
        application={app}
        title={app.title}
        year={app.year}
        sleeps={app.sleeps}
        square={app.square}
        baths={app.baths}
        price={app.price}
        location={app.location}
      />
    ));
  };

  return (
    <StyledApplications>
      <div className="Container">
        <div className="Applications__head">
          <h2 className="Font_44_120">
            Новые <mark className="Color_blue_primary">заявки</mark>
          </h2>
          <div className="Applications__tabs">
            {hasCyprusLocation && (
              <RequestButton
                onClick={() => handleButtonClick("Кипр")}
                active={location === "Кипр"}
              >
                Кипр
              </RequestButton>
            )}
            {hasMontenegroLocation && (
              <RequestButton
                onClick={() => handleButtonClick("Черногория")}
                active={location === "Черногория"}
              >
                Черногория
              </RequestButton>
            )}

            {hasThailandLocation && (
              <RequestButton
                onClick={() => handleButtonClick("Таиланд")}
                active={location === "Таиланд"}
              >
                Таиланд
              </RequestButton>
            )}

            {hasSpainLocation && (
              <RequestButton
                onClick={() => setLocation("Испания")}
                active={location === "Испания"}
              >
                Испания
              </RequestButton>
            )}
          </div>
        </div>

        <div className="Applications__list">
          {renderApplications(filteredApplications).slice(0, 9)}
        </div>
        <div className="Applications__listTablet sm:FullBleed">
          {renderApplications(filteredApplications).slice(0, 6)}
        </div>
        <div className="Applications__openMoreContainer">
          <Button className="Applications__openMore">Открыть еще 2 543</Button>
        </div>
      </div>
    </StyledApplications>
  );
};

const StyledApplications = styled.section`
  padding-top: 66px;
  padding-bottom: 75px;

  .Applications__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Applications__tabs {
    display: flex;
    button:not(:first-child) {
      margin-left: 10px;
    }

    button {
      padding: 10px 20px;
      width: fit-content;
    }
  }

  .Applications__list,
  .Applications__listTablet,
  .Applications__openMoreContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
  }

  .Applications__listTablet {
    display: none;
  }

  .Applications__openMoreContainer {
    margin-top: 0;
  }

  .Applications__openMore {
    width: 100%;
    grid-column-start: 2;
    margin: 0 auto;
    margin-top: 30px;
  }

  @media (max-width: 1280px) {
    .Applications__list,
    .Applications__listTablet {
      grid-gap: 12px;
    }
  }

  @media (max-width: 1024px) {
    padding-bottom: 100px;
    .Applications__head {
      flex-direction: column;
      overflow-x: scroll;
      align-items: flex-start;

      button {
        padding: 10px 15px;
      }
    }

    .Applications__tabs {
      margin-top: 20px;
    }

    .Applications__list {
      display: none;
    }

    .Applications__listTablet,
    .Applications__openMoreContainer {
      margin-top: 40px;
      display: grid;
      grid-gap: 12px;
      grid-template-columns: repeat(4, 1fr);
    }

    .Applications__openMoreContainer {
      margin-top: 0;

      .Applications__openMore {
        margin-top: 22px;
      }
    }

    .Card {
      grid-column: span 2;
    }

    .Applications__openMore {
      grid-column: 2 / span 2;
    }
  }

  @media (max-width: 720px) {
    .Applications__listTablet,
    .Applications__openMoreContainer {
      display: flex;
      flex-direction: column;
    }
  }
`;

export { Applications };
