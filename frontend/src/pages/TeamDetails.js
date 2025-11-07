import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TeamDetails() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [competitions, setCompetitions] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/teams/${id}`)
      .then((res) => {
        setTeam(res.data);
        if (res.data.competitionIds?.length) {
          const requests = res.data.competitionIds.map((cid) =>
            axios
              .get(`http://localhost:5000/competitions/${cid}`)
              .then((r) => r.data)
          );
          Promise.all(requests).then((data) => setCompetitions(data));
        }
      })
      .catch((err) => console.error(err));

    fetch(`http://localhost:5000/teams/${id}/players`)
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!team) return <div className="p-10 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b192f] via-[#0e223d] to-[#122a4d] p-8 text-white">
      <div className="flex items-center space-x-6 mb-12">
        {team.logoUrl && (
          <img
            src={team.logoUrl}
            alt={team.name}
            className="w-28 h-28 object-contain"
          />
        )}
        <div>
          <h1 className="text-5xl font-bold text-green-400 drop-shadow-lg">
            {team.name}
          </h1>
          <p className="text-lg text-gray-300">
            <strong>Country:</strong> {team.country}
          </p>
        </div>
      </div>

      {competitions.length > 0 && (
        <>
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            Competitions
          </h2>
          <ul className="list-disc list-inside space-y-1 mb-10">
            {competitions.map((comp) => (
              <li key={comp.id}>
                <Link
                  to={`/competition/${comp.id}`}
                  className="text-green-400 hover:underline"
                >
                  {comp.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {players.length > 0 && (
        <>
          <h2 className="text-3xl font-bold mb-8 text-green-400">Players</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {players.map((player) => (
              <div key={player.id} className="player-card">
                <div className="player-card-inner">
                  {/* FRONT */}
                  <div className="player-card-front">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {player.name}
                    </h3>
                    <p className="text-gray-300">{player.position}</p>
                    <p className="text-gray-400 text-sm">Age: {player.age}</p>
                  </div>
                  {/* BACK */}
                  <div className="player-card-back">
                    <p className="text-3xl font-bold text-green-400 mb-2">
                      #{player.shirtNumber || "?"}
                    </p>
                    <p className="text-gray-300 text-lg">
                      {player.nationality}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <Link
        to="/teams"
        className="mt-16 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg transition"
      >
        ← Back to Teams
      </Link>
    </div>
  );
}
