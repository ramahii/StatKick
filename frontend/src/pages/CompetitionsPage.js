import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CompetitionsPage() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/competitions")
      .then((res) => setCompetitions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Background wallpaper */}
      <div className="absolute inset-0">
        <img
          src="/assets/home/competitions-bg.jpg"
          alt="Competitions Wallpaper"
          className="w-full h-full object-cover fixed"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold mb-8 text-green-400 drop-shadow-lg">
          Competitions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {competitions.map((competition) => (
            <Link
              key={competition.id}
              to={`/competition/${competition.id}`}
              className="glass-card group relative p-6 flex flex-col items-center text-center"
            >
              <img
                src={competition.logoUrl || "/assets/default-competition.png"}
                alt={competition.name}
                className="w-24 h-24 object-contain mb-4 transition-transform duration-500 group-hover:scale-110"
              />
              <h3 className="text-xl font-bold text-white group-hover:text-green-300">
                {competition.name}
              </h3>
              <p className="text-gray-300 text-sm">{competition.country}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
