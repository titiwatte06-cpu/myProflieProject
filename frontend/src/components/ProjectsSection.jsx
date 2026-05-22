import React from "react";
import { projects } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsSection() {
  return (
    <section id="work" className="site-shell section-space">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Case studies with room to breathe.</h2>
        </div>
        <p className="max-w-xl font-semibold leading-7 text-coffee">
          Replace these examples with your real projects later. The structure is ready for links, writeups, and repositories.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
