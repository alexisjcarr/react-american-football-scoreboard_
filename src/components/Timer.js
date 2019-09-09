import React, { useState, useEffect } from "react";

const Timer = props => {
  const [seconds, setSeconds] = useState(900); //15 minutes in seconds

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  let minutes =
    Math.floor(seconds / 60) < 10
      ? 0(Math.floor(seconds / 60))
      : Math.floor(seconds / 60);

  let seconds_ = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

  return (
    <div className="timer">
      {minutes}:{seconds_}
    </div>
  );
};

export default Timer;
