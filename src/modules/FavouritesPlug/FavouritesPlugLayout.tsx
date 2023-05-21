import styled from "styled-components";
import { FavouritesPlug } from "./Favourites/FavouritesPlug";

const FavouritesPlugLayout = () => {
  return (
    <StyledFavouritesLayout className="ContainerFull">
      <FavouritesPlug className="Application" />
    </StyledFavouritesLayout>
  );
};

const StyledFavouritesLayout = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { FavouritesPlugLayout };
