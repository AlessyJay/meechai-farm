import { AboutSection } from "@/components/about";
import { CommunityImpactSection } from "@/components/community";
import { ExperienceSection } from "@/components/experience";
import Hero from "@/components/hero";
import { ShoppingSection } from "@/components/shopping";

export default function Home() {
  return (
    <section>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <CommunityImpactSection />
      <ShoppingSection />
    </section>
  );
}
