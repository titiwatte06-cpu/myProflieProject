import React from "react";
import About from "../components/About.jsx";
import Hero from "../components/Hero.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import StackSection from "../components/StackSection.jsx";
import SiteLayout from "../layout/SiteLayout.jsx";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <StackSection />
      <ProjectsSection />
    </SiteLayout>
  );
}
