import React from "react";
import { stacks } from "../data/portfolio.js";

export default function StackSection() {
  return (
    <section id="stack" className="site-shell section-space">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Tech Stack</p>
          <h2 className="section-title">Tools with their own seats at the table.</h2>
        </div>
        <p className="max-w-xl font-semibold leading-7 text-coffee">
          Each stack item uses its own logo, grouped around the practical work of building fullstack applications.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stacks.map((stack) => (
          <article className="stack-card" key={stack.name}>
            <img src={stack.icon} alt={`${stack.name} logo`} />
            <div>
              <h3>{stack.name}</h3>
              <p>{stack.group}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
