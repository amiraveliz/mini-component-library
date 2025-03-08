import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <SelectWrapper
        textLength={displayedValue.length + 7}
        value={value}
        onChange={onChange}
      >
        {children}
      </SelectWrapper>
      <IconWrapper id="chevron-down" size="16" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  pointer-events: none; /* Prevent interaction */
  color: ${COLORS.gray700};
`;

const SelectWrapper = styled.select`
  width: ${(props) => props.textLength}ch; /* Dynamically adjust width */
  min-width: 100px; /* Set a minimum width */
  max-width: 250px; /* Prevent it from growing too much */
  padding: 12px 16px;
  padding-right: 52px; /* Ensure space for the icon */
  font-size: 16px;
  border-radius: 8px;
  border-color: transparent;
  appearance: none; /* Remove default styles */
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
