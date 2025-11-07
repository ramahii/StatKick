import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/search?q=soccer OR "European football" OR "Premier League" OR "La Liga" OR "UEFA"&lang=en&token=4c0cf91a03247d5d028360394098a668`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setNews(data.articles);
        } else {
          setError("Failed to fetch news");
        }
      })
      .catch(() => setError("Failed to fetch news"));
  }, []);

  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (news.length === 0) return <div className="p-6 text-white">Loading...</div>;

  const topNews = news[0];
  const otherNews = news.slice(1);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b192f] via-[#0e223d] to-[#122a4d] p-10 text-white">
      <h1 className="text-4xl font-bold mb-10 text-green-400 drop-shadow-lg animate-fade-in">
        Football News
      </h1>

      {/* Top Featured News */}
      {topNews && (
        <a
          href={topNews.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-12 rounded-xl bg-white/10 backdrop-blur-md shadow-xl overflow-hidden 
                     transform transition duration-500 hover:scale-[1.03] hover:shadow-green-400/40 animate-fade-in"
        >
          <div className="relative">
            {topNews.image && (
              <img
                src={topNews.image}
                alt={topNews.title}
                className="w-full h-96 object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-6">
              <h2 className="text-3xl font-bold">{topNews.title}</h2>
              <p className="text-gray-300 text-sm mt-2">{topNews.description}</p>
            </div>
          </div>
        </a>
      )}

      {/* Other Smaller News */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherNews.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 backdrop-blur-md shadow-xl overflow-hidden 
                       transform transition duration-500 hover:scale-[1.05] hover:shadow-green-400/40 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.source?.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
