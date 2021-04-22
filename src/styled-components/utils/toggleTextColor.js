import { colorPrimary } from "../constants/colors";

export const toggleTextColor = (props, defaultColor = colorPrimary) => {
  return props.highlighted ? "#fff" : defaultColor;
};
