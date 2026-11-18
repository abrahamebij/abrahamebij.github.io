const routes = ["Home", "About", "Project", "Contact"];

function Navbar({ active, switchActive }) {
  return (
    <nav className="flex absolute left-1/2 -translate-x-1/2 w-full bottom-5 bg-white/10 max-w-xl rounded-2xl gap-4 justify-around backdrop-blur-md py-2">
      {routes.map((route) => (
        <button
          className={`${active == route && "bg-white/10 backdrop-blur-md"} text-white px-4 py-1 rounded-3xl`}
        >
          {route}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
