
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { AnalyticsFeature } from "@/components/AnalyticsFeature";
import AIFeature from "@/components/AIFeature";
import RealtimeFeature from "@/components/RealtimeFeature";
import SecurityFeature from "@/components/SecurityFeature";
import { Integrations } from "@/components/Integrations";
import { GlobalScale } from "@/components/GlobalScale";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Features />
      <RealtimeFeature />
      <AIFeature />
      <AnalyticsFeature />
      <SecurityFeature />
      <Integrations />
      <GlobalScale />
      <Footer />
    </main>
  );
};

export default Index;
