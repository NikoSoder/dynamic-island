import { PauseIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const Timer = () => {
  const [pause, setPause] = useState(false);
  const [counter, setCounter] = useState(0);

  const clear = () => {
    setCounter(0);
  };

  const handlePauseToggle = () => {
    setPause(!pause);
  };

  useEffect(() => {
    console.log(counter);
    const interval = setInterval(() => {
      if (!pause) {
        setCounter(counter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (counter === 60) {
      clear();
    }
  }, [counter]);
  return (
    <div className="content-o flex items-center justify-between">
      <div className="flex flex-row gap-1">
        <div className="cursor-pointer rounded-full bg-yellow-800 p-1 hover:bg-yellow-700">
          {!pause && (
            <PauseIcon
              onClick={handlePauseToggle}
              className="h-6 w-6 text-yellow-400"
            />
          )}
          {pause && (
            <PlayIcon
              onClick={handlePauseToggle}
              className="h-6 w-6 text-yellow-400"
            />
          )}
        </div>
        <div className="cursor-pointer rounded-full bg-gray-600 p-1 hover:bg-gray-500">
          <XMarkIcon onClick={clear} className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-1 text-yellow-400">
        <p>Timer</p>
        <p className="text-2xl">0:{counter >= 10 ? counter : `0${counter}`}</p>
      </div>
    </div>
  );
};

export default Timer;
