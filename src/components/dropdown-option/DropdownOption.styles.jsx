import styled from "styled-components";
import { DropdownBox, SelectedValueWrapper } from "../dropdown/Dropdown.styles";

export const OptionWrapper = styled(DropdownBox)`
  margin: 0 24px;
  width: auto;

  &: first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
  }
`;

export const OptionTextWrapper = styled(SelectedValueWrapper)`
  margin-left: 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;
