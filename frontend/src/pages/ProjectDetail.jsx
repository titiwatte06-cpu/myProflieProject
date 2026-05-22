import React from "react";
import { ArrowLeft, Github } from "lucide-react";
import StackBadge from "../components/StackBadge.jsx";
import SiteLayout from "../layout/SiteLayout.jsx";

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <SiteLayout>
        <section className="site-shell py-24">
          <a className="secondary-button w-fit" href="#/">
            <ArrowLeft size={18} />
            Back Home
          </a>
          <h1 className="mt-10 text-5xl font-black text-espresso">Project not found.</h1>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="site-shell pb-16 pt-8">
        <a className="secondary-button w-fit" href="#/">
          <ArrowLeft size={18} />
          Back Home
        </a>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker">{project.type}</p>
            <h1 className="mt-4 font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] text-espresso">
              {project.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-coffee">{project.intro}</p>
          </div>
          <aside className="feature-panel p-6 md:p-8">
            <div className={`project-art ${project.color} mb-7`}>
              <span />
              <span />
            </div>
            <p className="section-kicker">Role</p>
            <p className="mt-2 text-2xl font-black">{project.role}</p>
            <p className="section-kicker mt-7">Year</p>
            <p className="mt-2 text-2xl font-black">{project.year}</p>
          </aside>
        </div>
      </section>

      <section className="site-shell section-space">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="detail-card">
            <p className="section-kicker">Problem</p>
            <p>{project.problem}</p>
          </article>
          <article className="detail-card">
            <p className="section-kicker">Solution</p>
            <p>{project.solution}</p>
          </article>
        </div>
      </section>

      <section className="site-shell section-space">
        <div className="feature-panel p-6 md:p-10">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Project Stack</p>
              <h2 className="section-title">Built with these tools.</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <StackBadge name={item} key={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell section-space">
        <div className="grid gap-4 md:grid-cols-2">
          {project.highlights.map((item) => (
            <div className="highlight-card" key={item}>
              <span />
              {item}
            </div>
          ))}
        </div>
        <a className="primary-button mt-8 w-fit" href="https://github.com">
          <Github size={18} />
          Repository
        </a>
      </section>
    </SiteLayout>
  );
}
