import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import GroupchatShowcase from "@/components/GroupchatShowcase";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <HowItWorks />
      <GroupchatShowcase />
      <FinalCta />
      <Footer />
    </main>
  );
}
