import React from "react";

class Debounce extends React.Component {
  constructor(props) {
    super(props);
  }

  debounce = (callback, delay) => {
    let interval;

    return (...args) => {
      const context = this;

      clearInterval(interval);

      interval = setTimeout(() => {
        callback();
      }, delay);
    };
  };

  render() {
    return <></>;
  }
}

export default Debounce;
