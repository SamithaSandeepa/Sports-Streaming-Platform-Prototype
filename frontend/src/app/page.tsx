import Link from "next/link";
import NowStreaming from "@/components/home/NowStreaming";
import TodaysStreams from "@/components/home/TodaysStreams";
import ComingUp from "@/components/home/ComingUp";
import FeaturedContent from "@/components/home/FeaturedContent";
import SportsCategories from "@/components/home/SportsCategories";
import TrendingEvents from "@/components/home/TrendingEvents";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-6">FEATURED LIVE EVENTS</h1>
        <FeaturedContent />
      </section>

      <section className="mb-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-8/12">
            <h2 className="text-2xl font-bold mb-4">UPCOMING MATCHES</h2>
            <TodaysStreams />
          </div>

          <div className="w-full md:w-4/12">
            <h2 className="text-2xl font-bold mb-4">CATEGORIES</h2>
            <SportsCategories />
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">TRENDING EVENTS</h2>
        <TrendingEvents />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link
          href="/live"
          className="bg-primary hover:bg-primary-dark text-white text-xl font-bold py-4 px-6 rounded text-center transition-colors"
        >
          START WATCHING NOW
        </Link>

        <Link
          href="/become-provider"
          className="bg-primary hover:bg-primary-dark text-white text-xl font-bold py-4 px-6 rounded text-center transition-colors"
        >
          BECOME A CONTENT PROVIDER
        </Link>
      </div>
    </div>
  );
}
