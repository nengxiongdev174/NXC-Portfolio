"use client";

import {
  Navbar,
  Hero,
  Projects,
  Skills,
  Experience,
  About,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-nx-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
