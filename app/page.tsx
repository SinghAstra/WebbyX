"use client";

import { HeroSection } from "@/components/hero/hero-section";
import { Navbar } from "@/components/nav/navbar";
import SecondSection from "@/components/second-section/second-section";
import ThirdSection from "@/components/third-section/third-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SecondSection />
        <ThirdSection />
      </main>
    </div>
  );
}
