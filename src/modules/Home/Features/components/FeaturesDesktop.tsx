import { CatalogIcon, CommunityIcon, DealsIcon, HomeIcon } from "@/icons";
import cn from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";

interface FeatureProps {
  className?: string;
}

const options = [
  {
    optionName: "Поиск недвижимости",
    image1: "/images/miraden/1.png",
    image2: "/images/miraden/2.png",
    icon: <HomeIcon width={28} height={28} />,
    text: "Персональный каталог объектов, собранный из предложений продавцов в реальном времени",
    id: 1,
  },
  {
    optionName: "Биржа заявок",
    image1: "/images/miraden/3.png",
    image2: "/images/miraden/4.png",
    icon: <CatalogIcon width={28} height={28} />,
    text: "Реальные заявки на покупку или аренду недвижимости из разных стран мира",
    id: 2,
  },
  {
    optionName: "Независимые продавцы",
    image1: "/images/miraden/5.png",
    image2: "/images/miraden/6.png",
    icon: <CommunityIcon width={28} height={28} />,
    text: "Собственники, риелторы и застройщики, готовые сделать персональное предложение",
    id: 3,
  },
  {
    optionName: "Партнерские сделки",
    image1: "/images/miraden/7.png",
    image2: "/images/miraden/8.png",
    icon: <DealsIcon width={28} height={28} />,
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
            <h2 className="Font_44_120 Color_primary">Miraden — это</h2>
            <div className="Features__tabs">
              {options.map(({ id, optionName, icon, text }) => (
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
                      {icon}
                    </div>
                    <h3
                      className={cn("Font_28_120 Color_primary", {
                        Color_blue_primary:
                          optionName == activeOption.optionName,
                      })}
                    >
                      {optionName}
                    </h3>
                  </div>

                  <p
                    className={cn(
                      "Features__headDescription Font_18_150 Color_grey_dark",
                      {
                        Features__headDescriptionActive:
                          optionName == activeOption.optionName,
                      }
                    )}
                  >
                    {text}
                  </p>
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

    :hover {
      svg {
        path {
          fill: #4e6af3;
        }
      }
      h3 {
        color: #4e6af3;
      }
    }
  }

  .Features__tabButtonActive {
    background: #fff;
    svg {
      path {
        fill: #fff !important;
      }
    }
    :hover {
      svg {
        path {
          fill: #fff;
        }
      }
    }
  }

  .Features__tabHead {
    display: flex;
    align-items: center;
    transition: 0.15s ease;

    h3 {
      transition: 0.15s ease;

      margin-left: 15px;
    }
  }

  .Features__iconContainer {
    display: flex;
    padding: 15px;
  }

  .IconContainer {
    background: #4e6af3;
    padding: 15px;
    border-radius: 50%;
  }

  .Features__headDescription {
    display: none;
  }

  .Features__headDescriptionActive {
    display: flex;
    margin-left: 73px;
    animation: fade-in 300ms;
  }

  .Features__TabsList {
    grid-column: 8 / span 5;
    img {
      background: #eef1f5;
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

  .Features__tabContentActive {
    animation: fade-in 300ms;
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

  .Features__image1 {
    box-shadow: 0px 2px 13px rgba(34, 49, 77, 0.05),
      20px 20px 50px rgba(34, 49, 77, 0.2);
  }

  .Features__image2 {
    box-shadow: 0px 2px 13px rgba(34, 49, 77, 0.05),
      10px 20px 50px rgba(34, 49, 77, 0.2);
  }

  .Features__tabContent:nth-of-type(2n) {
    .Features__image1 {
      right: 0;
      box-shadow: -20px 20px 50px rgba(34, 49, 77, 0.2),
        0px -2px 13px rgba(34, 49, 77, 0.05);
    }

    .Features__image2 {
      left: 0;
      box-shadow: 0px -2px 13px rgba(34, 49, 77, 0.05),
        -5px 20px 50px rgba(34, 49, 77, 0.2);
    }
  }

  .Features__image1 {
    position: absolute;
    z-index: 20;
  }

  .Features__image2 {
    position: absolute;
    top: 69px;
    right: 0;
  }
`;

export { FeaturesDesktop };
