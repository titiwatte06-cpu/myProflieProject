import React from "react";
import { CircleDot, Sparkles } from "lucide-react";

const notes = [
  "Frontend that feels simple and polished",
  "Backend structure that stays readable",
  "Database flows designed around real usage",
];

export default function About() {
  return (
    <section className="site-shell section-space">
      <div className="feature-panel grid gap-10 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
        <div>
          <p className="section-kicker">
            <Sparkles size={16} />
            Profile
          </p>
          <h2 className="section-title">I care about the whole product path.</h2>
        </div>
        <div>
          <p className="text-lg font-semibold leading-8 text-coffee">
            My portfolio is focused on fullstack development: interfaces, APIs, authentication, data models, and the small
            details that make a project feel trustworthy after launch.
          </p>
          <div className="mt-8 grid gap-3">
            {notes.map((note) => (
              <div className="note-row" key={note}>
                <CircleDot size={18} />
                {note}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
