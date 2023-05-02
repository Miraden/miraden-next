import { PlayIcon } from "@/icons";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  image: string;
}

const VideoPlaceholder: FC<Props> = ({ image }) => {
  return (
    <StyledPlaceHolder>
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
    </StyledPlaceHolder>
  );
};

const StyledPlaceHolder = styled.div`
  position: relative;

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
    object-fit: cover;
  }

  @media (max-width: 576px) {
    .PlayIcon {
      width: 60px;
    }

    .Placeholder__image {
      height: 380px;
    }
  }
`;

export { VideoPlaceholder };
