import { RequestButton } from "@/components/ui";
import { useState } from "react";
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
];

const Applications = () => {
  const [isCustomerTab, setIsCustomerTab] = useState(true);

  const toggleTab = () => {
    setIsCustomerTab((prevTab) => !prevTab);
  };

  return (
    <StyledApplications>
      <div className="Container">
        <div className="Applications__head">
          <h2 className="Font_44_120">
            Заявки за <mark className="Color_blue_primary">сегодня</mark>
          </h2>
          <div className="Applications__tabs">
            <RequestButton
              onClick={toggleTab}
              active={isCustomerTab}
              className="Test Font_16_20"
            >
              Кипр
            </RequestButton>
            <RequestButton onClick={toggleTab} active={!isCustomerTab}>
              Черногория
            </RequestButton>
          </div>
        </div>
        <div>
          <ul className="Applications__list">
            {applications.map((application, index) => (
              <li key={index}>
                <ApplicationsCard
                  title={application.title}
                  location={application.location}
                  year={application.year}
                  square={application.square}
                  sleeps={application.sleeps}
                  baths={application.baths}
                  price={application.price}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledApplications>
  );
};

const StyledApplications = styled.section`
  .Applications__head {
    display: flex;
    justify-content: space-between;
  }

  .Applications__tabs {
    display: flex;
    button:not(:first-child) {
      margin-left: 10px;
    }
  }

  .Applications__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
  }
`;

export { Applications };
