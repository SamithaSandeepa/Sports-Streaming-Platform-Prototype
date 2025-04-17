import Link from "next/link";
import Image from "next/image";
import { MATCHES } from "@/lib/data";
import type { Sport } from "@/lib/data";

interface RelatedMatchesProps {
  currentMatchId: string;
  sport: Sport;
}

const RelatedMatches = ({ currentMatchId, sport }: RelatedMatchesProps) => {
  // Filter matches of the same sport, excluding the current match
  const relatedMatches = MATCHES.filter(
    (match) => match.sport === sport && match.id !== currentMatchId
  ).slice(0, 3);

  return (
    <div className="space-y-4">
      {relatedMatches.length > 0 ? (
        relatedMatches.map((match) => (
          <Link key={match.id} href={`/stream/${match.id}`} className="block">
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
              <div className="relative aspect-video">
                <Image
                  src={match.thumbnail || "/images/placeholder.jpg"}
                  alt={match.title}
                  fill
                  className="object-cover"
                />
                {match.isLive && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    LIVE
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium">{match.title}</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-gray-400 text-sm">{match.sport}</span>
                  <span className="text-gray-400 text-sm">{match.time}</span>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="text-center py-6 text-gray-400">
          No related matches available
        </div>
      )}
    </div>
  );
};

export default RelatedMatches;
