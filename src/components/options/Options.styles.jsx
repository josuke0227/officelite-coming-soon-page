import styled from "styled-components";

import { colorSecondaryLight } from "../../styled-components/constants/colors";

export const OptionsContainer = styled.div`
  border: 1px solid ${colorSecondaryLight};
  border-radius: 8px;
  display: ${(props) => (props.showOptions ? "block" : "none")};
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 105%;
`;
