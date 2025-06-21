"use client";

import Blogs from "@/components/blogs/blogs";
import BusinessSection from "@/components/buisness-section";
import CTASection from "@/components/cta";
import DownloadApp from "@/components/download-app";
import FAQSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import { Footer } from "@/components/footer";
import FourthSection from "@/components/fourth-section/fourth-section";
import { HeroSection } from "@/components/hero/hero-section";
import { Navbar } from "@/components/nav/navbar";
import RequestQuote from "@/components/request-quote";
import SecondSection from "@/components/second-section/second-section";
import SectionEight from "@/components/section-eight";
import ShowCase from "@/components/showcase";
import SixthSection from "@/components/sixth-section/sixth-section";
import { Slideshow } from "@/components/slideshow/slideshow";
import TestimonialSection from "@/components/testimonial-section";
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
        <FeaturesSection />
        <TestimonialSection />
        <BusinessSection />
        <ShowCase />
        <Slideshow autoPlay={true} autoPlayInterval={1200} className="w-full" />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
