import styled from "styled-components";

interface Props {
  videoLink: string;
}

const VideoFrame = ({ videoLink }: Props) => {
  return (
    <StyledVideoFrame>
      <iframe
        className="[ VideoFrame__iframe relative z-10 w-full aspect-video bg-[#000000] ] "
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

  .VideoFrame__iframe {
    position: relative;
    z-index: 10;
    width: 100%;
    background-color: #000;
  }
`;

export { VideoFrame };
