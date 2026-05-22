import React, { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import { projects } from "./data/portfolio.js";

function currentPath() {
  return window.location.hash.replace("#", "") || "/";
}

export default function App() {
  const [path, setPath] = useState(currentPath);
  const slug = path.startsWith("/projects/") ? path.replace("/projects/", "") : "";
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    const syncPath = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", syncPath);
    return () => window.removeEventListener("hashchange", syncPath);
  }, []);

  if (slug) {
    return <ProjectDetail project={project} />;
  }

  return <Home />;
}
