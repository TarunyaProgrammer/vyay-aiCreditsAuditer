import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, SectionHeading, Badge } from '../shared/SharedComponents';
import { TrendingDown, Users, Zap, Shield, ChevronRight, HelpCircle, Plus, Info } from 'lucide-react';

// Hero Section
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure readability and match our theme */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] z-0" />
      
      {/* Hero Content (Bottom-Left Aligned) */}
      <div className="relative z-10 flex-1 flex items-end pb-12 sm:pb-24 px-6 sm:px-12 md:px-20 lg:px-28">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-4">
            <a href="#" className="inline-flex items-center gap-2 text-[12px] font-medium text-primary hover:opacity-80 transition-opacity group">
              Seen on Shark Tank in India <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.1] font-serif italic tracking-tight text-foreground">
              Optimize AI Expenditure <br />
              <span className="opacity-50">Without Scaling Back.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-foreground/70 max-w-md leading-relaxed">
              The deterministic audit engine for engineering teams to identify tool redundancy and plan sub-optimality in under 60 seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link to="/audit">
              <Button size="xl" className="group shadow-2xl shadow-primary/20">
                Initiate Strategic Audit <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-2">→</span>
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="bg-background/20 backdrop-blur-md border-foreground/10">
              View Market Reference
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Section
export const ProblemSection = () => {
  return (
    <section className="py-24 bg-foreground/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="The AI Spending Paradox" 
          subtitle="As AI velocity increases, so does the 'Hidden Spend' of redundant subscriptions and misaligned enterprise tiers."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="space-y-4 border-l-4 border-l-primary/30">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Plus size={24} />
            </div>
            <h3 className="text-2xl font-serif italic">Subscription Chaos</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Teams often pay for multiple IDE agents (Cursor + Copilot) and reasoning tools simultaneously, creating $100s in monthly waste per seat.
            </p>
          </Card>
          
          <Card className="space-y-4 border-l-4 border-l-primary/30">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-serif italic">Tier Mismatch</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Small startups frequently default to "Enterprise" or "Team" tiers with 5-seat minimums when individual Pro seats would suffice.
            </p>
          </Card>
          
          <Card className="space-y-4 border-l-4 border-l-primary/30">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <TrendingDown size={24} />
            </div>
            <h3 className="text-2xl font-serif italic">Invisible Inflation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Without a centralized audit, AI costs inflate silently month-over-month, eating into runway that could be used for headcount.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
export const HowItWorks = () => {
  const steps = [
    { 
      id: '01', 
      title: 'Inventory Ingestion', 
      desc: 'Select the AI tools, models, and seats currently active across your engineering organization.',
      icon: <Zap size={24} />
    },
    { 
      id: '02', 
      title: 'Deterministic Audit', 
      desc: 'Our engine applies market-verified rules to identify plan sub-optimality and redundant tooling.',
      icon: <Shield size={24} />
    },
    { 
      id: '03', 
      title: 'Capital Recovery', 
      desc: 'Receive a high-fidelity executive report with actionable steps to recapture wasted capital.',
      icon: <TrendingDown size={24} />
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="group">
              <div className="text-[80px] font-serif italic text-foreground/5 leading-none mb-[-40px] transition-all group-hover:text-primary/10">
                {step.id}
              </div>
              <div className="space-y-4 relative z-10 pl-4 border-l border-foreground/10 group-hover:border-primary/30 transition-all">
                <h3 className="text-2xl font-serif italic">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
export const FAQSection = () => {
  const faqs = [
    { q: 'Is this audit free?', a: 'Yes. Vyay is a free strategic utility for the engineering community. We monetize through advanced organizational dashboards (coming soon).' },
    { q: 'Is my data secure?', a: 'We do not require account creation or personal data. Your audit inputs are transient and stored only in your local browser session.' },
    { q: 'How accurate are the prices?', a: 'Every price point is pegged to official vendor documentation. We include verification dates for every tool in our Market Reference repository.' },
    { q: 'Why not use LLMs for audits?', a: 'Financial auditing requires deterministic accuracy. LLMs are prone to "hallucinating" pricing plans. We use hardcoded rules for 100% defensible reports.' },
  ];

  return (
    <section className="py-24 bg-foreground/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading title="Strategic Inquiries" subtitle="Answers to common questions about our methodology and data integrity." />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} padding="sm" className="bg-background">
              <div className="flex gap-4">
                <HelpCircle className="text-primary shrink-0 mt-1" size={20} />
                <div className="space-y-2">
                  <h4 className="font-semibold">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
