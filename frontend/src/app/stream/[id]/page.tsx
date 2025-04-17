import { notFound } from "next/navigation";
import VideoPlayer from "@/components/stream/VideoPlayer";
import ChatPanel from "@/components/stream/ChatPanel";
import RelatedMatches from "@/components/stream/RelatedMatches";
import TeamStats from "@/components/stream/TeamStats";
import { MATCHES } from "@/lib/data";

interface StreamPageProps {
  params: Promise<{ id: string }>;
}

export default async function StreamPage({ params }: StreamPageProps) {
  // await the params object
  const { id } = await params;

  const match = MATCHES.find((m) => m.id === id);

  if (!match) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content area */}
        <div className="w-full lg:w-8/12">
          <h1 className="text-2xl font-bold mb-4">{match.title}</h1>

          <div className="mb-6">
            <VideoPlayer match={match} />
          </div>

          {/* Video controls and info */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-700">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <span>Share</span>
              </button>
            </div>
            <div className="text-gray-400">
              <span>SHA</span>
            </div>
          </div>

          <TeamStats match={match} />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-4/12">
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <h2 className="text-xl font-bold mb-4">CHAT</h2>
            <ChatPanel />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">RELATED MATCHES</h2>
            <RelatedMatches currentMatchId={match.id} sport={match.sport} />
          </div>
        </div>
      </div>
    </div>
  );
}
