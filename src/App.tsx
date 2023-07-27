import "./App.css";
import Idle from "./components/Idle";
import Ring from "./components/Ring";
import { useState } from "react";
import Timer from "./components/Timer";
import Listening from "./components/Listening";

const App = () => {
  const [active, setActive] = useState("Idle");
  const getButtonClass = (buttonType: string) =>
    active === buttonType
      ? "button-hover text-sm font-semibold text-teal-800"
      : "button-hover text-sm font-semibold";

  return (
    <main className="mt-20 flex items-center justify-center">
      <div className="w-[500px]">
        <div className="h-52 rounded-t-lg border bg-white p-6 transition-all">
          {active === "Idle" && <Idle />}
          {active === "Ring" && <Ring />}
          {active === "Timer" && <Timer />}
          {active === "Listening" && <Listening />}
        </div>
        <div className="flex justify-center gap-4 rounded-b-lg border-x border-b bg-slate-50 p-4">
          <button
            onClick={() => setActive("Idle")}
            className={getButtonClass("Idle")}
          >
            Idle
          </button>
          <button
            onClick={() => setActive("Ring")}
            className={getButtonClass("Ring")}
          >
            Ring Mode
          </button>
          <button
            onClick={() => setActive("Timer")}
            className={getButtonClass("Timer")}
          >
            Timer
          </button>
          <button
            onClick={() => setActive("Listening")}
            className={getButtonClass("Listening")}
          >
            Listening
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
