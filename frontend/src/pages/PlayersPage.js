import { useEffect, useState } from "react";
import axios from "axios";

export default function PlayersPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/players")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">All Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player) => (
          <div key={player.id} className="bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md p-4 transition">
            <h2 className="text-xl font-semibold text-blue-300">{player.name}</h2>
            <p className="text-gray-400">{player.position}</p>
            <p className="text-gray-500 text-sm">
              {player.nationality} — Age {player.age}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
