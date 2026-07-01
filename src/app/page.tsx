import { Hero } from "@/components/sections/hero";
import { SkillsOverview } from "@/components/sections/skills-overview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsOverview />
      <FeaturedProjects />
      <Testimonials />
      <ContactCta />
    </>
  );
}
