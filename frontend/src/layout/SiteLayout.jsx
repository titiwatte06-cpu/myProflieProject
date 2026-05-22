import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function SiteLayout({ children }) {
  return (
    <main className="min-h-screen overflow-hidden bg-linen text-espresso">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
