import rickPic from "../assets/rick.png";
import { PauseIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/solid";
import { BackwardIcon } from "@heroicons/react/24/solid";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const Listening = () => {
  const [pause, setPause] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handlePauseToggle = () => {
    setPause(!pause);
  };

  const clear = () => {
    setSeconds(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setSeconds(seconds + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (seconds === 33 && minutes === 3) {
      setMinutes(0);
      clear();
    }
    if (seconds === 60) {
      setMinutes(minutes + 1);
      clear();
    }
  }, [seconds]);

  return (
    <div className="flex w-[316px] flex-col gap-2 rounded-[32px] bg-black p-4 text-sm text-white">
      <section className="flex justify-center gap-3">
        <div>
          <img
            src={rickPic}
            alt="Rick Astley picture"
            className="h-14 w-14 rounded-lg"
          />
        </div>
        <div>
          <p>Never Gonna Give You Up</p>
          <p className="text-slate-400">Rick Astley</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="listening-bar-animation h-2 w-[1px] bg-yellow-600"></div>
          <div className="listening-bar-animation h-4 w-[1px] bg-yellow-700"></div>
          <div className="listening-bar-animation h-5 w-[1px] bg-yellow-600"></div>
          <div className="listening-bar-animation h-6 w-[1px] bg-yellow-600"></div>
          <div className="listening-bar-animation h-5 w-[1px] bg-yellow-600"></div>
          <div className="listening-bar-animation h-4 w-[1px] bg-yellow-700"></div>
          <div className="listening-bar-animation h-2 w-[1px] bg-yellow-600"></div>
        </div>
      </section>
      <section className="flex items-center justify-between text-slate-400">
        <p>
          {minutes}:{seconds >= 10 ? seconds : `0${seconds}`}
        </p>
        <div className="h-1 w-52 rounded-md bg-slate-700">
          <div
            style={{ animationPlayState: !pause ? "running" : "paused" }}
            className="timer-animation h-1 w-52 rounded-md bg-slate-500"
          ></div>
        </div>
        <p>3:33</p>
      </section>
      <section className="flex justify-center gap-2">
        <BackwardIcon className="h-7 w-7 cursor-pointer text-white" />
        {!pause ? (
          <PauseIcon
            onClick={handlePauseToggle}
            className="h-7 w-7 cursor-pointer text-white"
          />
        ) : (
          <PlayIcon
            onClick={handlePauseToggle}
            className="h-7 w-7 cursor-pointer text-white"
          />
        )}
        <ForwardIcon className="h-7 w-7 cursor-pointer text-white" />
      </section>
    </div>
  );
};

export default Listening;