import { MATCHES } from "@/lib/data";
import Link from "next/link";

const TodaysStreams = () => {
  // Filter matches for today
  const todaysMatches = MATCHES.filter((match) => match.date === "2025-04-17");

  return (
    <div className="bg-secondary rounded-lg overflow-hidden">
      <table className="w-full">
        <tbody>
          {todaysMatches.map((match, index) => (
            <tr
              key={match.id}
              className={`${
                index % 2 === 0 ? "bg-secondary" : "bg-gray-900"
              } hover:bg-gray-800 transition-colors`}
            >
              <td className="py-3 px-4 text-sm md:text-base">
                <span className="font-bold">{match.teams.home}</span> vs{" "}
                <span className="font-bold">{match.teams.away}</span>
              </td>
              <td className="py-3 px-4 text-right text-sm md:text-base">
                {match.time}
              </td>
              <td className="py-3 px-4 text-right">
                {match.isLive ? (
                  <Link
                    href={`/stream/${match.id}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs md:text-sm transition-colors"
                  >
                    LIVE
                  </Link>
                ) : (
                  <span className="text-gray-400 text-xs md:text-sm">
                    {match.time === "11:00 AM"
                      ? "11:00 AM"
                      : match.time === "16:00 PM"
                      ? "16:00 PM"
                      : match.time}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodaysStreams;
