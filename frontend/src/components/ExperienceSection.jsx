import React from "react";
import {
  BarChart3,
  Building2,
  Code2,
  FerrisWheel,
  Film,
  GraduationCap,
  Languages,
  Landmark,
  LayoutDashboard,
  Sheet,
  Sparkles,
  Video,
} from "lucide-react";
import { credentials, journey } from "../data/portfolio.js";

const journeyIcons = {
  graduation: GraduationCap,
  code: Code2,
  building: Building2,
  spark: FerrisWheel,
  landmark: Landmark,
};

const credentialIcons = {
  language: Languages,
  video: Video,
  film: Film,
  chart: BarChart3,
  sheet: Sheet,
  dashboard: LayoutDashboard,
};

export default function ExperienceSection() {
  return (
    <section id="journey" className="site-shell section-space">
      <div className="section-heading">
        <div>
          <p className="section-kicker">
            <Sparkles size={16} />
            Background
          </p>
          <h2 className="section-title">A developer with research, education, and visitor-facing experience.</h2>
        </div>
        <p className="max-w-xl font-semibold leading-7 text-coffee">
          My path combines software development training with social science, education work, museums, English communication,
          and data tools.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="timeline-panel">
          {journey.map((item) => {
            const Icon = journeyIcons[item.icon];

            return (
              <article className="journey-card" key={`${item.type}-${item.title}`}>
                <div className={`org-mark ${item.tone}`}>
                  <Icon size={24} />
                  <span>{item.mark}</span>
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-rust">{item.type}</p>
                  <h3 className="mt-1 text-2xl font-black leading-tight text-espresso">{item.title}</h3>
                  <p className="mt-1 font-black text-teal">{item.subtitle}</p>
                  <p className="mt-3 font-semibold leading-7 text-coffee">{item.detail}</p>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="feature-panel p-6 md:p-8">
          <p className="section-kicker">Capabilities</p>
          <h3 className="mt-3 text-3xl font-black leading-tight text-espresso">Language, media, and data skills.</h3>
          <div className="mt-7 grid gap-3">
            {credentials.map((item) => {
              const Icon = credentialIcons[item.icon];

              return (
                <article className="credential-card" key={item.title}>
                  <div className="credential-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
