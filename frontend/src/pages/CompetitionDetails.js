import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CompetitionDetails() {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/competitions/${id}`)
      .then((res) => setCompetition(res.data))
      .catch((err) => console.error(err));

    axios
      .get(`http://localhost:5000/competitions/${id}/teams`)
      .then((res) => setTeams(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!competition) return <div className="p-10 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b192f] via-[#0e223d] to-[#122a4d] p-6 text-white">
      <h1 className="text-5xl font-bold mb-6 text-green-400 drop-shadow-lg">
        {competition.name}
      </h1>
      <div className="mb-8 space-y-2 text-gray-300">
        <p>
          <strong>Founded:</strong> {competition.founded}
        </p>
        <p>
          <strong>Country:</strong> {competition.country}
        </p>
        <p>
          <strong>Type:</strong> {competition.type}
        </p>
      </div>

      {teams.length > 0 && (
        <>
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            Participating Teams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teams.map((team) => (
              <Link
                key={team.id}
                to={`/team/${team.id}`}
                className="group relative bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center 
                           shadow-lg border border-gray-700 hover:border-green-500
                           hover:shadow-green-500/40 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-24 h-24 mb-4 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-300 group-hover:border-green-400 transition">
                  <img
                    src={team.logoUrl}
                    alt={team.name}
                    className="object-contain w-20 h-20 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white text-center group-hover:text-green-400">
                  {team.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{team.country}</p>
                <span className="absolute inset-0 rounded-2xl bg-green-500/0 group-hover:bg-green-500/5 transition duration-300" />
              </Link>
            ))}
          </div>
        </>
      )}

      <Link
        to="/competitions"
        className="mt-10 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg transition"
      >
        ← Back to Competitions
      </Link>
    </div>
  );
}
