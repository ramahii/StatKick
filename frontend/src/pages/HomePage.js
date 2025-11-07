import { Link } from "react-router-dom";

// Inline icons (no extra packages)
const TrophyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M8 21h8M12 17v4M7 4h10v2a5 5 0 0 1-10 0V4z" />
    <path d="M17 6h2a3 3 0 0 1-3 3M7 6H5a3 3 0 0 0 3 3" />
  </svg>
);

const UsersIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const NewspaperIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M19 20H5a2 2 0 0 1-2-2V7h16v11a2 2 0 0 1-2 2z" />
    <path d="M7 7V5h13v12a2 2 0 0 1-2 2" />
    <path d="M7 11h10M7 15h10M7 7h4" />
  </svg>
);

const BallIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3l3 5-3 2-3-2 3-5zm0 18l-3-5 3-2 3 2-3 5zM3 12l5-3 2 3-2 3-5-3zm18 0l-5-3-2 3 2 3 5-3z" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with stronger gradient for readability */}
      <div className="absolute inset-0">
        <img
          src="/assets/home/stadium-bg.jpg"
          alt="Football Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-xl mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Game That <span className="text-orange-500"> We All Love</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explore competitions, teams, and live stats designed for football enthusiasts worldwide.
          </p>
          <Link
            to="/competitions"
            className="px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-soft transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Floating Cards - right side */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-6 max-w-sm md:max-w-md">
          {/* Competitions */}
          <div className="glass-card p-6 rounded-2xl text-white bg-white/10 backdrop-blur-md shadow-soft hover:shadow-xl transition transform hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10">
                <TrophyIcon className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Competitions</h2>
                <p className="text-gray-300 text-sm mb-3">
                  Explore major football competitions and leagues from around the world.
                </p>
                <Link to="/competitions" className="font-medium text-orange-400 hover:text-orange-500">
                  View Competitions →
                </Link>
              </div>
            </div>
          </div>

          {/* Matches */}
          <div className="glass-card p-6 rounded-2xl text-white bg-white/10 backdrop-blur-md shadow-soft hover:shadow-xl transition transform hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10">
                <BallIcon className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Matches</h2>
                <p className="text-gray-300 text-sm mb-3">
                  Find highlights, scores, and updates from football matches around the globe.
                </p>
                <Link to="/Matches" className="font-medium text-orange-400 hover:text-orange-500">
                  View Matches →
                </Link>
              </div>
            </div>
          </div>

          {/* Teams */}
          <div className="glass-card p-6 rounded-2xl text-white bg-white/10 backdrop-blur-md shadow-soft hover:shadow-xl transition transform hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10">
                <UsersIcon className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Teams</h2>
                <p className="text-gray-300 text-sm mb-3">
                  Discover teams, track their stats, and follow your favorites easily.
                </p>
                <Link to="/teams" className="font-medium text-orange-400 hover:text-orange-500">
                  View Teams →
                </Link>
              </div>
            </div>
          </div>

          {/* News */}
          <div className="glass-card p-6 rounded-2xl text-white bg-white/10 backdrop-blur-md shadow-soft hover:shadow-xl transition transform hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10">
                <NewspaperIcon className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">News</h2>
                <p className="text-gray-300 text-sm mb-3">
                  Get insights into the latest football news.
                </p>
                <Link to="/News" className="font-medium text-orange-400 hover:text-orange-500">
                  View News →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
