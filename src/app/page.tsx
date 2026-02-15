import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CaseStudies from "@/sections/CaseStudies";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Validator from "@/sections/Validator";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ff] text-[#101828]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-24 h-[480px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(141,86,255,0.28),rgba(141,86,255,0))] blur-[10px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[480px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,136,230,0.22),rgba(255,136,230,0))] blur-[10px]" />
        <Navbar />
        <main className="pt-24">
          <Hero />
          <Services />
          <WhyUs />
          <CaseStudies />
          <Validator />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
