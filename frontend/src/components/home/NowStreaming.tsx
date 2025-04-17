import Image from "next/image";
import Link from "next/link";
import { MATCHES } from "@/lib/data";

const NowStreaming = () => {
  const liveMatches = MATCHES.filter((match) => match.isLive);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {liveMatches.map((match) => (
        <div
          key={match.id}
          className="bg-secondary rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative">
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
              LIVE
            </div>
            <Image
              src={match.thumbnail || "/images/placeholder.jpg"}
              alt={match.title}
              width={400}
              height={225}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">{match.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-400">{match.sport}</span>
              <Link
                href={`/stream/${match.id}`}
                className="bg-primary hover:bg-primary-dark text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Watch Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NowStreaming;
