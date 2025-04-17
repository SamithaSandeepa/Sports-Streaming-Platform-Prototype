import Image from "next/image";
import Link from "next/link";
import { MATCHES } from "@/lib/data";

const FeaturedContent = () => {
  // Get featured matches (first 3 for demonstration)
  const featuredMatches = MATCHES.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredMatches.map((match) => (
        <div
          key={match.id}
          className="relative group overflow-hidden rounded-lg"
        >
          <div className="aspect-video relative">
            <Image
              src={match.thumbnail || "/images/placeholder.jpg"}
              alt={match.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {match.isLive && (
              <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                LIVE
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-lg font-bold">{match.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-300 text-sm">{match.sport}</span>
              <Link
                href={`/stream/${match.id}`}
                className="bg-primary hover:bg-primary-dark text-white px-3 py-1 rounded text-sm transition-colors"
              >
                {match.isLive ? "Watch Now" : "Details"}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedContent;
