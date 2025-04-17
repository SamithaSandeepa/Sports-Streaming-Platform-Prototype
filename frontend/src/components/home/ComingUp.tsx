import { MATCHES } from "@/lib/data";

const ComingUp = () => {
  // Filter matches for tomorrow and beyond
  const upcomingMatches = MATCHES.filter(
    (match) => match.date === "2025-04-18"
  );

  return (
    <div className="bg-secondary rounded-lg overflow-hidden">
      <table className="w-full">
        <tbody>
          {upcomingMatches.map((match, index) => (
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
                {match.date}
              </td>
              <td className="py-3 px-4 text-right">
                <span className="text-gray-400 text-xs md:text-sm">
                  {match.time}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComingUp;
