"use client";

import Blogs from "@/components/blogs/blogs";
import DownloadApp from "@/components/download-app";
import FourthSection from "@/components/fourth-section/fourth-section";
import { HeroSection } from "@/components/hero/hero-section";
import { Navbar } from "@/components/nav/navbar";
import RequestQuote from "@/components/request-quote";
import SecondSection from "@/components/second-section/second-section";
import SectionEight from "@/components/section-eight";
import SixthSection from "@/components/sixth-section/sixth-section";
import ThirdSection from "@/components/third-section/third-section";
import BrandsShowcase from "../components/brands-showcase";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <BrandsShowcase />
        <Blogs />
        <SixthSection />
        <RequestQuote />
        <DownloadApp />
        <SectionEight />
      </main>
    </div>
  );
}
