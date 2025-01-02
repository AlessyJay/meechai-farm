import { AboutSection } from "@/components/about";
import Hero from "@/components/hero";
import { ShoppingSection } from "@/components/shopping";

export default function Home() {
  return (
    <section>
      <Hero />
      <AboutSection />
      <ShoppingSection />
    </section>
  );
}
