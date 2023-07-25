import "./App.css";
import Idle from "./components/Idle";
import Ring from "./components/Ring";
import { useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [active, setActive] = useState("Idle");
  return (
    <main className="mt-20 flex items-center justify-center">
      <div className="w-96">
        <div className="h-52 rounded-t-lg border bg-white p-6 transition-all">
          {active === "Idle" && <Idle />}
          {active === "Ring" && <Ring />}
          {active === "Timer" && <Timer />}
        </div>
        <div className="rounded-b-lg border-x border-b bg-slate-50 p-4">
          <button
            onClick={() => setActive("Idle")}
            className="rounded border bg-white px-4 py-2 text-sm font-semibold"
          >
            Idle
          </button>
          <button
            onClick={() => setActive("Ring")}
            className="rounded border bg-white px-4 py-2 text-sm font-semibold"
          >
            Ring Mode
          </button>
          <button
            onClick={() => setActive("Timer")}
            className="rounded border bg-white px-4 py-2 text-sm font-semibold"
          >
            Timer
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
