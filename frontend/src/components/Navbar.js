import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const NavItem = ({ to, label }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        className={[
          "group relative px-3 py-3 rounded-lg", // increased padding for taller navbar
          isActive ? "text-green-400" : "text-white/90 hover:text-green-300",
          "after:content-[''] after:absolute after:left-2 after:right-2 after:-bottom-[4px]",
          "after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-green-400 after:to-green-600",
          "after:transition-all after:duration-300",
          isActive ? "after:w-[calc(100%-1rem)]" : "after:w-0 group-hover:after:w-[calc(100%-1rem)]",
          "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-white/5",
          "before:scale-0 before:opacity-0 group-hover:before:scale-100 group-hover:before:opacity-100",
          "before:transition before:duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60"
        ].join(" ")}
      >
        <span className="relative z-10">{label}</span>
      </Link>
    );
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-gradient-to-r from-gray-900 via-green-900 to-black
        bg-[length:400%_400%] animate-gradient-x
        border-b border-green-800/30 shadow-lg
      "
    >
      <div className="w-full px-6 py-5 flex items-center justify-between"> {/* increased py for height */}
        {/* Brand aligned fully left */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="
              text-3xl font-extrabold
              bg-clip-text text-transparent
              bg-gradient-to-r from-green-400 via-green-500 to-green-300
              hover:scale-[1.02] transition-transform
            "
          >
            StatKick
          </Link>
        </div>

        {/* Nav items aligned right */}
        <div className="flex items-center gap-8 text-lg font-semibold ml-auto">
          <NavItem to="/competitions" label="Competitions" />
          <NavItem to="/teams" label="Teams" />
          <NavItem to="/matches" label="Matches" />
          <NavItem to="/news" label="News" />
          <NavItem to="/video-analysis" label="Video Analysis" />
        </div>
      </div>
    </nav>
  );
}
