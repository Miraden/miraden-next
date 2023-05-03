import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";

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

const FeaturesDesktop = ({ className }: FeatureProps) => {
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
    <StyledFeaturesDesktop className={className}>
      <div className="Container">
        <div className="Features">
          <div className="Features__options">
            <h2 className="Font_44_120">Miraden — это</h2>
            <div className="Features__tabs">
              {options.map(({ id, optionName, icon, iconActive, text }) => (
                <button
                  onClick={createHandleToggleActiveOptionIndex(optionName)}
                  key={id}
                  className={cn("Features__tabButton", {
                    Features__tabButtonActive:
                      optionName === activeOption.optionName,
                    Color_tertiary: optionName !== activeOption.optionName,
                  })}
                >
                  <div className="Features__tabHead">
                    <div
                      className={cn("Features__iconContainer", {
                        IconContainer: optionName == activeOption.optionName,
                      })}
                    >
                      {optionName == activeOption.optionName ? (
                        <Image
                          src={iconActive}
                          alt=""
                          width={28}
                          height={28}
                          priority
                        />
                      ) : (
                        <Image
                          src={icon}
                          alt=""
                          width={28}
                          height={28}
                          priority
                        />
                      )}
                    </div>
                    <h3
                      className={cn("Font_28_120 ", {
                        Color_blue_primary:
                          optionName == activeOption.optionName,
                      })}
                    >
                      {optionName}
                    </h3>
                  </div>

                  {optionName == activeOption.optionName && (
                    <p className="Features__headDescription Font_18_150">
                      {text}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
          <ul className="Features__TabsList">
            {options.map(({ id, image1, image2 }, index) => (
              <li
                key={id}
                className={cn("Features__tabContent", {
                  Features__tabContentActive: index === activeOptionIndex,
                })}
              >
                <div className="Features__imagesContainer">
                  <Image
                    src={image1}
                    alt=""
                    width={312}
                    height={655}
                    priority
                    className="Features__image1"
                  />
                  <Image
                    src={image2}
                    alt=""
                    width={312}
                    height={655}
                    priority
                    className="Features__image2"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledFeaturesDesktop>
  );
};

const StyledFeaturesDesktop = styled.section`
  .Features {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 30px;
  }

  .Features__options {
    grid-column: 1 / span 6;
  }

  .Features__tabs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
    button:not(:first-child) {
      margin-top: 20px;
    }
  }

  .Features__tabButton {
    background: #f5f7f9;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    text-align: start;
  }

  .Features__tabHead {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 15px;
    }
  }

  .Features__iconContainer {
    padding: 15px;
  }

  .IconContainer {
    background: #4e6af3;
    padding: 15px;
    border-radius: 50%;
  }

  .Features__headDescription {
    margin-left: 73px;
  }

  .Features__TabsList {
    grid-column: 8 / span 5;
    img {
      background: #eef1f5;
      box-shadow: 0px 2px 13px rgba(34, 49, 77, 0.05),
        20px 20px 50px rgba(34, 49, 77, 0.2);
      border-radius: 25px;
    }
  }

  .Features__tabContent {
    position: absolute;
    display: none;
    opacity: 0;
    max-width: 608px;
    transition: display 0.2s;
  }

  .Features__tabContentActive {
    position: static;
    display: block;
    opacity: 1;
    transition: display 0.2s;
  }

  .Features__tabContentActiveImage {
    animation: fade-in 200ms;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .Features__imagesContainer {
    position: relative;
    height: 655px;
  }

  .Features__tabContent:nth-of-type(2n) {
    .Features__image1 {
      left: 0;
    }

    .Features__image2 {
      right: 0;
    }
  }

  .Features__image1 {
    position: absolute;
    z-index: 20;
    right: 0;
  }

  .Features__image2 {
    position: absolute;
    top: 69px;
  }
`;

export { FeaturesDesktop };
