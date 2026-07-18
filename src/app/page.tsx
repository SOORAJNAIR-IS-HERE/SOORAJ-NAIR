import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import Bundles from "@/components/bundles";
import { Intel } from '@/components/intel';
import { Footer } from '@/components/footer';
import { InstaShowcase } from '@/components/instaShowcase';


export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Abstract Background Matrix Grid Structure Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1329_1px,transparent_1px),linear-gradient(to_bottom,#0b1329_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Structural Components */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <InstaShowcase />
        <Bundles />        
        <Intel />
        <Footer />

      </main>
    </div>
  );
}