import { useEffect, useState } from "react";

export default function MatchesPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/")
      .then((res) => res.json())
      .then((data) => setMatches(data.response || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Background wallpaper */}
      <div className="absolute inset-0">
        <img
          src="/assets/matches-bg.jpg"
          alt="Matches Wallpaper"
          className="w-full h-full object-cover fixed"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold mb-8 text-green-400 drop-shadow-lg">
          Matches
        </h1>
        {matches.length === 0 ? (
          <p className="text-red-400">No matches found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {matches.map((match, index) => (
              <a
                key={index}
                href={match.matchviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group relative p-4 flex flex-col"
              >
                <img
                  src={match.thumbnail}
                  alt={match.title}
                  className="rounded-md mb-4 w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <h2 className="text-lg font-semibold group-hover:text-green-300">
                  {match.title}
                </h2>
                <p className="text-gray-300 text-sm">
                  {new Date(match.date).toLocaleDateString()}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
