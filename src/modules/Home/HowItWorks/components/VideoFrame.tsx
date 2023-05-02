import styled from "styled-components";

interface Props {
  videoLink: string;
}

const VideoFrame = ({ videoLink }: Props) => {
  return (
    <StyledVideoFrame>
      <iframe
        className="VideoFrame__iframe"
        src={`${videoLink}?autoplay=1`}
        allowFullScreen={true}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </StyledVideoFrame>
  );
};

const StyledVideoFrame = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  .VideoFrame__iframe {
    position: relative;
    z-index: 10;
    width: 100%;
    background-color: #000;
    max-width: 1170px;

    /* aspect-ratio: 16 / 9; */
  }
`;

export { VideoFrame };
