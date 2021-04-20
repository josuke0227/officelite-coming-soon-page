import React from "react";

import chevronUrl from "../../images/icons/chevron-down.svg";

import { ChevronTransition } from "./ChevronTransition";

import { Transition } from "react-transition-group";

const ChevronIcon = ({ showOptions }) => {
  const { duration, defaultStyle, transitionStyle } = new ChevronTransition();

  return (
    <Transition in={showOptions} timeout={duration}>
      {(state) => (
        <img
          src={chevronUrl}
          alt=""
          style={{
            ...defaultStyle,
            ...transitionStyle[state],
          }}
        />
      )}
    </Transition>
  );
};

export default ChevronIcon;
