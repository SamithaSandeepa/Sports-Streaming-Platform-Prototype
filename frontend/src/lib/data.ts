export type Sport = "football" | "rugby" | "cricket" | "basketball" | "other";

export interface Match {
  id: string;
  title: string;
  teams: {
    home: string;
    away: string;
  };
  sport: Sport;
  time: string;
  date: string;
  isLive: boolean;
  thumbnail: string;
  viewCount?: number;
}

export interface StreamInfo {
  id: string;
  matchId: string;
  title: string;
  viewCount: number;
  startTime: string;
  duration: string;
}

export const SPORTS_CATEGORIES = [
  { id: "football", name: "Football", icon: "⚽" },
  { id: "rugby", name: "Rugby", icon: "🏉" },
  { id: "cricket", name: "Cricket", icon: "🏏" },
  { id: "basketball", name: "Basketball", icon: "🏀" },
  { id: "other", name: "Other Sports", icon: "🎯" },
];

export const MATCHES: Match[] = [
  {
    id: "match-1",
    title: "Team A vs Team B",
    teams: {
      home: "Team A",
      away: "Team B",
    },
    sport: "football",
    time: "11:00 AM",
    date: "2025-04-17",
    isLive: true,
    thumbnail: "/images/football-match.jpg",
    viewCount: 15420,
  },
  {
    id: "match-2",
    title: "Team C vs Team D",
    teams: {
      home: "Team C",
      away: "Team D",
    },
    sport: "football",
    time: "16:00 PM",
    date: "2025-04-17",
    isLive: false,
    thumbnail: "/images/football-match-2.jpg",
  },
  {
    id: "match-3",
    title: "Rugby Match",
    teams: {
      home: "National Team",
      away: "Visitors",
    },
    sport: "rugby",
    time: "14:30 PM",
    date: "2025-04-17",
    isLive: true,
    thumbnail: "/images/rugby-match.jpg",
    viewCount: 8920,
  },
  {
    id: "match-4",
    title: "League Finals",
    teams: {
      home: "City Team",
      away: "United",
    },
    sport: "basketball",
    time: "19:00 PM",
    date: "2025-04-17",
    isLive: false,
    thumbnail: "/images/basketball-match.jpg",
  },
  {
    id: "match-5",
    title: "Cricket Test Match",
    teams: {
      home: "Home XI",
      away: "Away XI",
    },
    sport: "cricket",
    time: "10:00 AM",
    date: "2025-04-18",
    isLive: false,
    thumbnail: "/images/cricket-match.jpg",
  },
];

export const LIVE_STREAMS: StreamInfo[] = [
  {
    id: "stream-1",
    matchId: "match-1",
    title: "Team A vs Team B - Live",
    viewCount: 15420,
    startTime: "11:00 AM",
    duration: "01:30:00",
  },
  {
    id: "stream-3",
    matchId: "match-3",
    title: "Rugby Match - Live",
    viewCount: 8920,
    startTime: "14:30 PM",
    duration: "01:15:00",
  },
];

export const CHAT_MESSAGES = [
  {
    id: 1,
    user: "FootballFan22",
    message: "Great goal by Team A!",
    timestamp: "11:15 AM",
  },
  {
    id: 2,
    user: "SportLover",
    message: "The referee made a mistake there!",
    timestamp: "11:17 AM",
  },
  {
    id: 3,
    user: "TeamBSupporter",
    message: "Come on Team B, you can do it!",
    timestamp: "11:20 AM",
  },
  {
    id: 4,
    user: "Commentator",
    message: "What a save by the goalkeeper!",
    timestamp: "11:22 AM",
  },
  {
    id: 5,
    user: "SoccerExpert",
    message: "That was definitely offside.",
    timestamp: "11:25 AM",
  },
];
