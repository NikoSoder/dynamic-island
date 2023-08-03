import "./App.css";
import Ring from "./components/Ring";
import { useState } from "react";
import Timer from "./components/Timer";
import Listening from "./components/Listening";

const App = () => {
  const [active, setActive] = useState("Idle");
  const getButtonClass = (buttonType: string) =>
    active === buttonType
      ? "button-hover text-sm font-semibold active"
      : "button-hover text-sm font-semibold";

  return (
    <main className="mt-20 flex flex-col items-center justify-center gap-7">
      <section className="flex gap-7 text-sm font-semibold text-gray-600">
        <p>Build by Niko Söder</p>
        <a href="">Github</a>
        <a href="">Email</a>
      </section>
      <section className="w-[500px]">
        <div className="flex h-52 justify-center rounded-t-lg border bg-white p-6">
          <div
            className={`h-7 w-32 rounded-[32px] bg-black p-4 text-sm text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.37,-0.8,0.26,1.45)]${
              active === "Idle" ? "h-7 w-32 opacity-100" : ""
            } ${active === "Ring" ? "h-[56px] w-32 opacity-100" : ""} ${
              active === "Timer" ? "h-[64px] w-52 opacity-100" : ""
            }${
              active === "Listening" ? "h-[144px] w-[316px] opacity-100" : ""
            }`}
          >
            {active === "Idle" && <p></p>}
            {active === "Ring" && <Ring />}
            {active === "Timer" && <Timer />}
            {active === "Listening" && <Listening />}
          </div>
        </div>
        <div className="flex justify-center gap-6 rounded-b-lg border-x border-b bg-slate-50 p-4">
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
      </section>
    </main>
  );
};

export default App;
