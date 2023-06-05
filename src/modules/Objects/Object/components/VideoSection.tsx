import { RequestButton } from "@/components/ui";
import { PlayIcon } from "@/icons";
import cn from "classnames";
import Image from "next/image";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { Accordion } from "./Accordion";

interface Props {
  videoLink: string;
}

const VideoFrame = ({ videoLink }: Props) => {
  return (
    <div className="">
      <iframe
        className="VideoFrame__iframe"
        src={`${videoLink}?autoplay=1`}
        allowFullScreen={true}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

const VideoPlaceholder = ({ image }: any) => {
  return (
    <div>
      <div className="Placeholder">
        <PlayIcon className="PlayIcon" />
        <div className="PlaceHolder__background" />
        <Image
          src={image}
          width={1170}
          height={500}
          alt=""
          className="Placeholder__image"
        />
      </div>
    </div>
  );
};

const VideoSection = ({ videoLink }: Props) => {
  const [isShowIframe, setIsShowIframe] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(true);

  const [tab, setTab] = useState(1);

  const handleClick = () => {
    setIsShowIframe((current) => !current);
  };

  const handleOpenAccordion = useCallback(() => {
    setOpenAccordion(!openAccordion);
  }, [openAccordion]);

  return (
    <StyledVideoContainer>
      <Accordion
        title="Видео"
        key="Видео"
        expanded={openAccordion}
        onChange={handleOpenAccordion}
      >
        <h2 className="ApartmentInfo__layoutTitle Font_24_120"></h2>

        <div className="VideoSection__tabContainer">
          {tab && (
            <RequestButton onClick={() => setTab(1)} active={tab === 1}>
              Обзор квартиры
            </RequestButton>
          )}
          {tab && (
            <RequestButton onClick={() => setTab(2)} active={tab === 2}>
              Интервью с застройщиком
            </RequestButton>
          )}
          {tab && (
            <RequestButton onClick={() => setTab(3)} active={tab === 3}>
              3D тур
            </RequestButton>
          )}
        </div>

        <div onClick={handleClick} className={cn("VideoContainer")}>
          {isShowIframe ? (
            <VideoFrame videoLink={videoLink} />
          ) : (
            <VideoPlaceholder image="/images/overlay.jpg" />
          )}
        </div>
      </Accordion>
    </StyledVideoContainer>
  );
};

const StyledVideoContainer = styled.div`
  margin-top: 80px;
  display: flex;
  position: relative;
  padding-bottom: 20px;

  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  padding: 30px 20px;
  width: 100%;
  transition: 0.15s ease;
  margin-top: 20px;

  .VideoSection__tabContainer {
    display: flex;
    margin-bottom: 40px;
    gap: 10px;
  }

  .VideoContainer {
    border-radius: 10px;
    overflow: hidden;
  }

  .VideoFrame__iframe {
    position: relative;
    z-index: 10;
    width: 100%;
    background-color: #000;
    max-width: 1170px;
    border-radius: 10px;
    overflow: hidden;
    border: none;
    aspect-ratio: 16 / 9;
  }
  .PlayIcon {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 20;
  }

  .PlaceHolder__background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0;
    transition: 0.15s ease-in;
  }

  .Placeholder {
    position: relative;
  }

  .Placeholder:hover {
    cursor: pointer;

    .PlaceHolder__background {
      opacity: 0.3;
    }
  }

  .Placeholder__image {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    margin-top: 130px;
  }

  @media (max-width: 576px) {
    margin-top: 50px;

    .PlayIcon {
      width: 60px;
    }

    .Placeholder__image {
      height: 380px;
    }
  }
`;

export { VideoSection };
