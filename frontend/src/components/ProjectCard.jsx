import React from "react";
import { ArrowUpRight } from "lucide-react";
import StackBadge from "./StackBadge.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.color}`}>
        <span />
        <span />
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-black uppercase text-rust">{project.type}</p>
        <p className="text-sm font-black text-coffee">{project.year}</p>
      </div>
      <h3 className="mt-4 text-3xl font-black leading-tight text-espresso">{project.title}</h3>
      <p className="mt-4 font-semibold leading-7 text-coffee">{project.intro}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((item) => (
          <StackBadge name={item} key={item} compact />
        ))}
      </div>
      <a className="project-link" href={`#/projects/${project.slug}`}>
        Open case study
        <ArrowUpRight size={18} />
      </a>
    </article>
  );
}
