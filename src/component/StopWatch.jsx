import React, { useRef, useState } from "react";
import "./StopWatch.css";
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startHandle = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const stopHandle = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetHandle = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  let timePassed = (time / 1000).toFixed(3);

  return (
    <div>
      <h1>Stopwatch: {timePassed} s</h1>
      <button id="start" onClick={startHandle}>
        Start
      </button>
      <button id="stop" onClick={stopHandle}>
        Stop
      </button>
      <button id="rest" onClick={resetHandle}>
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
