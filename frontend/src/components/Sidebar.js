import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-60 h-screen bg-[#0b192f] text-white p-4 space-y-6">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-400">StatKick</div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition ${
              isActive ? "bg-green-600" : "hover:bg-green-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/competitions"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition ${
              isActive ? "bg-green-600" : "hover:bg-green-700"
            }`
          }
        >
          Competitions
        </NavLink>
        <NavLink
          to="/teams"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition ${
              isActive ? "bg-green-600" : "hover:bg-green-700"
            }`
          }
        >
          Teams
        </NavLink>
        <NavLink
          to="/matches"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition ${
              isActive ? "bg-green-600" : "hover:bg-green-700"
            }`
          }
        >
          Matches
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition ${
              isActive ? "bg-green-600" : "hover:bg-green-700"
            }`
          }
        >
          News
        </NavLink>

        {/* >>> NEW LINK ADDED <<< */}
        <NavLink
          to="/video-analysis"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition ${
              isActive ? "bg-green-600" : "hover:bg-green-700"
            }`
          }
        >
          Video Analysis
        </NavLink>
      </nav>
    </div>
  );
}
