import rickPic from "../assets/rick.png";
import { PauseIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/solid";
import { BackwardIcon } from "@heroicons/react/24/solid";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import ListeningSongAnimation from "./ListeningSongAnimation";

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
    <div className="animate-fadeIn">
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
          {Array.from([15, 20, 21, 40, 35, 41, 20, 21, 14]).map(
            (height, index) => (
              <ListeningSongAnimation
                key={index}
                pause={pause}
                height={height}
              />
            ),
          )}
        </div>
      </section>
      <section className="flex items-center justify-between text-slate-400">
        <p>
          {minutes}:{seconds >= 10 ? seconds : `0${seconds}`}
        </p>
        {/* song time remaining bar */}
        <div className="h-1 w-52 rounded-md bg-slate-700">
          <div
            style={{ animationPlayState: !pause ? "running" : "paused" }}
            className="h-1 w-52 animate-timerBar rounded-md bg-slate-500"
          ></div>
        </div>
        <p>3:33</p>
      </section>
      <section className="flex justify-center gap-2">
        <BackwardIcon className="h-7 w-7 cursor-pointer text-white" />
        {!pause ? (
          <PauseIcon
            onClick={handlePauseToggle}
            className="h-7 w-7 animate-scaleIn cursor-pointer text-white"
          />
        ) : (
          <PlayIcon
            onClick={handlePauseToggle}
            className="h-7 w-7 animate-scaleIn cursor-pointer text-white"
          />
        )}
        <ForwardIcon className="h-7 w-7 cursor-pointer text-white" />
      </section>
    </div>
  );
};

export default Listening;
