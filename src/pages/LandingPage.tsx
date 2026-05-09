import React from 'react';
import { HeroSection, ProblemSection, HowItWorks, FAQSection } from '../components/landing';
import { Card, Button, Badge } from '../components/shared';
import { TrendingDown, ChevronRight, Zap } from 'lucide-react';

const ExampleAuditCard = () => {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <Badge variant="primary">Example Intelligence</Badge>
            <h2 className="text-5xl font-serif italic leading-tight">
              Recapture Up To <br />
              <span className="text-primary">35% of AI Spend</span> <br />
              In Under 60 Seconds.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our audit engine identifies specific plan sub-optimalities that humans often overlook. See a snapshot of how we visualize your potential capital recovery.
            </p>
            <Button size="lg" variant="outline" className="group">
              Explore Example Case Study <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex-1 w-full">
            <Card className="bg-foreground text-background p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-primary/10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-2">Audit Preview</p>
                  <h3 className="text-3xl font-serif italic">The Series A Audit</h3>
                </div>
                <Zap className="text-primary fill-primary" size={32} />
              </div>

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
              
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <ExampleAuditCard />
      <FAQSection />
    </div>
  );
};

export default LandingPage;
