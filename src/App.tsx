import "./App.css";
import Ring from "./components/Ring";
import { useState } from "react";
import Timer from "./components/Timer";
import Listening from "./components/Listening";
import TabButton from "./components/TabButton";

const App = () => {
  const [active, setActive] = useState("Idle");
  const changeTab = (tab: string) => {
    setActive(tab);
  };

  return (
    <main className="mt-20 flex flex-col items-center justify-center gap-7">
      <section className="flex gap-7 text-sm font-semibold text-gray-600">
        <p>Build by Niko Söder</p>
        <a href="">Github</a>
        <a href="mailto:soder.n@gmail.com">Email</a>
      </section>
      <section className="w-[350px] sm:w-[500px]">
        <div className="relative flex h-52 justify-center rounded-t-lg border bg-white p-6">
          {/* trail effect */}
          <div
            className={`absolute h-7 w-32 rounded-[32px] bg-black p-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.37,-0.8,0.26,1.45)]${
              active === "Idle" ? "h-7 w-32 animate-trail" : ""
            } ${active === "Ring" ? "h-[56px] w-40 animate-trail" : ""} ${
              active === "Timer" ? "h-[64px] w-52 animate-trail" : ""
            }${active === "Listening" ? "h-[144px] w-[316px]" : ""}`}
          ></div>
          <div
            className={`z-10 h-7 w-32 rounded-[32px] bg-black p-4 text-sm text-white transition-all duration-500 ease-[cubic-bezier(0.37,-0.8,0.26,1.45)]${
              active === "Idle" ? "h-7 w-32" : ""
            } ${active === "Ring" ? "h-[56px] w-40" : ""} ${
              active === "Timer" ? "h-[64px] w-52" : ""
            }${active === "Listening" ? "h-[144px] w-[316px]" : ""}`}
          >
            {active === "Idle" && <p></p>}
            {active === "Ring" && <Ring />}
            {active === "Timer" && <Timer />}
            {active === "Listening" && <Listening />}
          </div>
        </div>
        <section className="flex justify-center gap-3 rounded-b-lg border-x border-b bg-slate-50 p-4">
          <TabButton text="Idle" onChangeTab={changeTab} active={active} />
          <TabButton text="Ring" onChangeTab={changeTab} active={active} />
          <TabButton text="Timer" onChangeTab={changeTab} active={active} />
          <TabButton text="Listening" onChangeTab={changeTab} active={active} />
        </section>
      </section>
    </main>
  );
};

export default App;
