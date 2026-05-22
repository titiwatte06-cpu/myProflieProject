import React from "react";
import { Github, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Navbar() {
  return (
    <header className="site-shell py-5">
      <nav className="flex items-center justify-between rounded-full border border-espresso/10 bg-cream/80 px-4 py-3 shadow-soft backdrop-blur md:px-6">
        <a className="font-display text-base font-black text-espresso md:text-lg" href="#/">
          {profile.name}.dev
        </a>
        <div className="flex items-center gap-2">
          <a className="nav-link hidden sm:inline-flex" href="#work">
            Work
          </a>
          <a className="nav-link hidden sm:inline-flex" href="#stack">
            Stack
          </a>
          <a className="icon-button" href={profile.github} aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
