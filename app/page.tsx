import ActivitySection from "@/components/sections/ActivitySection";
import CareerSection from "@/components/sections/CareerSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import NotionSection from "@/components/sections/NotionSection";
import ProjectSection from "@/components/sections/ProjectSection";
import StudySection from "@/components/sections/StudySection";

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <ActivitySection />
      <ProjectSection />
      <StudySection />
      <NotionSection />
      <CareerSection />
    </main>
  );
}
