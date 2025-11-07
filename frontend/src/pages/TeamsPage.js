import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Background wallpaper */}
      <div className="absolute inset-0">
        <img
          src="/assets/home/teams-bg.jpg"
          alt="Teams Wallpaper"
          className="w-full h-full object-cover fixed"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold mb-10 text-green-400 drop-shadow-lg">
          Teams
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teams.map((team) => (
            <Link
              key={team.id}
              to={`/team/${team.id}`}
              className="glass-card group relative p-6 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-4 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-300 group-hover:border-green-400 transition">
                <img
                  src={team.logoUrl}
                  alt={team.name}
                  className="object-contain w-20 h-20 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-green-300">
                {team.name}
              </h2>
              <p className="text-gray-300 text-sm mt-1">{team.country}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
