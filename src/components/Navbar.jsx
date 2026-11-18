const routes = ["Home", "About", "Project", "Contact"];

function Navbar({ active, switchActive }) {
  return (
    <nav className="flex absolute left-1/2 -translate-x-1/2 w-full bottom-4 bg-white/10 max-w-xl rounded-3xl gap-4 justify-around backdrop-blur-sm py-2">
      {routes.map((route) => (
        <button
          className={`border border-transparent ${active == route ? "bg-white/10 backdrop-blur-sm border-white/15 inset-shadow-sm inset-shadow-white/25 text-white" : "text-white/70"} px-4 py-1 rounded-3xl transition-all duration-200`}
          onClick={() => switchActive(route)}
        >
          {route}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
