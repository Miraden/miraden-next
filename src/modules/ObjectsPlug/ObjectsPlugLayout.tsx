import styled from "styled-components";
import { ObjectPlug } from "./Object/ObjectPlug";

const ObjectsLayoutPlug = () => {
  return (
    <StyledObjectsLayoutPlug className="ContainerFull">
      <ObjectPlug className="Application" />
    </StyledObjectsLayoutPlug>
  );
};

const StyledObjectsLayoutPlug = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { ObjectsLayoutPlug };
