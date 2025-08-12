"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { About } from "@/components/about";
import { ContactForm } from "@/components/contact-form";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Gallery />
        <Testimonials />
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
