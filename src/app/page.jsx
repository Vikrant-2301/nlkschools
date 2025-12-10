import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import VideoSection from "../components/home/VideoSection";
import LegacyTimeline from "../components/home/TimelineVertical";
import MediaClippings from "../components/home/MediaClippings";
import NewsSection from "../components/home/NewsSection";
// Add this import
import Associations from "../components/home/Associations";

export default function Home() {
  return (
    <div className="bg-slate-50 selection:bg-orange-500 selection:text-white">
      {/* 1. Hero Section with Video Background */}
      <Hero />

      {/* 2. Stats Dashboard with Floating Counters */}
      <Stats />

      {/* 3. Featured Video with Glow Effect */}
      <VideoSection />

      {/* 4. Horizontal Scroll History (Legacy) */}
      <LegacyTimeline />

      {/* 5. Associations Section (NEW) */}
      <Associations />

      {/* 6. Media Clippings Gallery */}
      <MediaClippings />

      {/* 7. News & Happenings */}
      <NewsSection />

      {/* Spacer for Footer Reveal Effect */}
      <div className="h-[50vh] bg-slate-50"></div>
    </div>
  );
}
