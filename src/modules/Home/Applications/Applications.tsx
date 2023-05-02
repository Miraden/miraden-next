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
    return apps
      .map((app) => (
        <ApplicationsCard
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
      ))
      .slice(0, 9);
  };

  return (
    <StyledApplications>
      <div className="Container">
        <div className="Applications__head">
          <h2 className="Font_44_120">
            Заявки за <mark className="Color_blue_primary">сегодня</mark>
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
          {renderApplications(filteredApplications)}
        </div>

        <Button className="Applications__openMore">Открыть еще 2 543</Button>
      </div>
    </StyledApplications>
  );
};

const StyledApplications = styled.section`
  padding-bottom: 75px;

  .Applications__head {
    display: flex;
    justify-content: space-between;
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

  .Applications__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
  }

  .Applications__openMore {
    margin: 0 auto;
    margin-top: 30px;
  }
`;

export { Applications };
