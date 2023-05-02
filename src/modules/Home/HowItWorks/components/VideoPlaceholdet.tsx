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
        <Image src={image} fill alt="" />
      </div>
    </StyledPlaceHolder>
  );
};

const StyledPlaceHolder = styled.div`
  position: relative;

  .PlayIcon {
    position: absolute;
    transform: translateX(50, -50%);
    transform: translateY(50, -50%);
    z-index: 10;
  }

  .PlaceHolder__background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0;
    transition: 0.15s ease-in;
  }

  .Placeholder:hover {
    cursor: pointer;

    .PlaceHolder__background {
      opacity: 0.3;
    }
  }
`;

export { VideoPlaceholder };
