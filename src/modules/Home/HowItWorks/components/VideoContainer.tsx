import cn from "classnames";
import { useState } from "react";
import styled from "styled-components";
import { VideoFrame } from "./VideoFrame";
import { VideoPlaceholder } from "./VideoPlaceholdet";

interface Props {
  videoLink: string;
}

const VideoContainer = ({ videoLink }: Props) => {
  const [isShowIframe, setIsShowIframe] = useState(false);

  const handleClick = () => {
    setIsShowIframe((current) => !current);
  };

  return (
    <StyledVideoContainer>
      <div onClick={handleClick} className={cn("VideoContainer")}>
        {isShowIframe ? (
          <VideoFrame videoLink={videoLink} />
        ) : (
          <VideoPlaceholder image="/images/overlay.jpg" />
        )}
      </div>
    </StyledVideoContainer>
  );
};

const StyledVideoContainer = styled.div`
  margin-top: 80px;

  .VideoContainer {
    border-radius: 10px;
    overflow: hidden;
  }
`;

export { VideoContainer };
