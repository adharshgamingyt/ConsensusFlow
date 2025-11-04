import React from "react";
import CTASection from "./ui/cta";
import Footer from "./ui/footer";
import HeroSection from "./ui/hero";
import HowItWorks from "./ui/hiw";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}
