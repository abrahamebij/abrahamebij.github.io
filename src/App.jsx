import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [activeScreen, setActiveScreen] = useState("Home");

  return (
    <div className="relative h-dvh overflow-hidden flex p-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/bg-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/snow-mountains.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Main Content*/}
      <div className="relative flex flex-col flex-1">
        <h1 className="text-3xl font-semibold">Abraham Ebijuni</h1>
        <p>
          I'm currently doing a revamp of this portfolio. Should be up and
          running in two days.
        </p>
        <p>
          Meanwhile, you can view my GitHub here -{" "}
          <a href="https://github.com/abrahamebij" className="underline">
            github.com/abrahamebij
          </a>
        </p>
        <Navbar active={activeScreen} switchActive={setActiveScreen} />
      </div>
    </div>
  );
}

export default App;
