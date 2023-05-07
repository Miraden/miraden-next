import cn from "classnames";
import { ReactNode } from "react";
import styled from "styled-components";

interface StickerProps {
  className?: string;
  theme?: "red" | "blue" | "green" | "black" | "grey";
  tag?: boolean;
  children?: ReactNode;
  withNumber?: boolean;
}

const Sticker = ({
  className,
  theme,
  tag,
  children,
  withNumber,
}: StickerProps) => {
  return (
    <StyledSticker className={className}>
      <div
        className={cn("Font_14_16", {
          Sticker__red: theme == "red",
          Sticker__green: theme == "green",
          Sticker__blue: theme == "blue",
          Sticker__black: theme == "black",
          Sticker__grey: theme == "grey",
          Sticker__tag: tag,
          Sticker__withNumber: withNumber,
        })}
      >
        {children}
      </div>
    </StyledSticker>
  );
};

const StyledSticker = styled.div`
  color: #fff;
  width: fit-content;

  .Sticker__withNumber {
    padding: 4px 10px !important;
  }

  .Sticker__tag {
    padding: 7px 10px !important;
    border-radius: 10px !important;
    font-weight: 600;
  }

  .Sticker__red {
    background: #f34942;
    border-radius: 24px;
    padding: 1px 7px;
    color: #fff;
  }

  .Sticker__green {
    background: #eafff3;
    padding: 1px 7px;
    border-radius: 24px;
    color: #0ab258;
  }

  .Sticker__grey {
    background: #f1f7ff;
    padding: 1px 7px;
    border-radius: 24px;
    color: #7786a5;
  }

  .Sticker__blue {
    background: #4e6af3;
    padding: 1px 7px;
    border-radius: 24px;
  }

  .Sticker__black {
    background: #3a465d;
    padding: 1px 7px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.07em;
    border-radius: 24px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export { Sticker };
