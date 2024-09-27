import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const timeRef = useRef(null);

    const handleStart = () => {
        if(!running){
            setRunning(true);
            timeRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 100);
        }
    };

    const formatTime = (time) => {
        const hours = Math.floor(time/3600).toString().padStart(2, '0');
        const minutes = Math.floor((time%3600)/60).toString().padStart(2,'0');
        const seconds = Math.floor((time%60)).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    const handleStop = () => {
        clearInterval(timeRef.current);
        setRunning(false);
    }

    const handleReset = () => {
        setTime(0);
        setRunning(false);
        clearInterval(timeRef.current);
    }

  return (
    <div>
        <h2>Stop Watch</h2>
        <div>
            <p>{formatTime(time)}</p>
            <button onClick={handleStart} disabled={running}>Start</button>
            <button onClick={handleStop} disabled={!running}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch;