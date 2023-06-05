import styled from "styled-components";
import { Objects } from "./Object/Object";

const ObjectsLayout = () => {
  return (
    <StyledObjectsLayout className="ContainerFull">
      <Objects  />
    </StyledObjectsLayout>
  );
};

const StyledObjectsLayout = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { ObjectsLayout };
