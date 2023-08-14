import { PauseIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const Timer = () => {
  const [pause, setPause] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [tenOfSeconds, setTenOfSeconds] = useState(0);

  const clear = () => {
    setSeconds(0);
    setTenOfSeconds(0);
  };

  const handlePauseToggle = () => {
    setPause(!pause);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setSeconds(seconds + 1);
      }
      if (seconds === 9) {
        setTenOfSeconds(tenOfSeconds + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (tenOfSeconds === 6) {
      clear();
    }
  }, [tenOfSeconds]);
  return (
    <div className="flex animate-fadeIn items-center justify-between">
      <section className="flex flex-row gap-1">
        <div className="cursor-pointer rounded-full bg-yellow-800 p-1 hover:bg-yellow-700">
          {!pause && (
            <PauseIcon
              onClick={handlePauseToggle}
              className="h-6 w-6 animate-scaleIn text-yellow-400"
            />
          )}
          {pause && (
            <PlayIcon
              onClick={handlePauseToggle}
              className="h-6 w-6 animate-scaleIn text-yellow-400"
            />
          )}
        </div>
        <div className="cursor-pointer rounded-full bg-gray-600 p-1 hover:bg-gray-500">
          <XMarkIcon onClick={clear} className="h-6 w-6 text-white" />
        </div>
      </section>
      <section className="flex flex-row items-center gap-1 text-yellow-400">
        <p>Timer</p>
        <div className="flex text-2xl">
          <p>0:</p>
          <p className={`${seconds === 0 ? "animate-countup" : ""}`}>
            {tenOfSeconds}
          </p>
          <p key={Math.random()} className="animate-countup">
            {seconds}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Timer;
