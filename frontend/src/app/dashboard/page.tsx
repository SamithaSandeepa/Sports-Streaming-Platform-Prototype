"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { fetchMatches } from "@/lib/api";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { toast } from "react-hot-toast";

interface Match {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
  time: string;
  isLive: boolean;
}

export default function DashboardPage() {
  const { token, logout } = useAuth();
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    setLoading(true);
    fetchMatches(token)
      .then((data) => setMatches(data))
      .catch(() => toast.error("Failed to load matches"))
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Dashboard</h1>
      </div>

      {/* Loading */}
      {loading && <LoadingSpinner />}

      {/* Data Grid */}
      {!loading && matches.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((m) => (
            <Link
              key={m.id}
              href={`/stream/${m.id}`}
              className="block bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={m.thumbnail}
                alt={m.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{m.title}</h2>
                <p className="text-gray-400 mt-1">
                  {m.date} @ {m.time}
                </p>
                {m.isLive && (
                  <span className="inline-block bg-red-600 text-white text-sm mt-2 px-2 py-1 rounded">
                    LIVE
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && matches.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No matches available.</p>
      )}
    </div>
  );
}
