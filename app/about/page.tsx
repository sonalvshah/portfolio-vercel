import { AboutSection } from "@/app/components/about-section"
import { JourneyTimeline } from "@/app/components/journey-timeline"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutSection />
      <JourneyTimeline />
    </div>
  )
}
