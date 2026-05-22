import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section className="site-shell grid min-h-[calc(100vh-92px)] items-center gap-12 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="eyebrow">
          <MapPin size={16} />
          {profile.location}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.4rem,9vw,8.2rem)] font-black leading-[0.92] text-espresso">
          Fullstack work with a calmer rhythm.
        </h1>
        <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-coffee md:text-xl">
          {profile.summary}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="primary-button" href="#work">
            View Projects
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-button" href="#stack">
            See Stack
          </a>
        </div>
      </div>

      <div className="portrait-stage">
        <div className="shape shape-arc" />
        <div className="shape shape-sun" />
        <div className="portrait-card">
          <img
            src="/profile.jpg"
            alt={`${profile.name} profile`}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="portrait-fallback">
            <span>{profile.role}</span>
          </div>
        </div>
        <div className="portrait-caption">
          <span>Available for web app projects</span>
          <strong>React / API / Database</strong>
        </div>
      </div>
    </section>
  );
}
