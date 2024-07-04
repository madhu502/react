import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stop = () => {
    if (running) {
      setRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const reset = () => {
    stop();
    setTime(0);
    setLaps([]);
  };

  const lap = () => {
    if (running) {
      setLaps([...laps, time]);
    }
  };

  const formatTime = (time) => {
    const milliseconds = ("00" + (time % 1000)).slice(-3);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };
  return (
    <>
      <div className="container " style={{ textAlign: "center" }}>
        <h1>Stopwatch</h1>
        <div>{formatTime(time)}</div>
        <div>
          <button onClick={start} className="btn btn-dark mt-2 ">
            Start
          </button>
          <button onClick={stop} className="btn btn-dark mt-2 ">
            Stop
          </button>
          <button onClick={lap} className="btn btn-dark mt-2 ">
            Lap
          </button>
          <button onClick={reset} className="btn btn-dark mt-2 ">
            Reset
          </button>
        </div>
        <h2>Laps</h2>
        <ul>
          {laps.map((lapTime, index) => (
            <li key={index}>{formatTime(lapTime)}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StopWatch;
