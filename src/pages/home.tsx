// Local Imports
import ProjectsSection from "@/components/projects";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/about";
import NavbarSection from "@/components/navbar";
import NewsSection from "@/components/news";
import ScrollToggleButton from "@/components/scroll-btn";

export default function HomePage() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <NewsSection />
      <ProjectsSection />
      <FooterSection />
      <ScrollToggleButton />
    </>
  );
}
