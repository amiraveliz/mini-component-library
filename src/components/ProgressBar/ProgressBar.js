/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

//value 0 to 100
//size small medium large
const ProgressBar = ({ value = 50, size = "medium" }) => {
  const containerStyles = ContainerStyles[size];
  const progressStyles = ProgressStyles[size];
  return (
    <>
      <ProgressWrapper
        max="100"
        value={value}
        size={size}
        containerStyles={containerStyles}
        progressStyles={progressStyles}
      />
      <VisuallyHidden>Progressbar {value} from 100</VisuallyHidden>
    </>
  );
};

const ContainerStyles = {
  large: {
    padding: "4px",
    height: "24px",
  },
  medium: {
    padding: "0px",
    height: "12px",
  },
  small: {
    padding: "0px",
    height: "8px",
  },
};

const ProgressStyles = {
  large: {
    height: "16px",
  },
  medium: {
    height: "12px",
  },
  small: {
    height: "8px",
  },
};

const ProgressWrapper = styled.progress`
  ${(props) => props.containerStyles}
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  &[value] {
    width: ${(props) => props.width};
    appearance: none;
    ${(props) => props.progressStyles}
    ::-webkit-progress-bar {
      border-radius: 4px;
      background-color: transparent;
    }
    ::-webkit-progress-value {
      border-radius: 4px;
      border-top-right-radius: ${(props) => (props.value < 100 ? "0" : "4px")};
      border-bottom-right-radius: ${(props) =>
        props.value < 100 ? "0" : "4px"};
      background-color: ${COLORS.primary};
    }
  }
`;

export default ProgressBar;
