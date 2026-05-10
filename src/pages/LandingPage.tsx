import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection, ProblemSection, HowItWorks, FAQSection } from '../components/landing/LandingComponents';
import { Card, Button, Badge } from '../components/shared/SharedComponents';
import { TrendingDown, ChevronRight } from 'lucide-react';

const ExampleAuditCard = () => {
  return (
    <div className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <Badge variant="primary" className="bg-primary/5 text-primary border-primary/10">Audit Intelligence</Badge>
              <h2 className="text-5xl md:text-7xl font-serif italic leading-[1] tracking-tighter">
                Recapture Up To <br />
                <span className="text-primary opacity-80">35% of AI Spend.</span>
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-sans">
              Our deterministic engine identifies specific plan sub-optimalities that humans often overlook. We don't just find waste; we find capital to reinvest in your core roadmap.
            </p>
            
            <Link to="/audit">
              <Button size="xl" variant="outline" className="group rounded-full px-8">
                Explore Sample Audit <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="flex-1 w-full max-w-2xl">
            <Card className="bg-foreground text-background p-10 md:p-16 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[3rem]">
              <div className="flex justify-between items-start mb-16">
                <div className="space-y-1">
                  <p className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-40 font-bold">Strategic Snapshot</p>
                  <h3 className="text-4xl font-serif italic tracking-tight">Growth Stage Audit</h3>
                </div>
                <img src="/logo_dark.png" alt="Vyay Logo" className="h-10 w-auto object-contain" />
              </div>
...

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-2">Monthly Spend</p>
                  <p className="text-3xl font-serif">$2,450</p>
                </div>
                <div className="text-primary">
                  <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary/70 mb-2">Identified Waste</p>
                  <p className="text-3xl font-serif">$820</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-background/5 border border-background/10 flex justify-between items-center">
                  <span className="text-sm font-medium opacity-80 italic">IDE Redundancy</span>
                  <span className="text-primary font-serif">-$240</span>
                </div>
                <div className="p-4 rounded-xl bg-background/5 border border-background/10 flex justify-between items-center">
                  <span className="text-sm font-medium opacity-80 italic">Tier Efficiency</span>
                  <span className="text-primary font-serif">-$580</span>
                </div>
              </div>
              
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <ExampleAuditCard />
      <FAQSection />
    </main>
  );
};

export default LandingPage;
