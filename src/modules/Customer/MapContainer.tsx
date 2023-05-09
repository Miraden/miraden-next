import { Sort } from "@/components/ui/Sort/Sort";
import { LocationIcon } from "@/icons/LocationIcon";
import styled from "styled-components";

interface Props {
  className?: string;
}

const MapContainer = ({ className }: Props) => {
  return (
    <StyledMapContainer className={className}>
      <div className="MapContainer__sort">
        <Sort />
      </div>
      <div className="MapContainer__range">
        <LocationIcon />
      </div>
    </StyledMapContainer>
  );
};

const StyledMapContainer = styled.div`
  height: 354px;
  background: #f1f7ff;
  position: relative;
  display: flex;

  .MapContainer__range {
    background: #4e6af333;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    place-self: center;
    margin: 0 auto;
    svg {
      align-self: center;
      margin: 0 auto;
    }
  }

  .MapContainer__sort {
    top: 20px;
    right: 34px;
    position: absolute;
  }
`;

export { MapContainer };
