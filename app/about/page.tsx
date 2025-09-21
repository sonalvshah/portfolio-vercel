import { AboutSection } from "@/app/components/about-section"
import { JourneyTimeline } from "@/app/components/journey-timeline"

export default function AboutPage() {
  return (
    <main className="pt-24">
      <AboutSection />
      <JourneyTimeline />  {/* timeline comes right after description + image */}
    </main>
  )
}
