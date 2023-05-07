import { useCallback, useState } from "react";
import styled from "styled-components";
import { FeaturesDesktop, FeaturesMobile } from "./components";

interface FeatureProps {
  className?: string;
}

const options = [
  {
    optionName: "Биржа заявок",
    image1: "/images/miraden/1.png",
    image2: "/images/miraden/2.png",
    icon: "/images/miraden/1.svg",
    iconActive: "/images/miraden/1active.svg",
    text: "Реальные заявки на покупку или аренду недвижимости из разных стран мира",
    id: 1,
  },
  {
    optionName: "Независимые продавцы",
    image1: "/images/miraden/3.png",
    image2: "/images/miraden/4.png",
    icon: "/images/miraden/2.svg",
    iconActive: "/images/miraden/2active.svg",
    text: "Собственники, риелторы и застройщики, готовые сделать персональное предложение",
    id: 2,
  },
  {
    optionName: "Каталог недвижимости",
    image1: "/images/miraden/5.png",
    image2: "/images/miraden/6.png",
    icon: "/images/miraden/3.svg",
    iconActive: "/images/miraden/3active.svg",
    text: "Персональный каталог объектов, собранный из предложений продавцов в реальном времени",
    id: 3,
  },
  {
    optionName: "Партнерские сделки",
    image1: "/images/miraden/7.png",
    image2: "/images/miraden/8.png",
    icon: "/images/miraden/4.svg",
    iconActive: "/images/miraden/4active.svg",
    text: "Удобный сервис для прозрачной работы между застройщиками и риелторами",
    id: 4,
  },
];

const Features = ({ className }: FeatureProps) => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);

  const createHandleToggleActiveOptionIndex = useCallback(
    (name: string) => () => {
      const activeOptionIndex = options.findIndex(
        (option) => option.optionName === name
      );
      setActiveOptionIndex(activeOptionIndex);
    },
    []
  );

  const activeOption = options[activeOptionIndex];

  return (
    <StyledFeatures>
      <FeaturesDesktop className="Features__desktop" />
      <FeaturesMobile className="Features__mobile" />
    </StyledFeatures>
  );
};

const StyledFeatures = styled.section`
  padding-top: 150px;
  padding-bottom: 150px;

  .Features__mobile {
    display: none;
  }

  @media (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 100px;

    .Features__desktop {
      display: none;
    }

    .Features__mobile {
      display: flex;
    }
  }

  @media (max-width: 576px) {
    padding-top: 100px;
    padding-bottom: 35px;
  }
`;

export { Features };
