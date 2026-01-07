import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LivePreview } from "@/components/LivePreview";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PartnerSection } from "@/components/PartnerSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LivePreview />
        <ComparisonTable />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
