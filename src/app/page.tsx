import AboutCard from "./components/about-card";
import EducationCard from "./components/education-card";
import ExpirienceCard from "./components/expirience-card";
import InfoCard from "./components/info-card";
import LanguageCard from "./components/language-card";
import ProfileCard from "./components/profile-card";
import SkillsCard from "./components/skills-card";

export default function Home() {
  return (

    <main className="container mx-auto max-w-6xl px-4 py-4">
      <div className="gap-5 sm:grid lg:grid-cols-3">
        <div className="space-y-4">
          <ProfileCard />
          <InfoCard />
          <SkillsCard />
          <LanguageCard />
          <EducationCard />
        </div>
        <div className="mt-4 space-y-4 sm:mt-0 lg:col-span-2">
          <AboutCard />
          <ExpirienceCard />
        </div>
      </div>
    </main>
  );
}
