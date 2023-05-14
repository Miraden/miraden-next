import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: ReactNode;
}

const PricingDropdown = ({ className, children }: Props) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <StyledPricingDropdown>
      <div>Dropdown</div>
    </StyledPricingDropdown>
  );
};

const StyledPricingDropdown = styled.div``;

export { PricingDropdown };
