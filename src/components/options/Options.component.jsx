import React from "react";

import { Transition } from "react-transition-group";

import { OptionsContainer } from "./Options.styles";
import { OptionsTransition } from "./OptionsTransition";

const Options = ({ showOptions, children }) => {
  const { duration, defaultStyle, transitionStyle } = new OptionsTransition();

  return (
    <Transition in={showOptions} timeout={duration}>
      {(state) => (
        <OptionsContainer
          showOptions={showOptions}
          style={{ ...defaultStyle, ...transitionStyle[state] }}
        >
          {children}
        </OptionsContainer>
      )}
    </Transition>
  );
};

export default Options;
