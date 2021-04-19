export class OptionsTransition {
  duration = 100;

  defaultStyle = {
    opacity: "0",
    transition: `opacity ${this.duration}ms ease-in`,
  };

  transitionStyle = {
    entering: { opacity: "0" },
    entered: { opacity: "1" },
    exiting: { opacity: "1" },
    exited: { opacity: "0" },
  };
}
