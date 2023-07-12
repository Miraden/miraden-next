import { CatalogIcon, CommunityIcon, DealsIcon, HomeIcon } from "@/icons";
import cn from "classnames";
import styled from "styled-components";
import {HomeIcon24} from "@/icons/HomeIcon";
import Image from "next/image";
import {theme} from "../../../../../styles/tokens";

interface FeatureProps {
  className?: string;
}

const options = [
  {
    label: "search",
    optionName: "Поиск недвижимости",
    image1: "/images/miraden/1.png",
    image2: "/images/miraden/2.png",
    icon: <HomeIcon24 />,
    text: "Персональный каталог объектов, собранный из предложений продавцов в реальном времени",
    id: 1,
  },
  {
    label: "leads",
    optionName: "Биржа заявок",
    image1: "/images/miraden/3.png",
    image2: "/images/miraden/4.png",
    icon: <CatalogIcon width={28} height={28} />,
    text: "Реальные заявки на покупку или аренду недвижимости из разных стран мира",
    id: 2,
  },
  {
    label: "sellers",
    optionName: "Независимые продавцы",
    image1: "/images/miraden/5.png",
    image2: "/images/miraden/6.png",
    icon: <CommunityIcon width={28} height={28} />,
    text: "Собственники, риелторы и застройщики, готовые сделать персональное предложение",
    id: 3,
  },
  {
    label: "service",
    optionName: "Партнерские сделки",
    image1: "/images/miraden/7.png",
    image2: "/images/miraden/8.png",
    icon: <DealsIcon width={28} height={28} />,
    text: "Удобный сервис для прозрачной работы между застройщиками и риелторами",
    id: 4,
  },
];
const FeaturesMobile = ({ className }: FeatureProps) => {
  return (
    <StyledFeaturesMobile className={className}>
      <div className="Container">
        <div className="Features">
          <div className="Features__options">
            <h2 className="Font_44_120 sm:Font_26_120 ">Miraden — это</h2>
            <div className="Features__tabs">
              {options.map(({ id, optionName, icon, text, image1, image2, label }) => (
                <button key={id} className={cn("Features__tabButtonActive", label)}>
                  <div className="Features__tabHead">
                    <div
                      className={cn("Features__iconContainer", "IconContainer")}
                    >
                      {icon}
                    </div>
                    <h3
                      className={cn(
                        "Font_28_120 Color_blue_primary sm:Font_18_120_700 Color_primary"
                      )}
                    >
                      {optionName}
                    </h3>
                  </div>

                  <p
                    className={cn(
                      "Features__headDescriptionActive Font_18_150 sm:Font_16_24 Color_grey_dark"
                    )}
                  >
                    {text}
                  </p>

                  <div className="Features__imagesContainer">
                    <Image
                      src={image1}
                      alt=""
                      width={312}
                      height={657}
                      className="Features__image1"
                    />
                    <Image
                      src={image2}
                      alt=""
                      width={312}
                      height={657}
                      className="Features__image2"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledFeaturesMobile>
  );
};

const StyledFeaturesMobile = styled.section`
  .Features__tabButton:nth-of-type(2n) {
    .Features__image1 {
      left: 0;
    }

    .Features__image2 {
      right: 0;
    }
  }

  .Features__tabs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;

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

  .Features__tabButtonActive:nth-of-type(2n) {
    .Features__imagesContainer {
      .Features__image1 {
        right: 0;
        left: unset;
        box-shadow: -20px 20px 50px rgba(34, 49, 77, 0.2),
          0px -2px 13px rgba(34, 49, 77, 0.05);
      }

      .Features__image2 {
        left: 0;
        box-shadow: 0px -2px 13px rgba(34, 49, 77, 0.05),
          -5px 20px 50px rgba(34, 49, 77, 0.2);
      }
    }
  }

  .Features__tabButtonActive {
    padding: 20px 20px 40px 20px;
    background: #fff;
    border-radius: 10px;
    width: 100%;
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
    text-align: start;
  }

  .Features__TabsList {
    img {
      background: #eef1f5;
      border-radius: 25px;
    }
  }

  .Features__tabContentActive {
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
    width: 100%;
    max-width: 470px;
    height: 724px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    img {
      background: #eef1f5;
      box-shadow: 0 2px 13px rgba(34, 49, 77, 0.05),
        20px 20px 50px rgba(34, 49, 77, 0.2);
      border-radius: 25px;
    }
  }

  .Features__image1 {
    position: absolute;
    z-index: 20;
    left: 0;
    padding: 15px;
  }

  .Features__image2 {
    position: absolute;
    top: 69px;
    right: 0;
    padding: 15px;
  }

  @media (min-width: ${theme.breakpoints.mobile.min + "px"}) and (max-width: ${theme.breakpoints.mobile.max + "px"}) {
    .Features__iconContainer {
      padding: 10px;
      svg {
        width: 24px;
        height: 24px;
      }
    }

    .Features__headDescriptionActive {
      margin-top: -8px;
      margin-left: 59px;
      margin-bottom: 34px;
    }

    .Features__tabs {
      margin-top: 20px;

      button:not(:first-child) {
        margin-top: 12px;
      }
    }

    .Features__imagesContainer {
      max-width: 260px;
      height: 427px;
      margin-top: 20px;

      img {
        border-radius: 15px;
        width: 172px;
        height: 358px;
        padding: 10px;
      }
    }
  }

`;

export { FeaturesMobile };
