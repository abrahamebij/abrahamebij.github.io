import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden flex">
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
      <div className="relative p-4 flex flex-col flex-1">
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
        <Navbar />
      </div>
    </div>
  );
}

export default App;
