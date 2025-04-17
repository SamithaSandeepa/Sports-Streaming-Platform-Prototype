import type { Match } from "@/lib/data";

interface TeamStatsProps {
  match: Match;
}

const TeamStats = ({ match }: TeamStatsProps) => {
  // Mock stats data - in a real application, these would come from an API
  const teamStats = {
    possession: {
      home: 55,
      away: 45,
    },
    shots: {
      home: 12,
      away: 8,
    },
    shotsOnTarget: {
      home: 5,
      away: 3,
    },
    corners: {
      home: 7,
      away: 4,
    },
    fouls: {
      home: 10,
      away: 13,
    },
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Match Stats</h2>

      <div className="space-y-6">
        {/* Teams */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">{match.teams.home}</div>
          <div className="text-lg font-bold">{match.teams.away}</div>
        </div>

        {/* Possession */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>{teamStats.possession.home}%</span>
            <span>Possession</span>
            <span>{teamStats.possession.away}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{ width: `${teamStats.possession.home}%` }}
            ></div>
          </div>
        </div>

        {/* Shots */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>{teamStats.shots.home}</span>
            <span>Shots</span>
            <span>{teamStats.shots.away}</span>
          </div>
          <div className="flex h-2">
            <div
              className="bg-primary rounded-l-full"
              style={{
                width: `${
                  (teamStats.shots.home /
                    (teamStats.shots.home + teamStats.shots.away)) *
                  100
                }%`,
              }}
            ></div>
            <div
              className="bg-gray-400 rounded-r-full"
              style={{
                width: `${
                  (teamStats.shots.away /
                    (teamStats.shots.home + teamStats.shots.away)) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Shots on Target */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>{teamStats.shotsOnTarget.home}</span>
            <span>Shots on Target</span>
            <span>{teamStats.shotsOnTarget.away}</span>
          </div>
          <div className="flex h-2">
            <div
              className="bg-primary rounded-l-full"
              style={{
                width: `${
                  (teamStats.shotsOnTarget.home /
                    (teamStats.shotsOnTarget.home +
                      teamStats.shotsOnTarget.away)) *
                  100
                }%`,
              }}
            ></div>
            <div
              className="bg-gray-400 rounded-r-full"
              style={{
                width: `${
                  (teamStats.shotsOnTarget.away /
                    (teamStats.shotsOnTarget.home +
                      teamStats.shotsOnTarget.away)) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Corners */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>{teamStats.corners.home}</span>
            <span>Corners</span>
            <span>{teamStats.corners.away}</span>
          </div>
          <div className="flex h-2">
            <div
              className="bg-primary rounded-l-full"
              style={{
                width: `${
                  (teamStats.corners.home /
                    (teamStats.corners.home + teamStats.corners.away)) *
                  100
                }%`,
              }}
            ></div>
            <div
              className="bg-gray-400 rounded-r-full"
              style={{
                width: `${
                  (teamStats.corners.away /
                    (teamStats.corners.home + teamStats.corners.away)) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Fouls */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>{teamStats.fouls.home}</span>
            <span>Fouls</span>
            <span>{teamStats.fouls.away}</span>
          </div>
          <div className="flex h-2">
            <div
              className="bg-primary rounded-l-full"
              style={{
                width: `${
                  (teamStats.fouls.home /
                    (teamStats.fouls.home + teamStats.fouls.away)) *
                  100
                }%`,
              }}
            ></div>
            <div
              className="bg-gray-400 rounded-r-full"
              style={{
                width: `${
                  (teamStats.fouls.away /
                    (teamStats.fouls.home + teamStats.fouls.away)) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
