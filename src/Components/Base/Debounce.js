import React from "react";

class Debounce extends React.Component {
  debounce = (callback, delay) => {
    let interval;

    return (...args) => {
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
