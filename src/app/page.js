import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <div className="container px-8 py-8 mt-24 mx-auto space-y-16">
        <Hero />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}
