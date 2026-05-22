import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="site-shell py-12">
      <div className="footer-panel">
        <div>
          <p className="section-kicker text-linen/80">Contact</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Have an app idea that needs clean execution?
          </h2>
        </div>
        <a className="footer-button" href={`mailto:${profile.email}`}>
          Email Me
          <ArrowUpRight size={19} />
        </a>
      </div>
    </footer>
  );
}
