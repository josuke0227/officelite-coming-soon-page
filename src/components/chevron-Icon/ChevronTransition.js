export class ChevronTransition {
  duration = 180;

  defaultStyle = {
    transform: "rotateX(0deg)",
    transition: `transform ${this.duration}ms ease-in`,
  };

  transitionStyle = {
    entering: { transform: "rotateX(180deg)" },
    entered: { transform: "rotateX(180deg)" },
    exiting: { transform: "rotateX(0deg)" },
    exited: { transform: "rotateX(0deg)" },
  };
}
