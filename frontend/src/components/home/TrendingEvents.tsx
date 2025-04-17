import { MATCHES } from "@/lib/data";

const TrendingEvents = () => {
  // Sort matches by view count (if available)
  const trendingMatches = [...MATCHES]
    .filter((match) => match.viewCount)
    .sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))
    .slice(0, 2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-semibold mb-3">Most Viewed</h3>
        <div className="bg-gray-800 rounded-lg p-4">
          {trendingMatches.length > 0 ? (
            <div className="space-y-3">
              {trendingMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex justify-between items-center"
                >
                  <span>{match.title}</span>
                  <span className="text-gray-400 text-sm">
                    {match.viewCount?.toLocaleString()} views
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400">No data available</div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Most Subscribed</h3>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Event Name</span>
              <span className="text-gray-400 text-sm">12.5K subscribers</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Event Name</span>
              <span className="text-gray-400 text-sm">10.2K subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingEvents;
