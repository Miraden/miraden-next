import styled from "styled-components";
import { Favourites } from "./Favourites/Favourites";

const FavouritesFullLayout = () => {
  return (
    <StyledFavouritesLayout className="ContainerFull">
      <Favourites className="Application" />
    </StyledFavouritesLayout>
  );
};

const StyledFavouritesLayout = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { FavouritesFullLayout };
