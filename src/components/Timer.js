import React, { useState, useEffect } from "react";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const buttonRow = {
  display: "flex",
  justifyContent: "space-between"
};

const Timer = () => {
  const [seconds, setSeconds] = useState(900); //15 minutes in seconds
  const [running, setRunning] = useState(false);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const reset = () => {
    setSeconds(900);
  };

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (!running && seconds !== 0) {
      clearInterval(timer);
    }

    if (seconds === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [running, seconds]);

  let minutes =
    Math.floor(seconds / 60) < 10
      ? `0${Math.floor(seconds / 60)}`
      : Math.floor(seconds / 60);

  let seconds_ = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

  return (
    <div style={styles}>
      <div className="timer">
        {minutes}:{seconds_}
      </div>
      <div style={buttonRow}>
        <button onClick={() => toggleRunning()}>
          {running ? "PAUSE" : "START"}
        </button>
        <button style={{ background: "#a2272d" }} onClick={() => reset()}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Timer;
