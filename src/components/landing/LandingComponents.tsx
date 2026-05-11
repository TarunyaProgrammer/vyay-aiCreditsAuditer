import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, SectionHeading, Badge } from '../shared/SharedComponents';
import { TrendingDown, Users, Zap, Shield, ChevronRight, HelpCircle, Plus, Info } from 'lucide-react';

// Hero Section
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Video - Pure Sharpness */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-label="Cinematic video of a robotic arm, symbolizing AI precision and technical excellence"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4" type="video/mp4" />
      </video>

      {/* Strategic Gradient Overlay: Sharp at top, readable at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
      
      {/* Hero Content (Bottom-Left Aligned) */}
      <div className="relative z-20 flex-1 flex items-end pb-16 sm:pb-32 px-6 sm:px-12 md:px-20 lg:px-28">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary/30" aria-hidden="true" />
              <a href="#" className="text-[11px] font-sans uppercase tracking-[0.3em] font-bold text-primary hover:opacity-70 transition-opacity">
                Strategic Alpha v0.1.0
              </a>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-[0.95] font-serif italic tracking-tighter text-foreground">
              Optimize AI Expenditure <br />
              <span className="opacity-40 font-sans not-italic text-[0.4em] uppercase tracking-[0.2em] block mt-4">Without Scaling Back.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed font-sans">
              The deterministic audit engine for engineering teams to identify tool redundancy and plan sub-optimality in under 60 seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link to="/audit">
              <Button size="xl" className="group shadow-2xl shadow-primary/20 rounded-full px-10" aria-label="Initiate Strategic Audit">
                Initiate Strategic Audit <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform ml-2" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="xl" className="rounded-full px-10 border-foreground/10 hover:bg-foreground hover:text-background transition-all" aria-label="View Market Reference">
                View Market Reference
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Section
export const ProblemSection = () => {
  return (
    <section className="py-32 bg-foreground/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <Badge variant="primary" className="mb-6 bg-primary/5 text-primary border-primary/10 uppercase tracking-widest text-[10px]">Strategic Analysis</Badge>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-[1] tracking-tighter">
            The AI Spending Paradox.
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed font-sans max-w-2xl">
            As AI velocity increases, so does the "Hidden Spend" of redundant subscriptions and misaligned enterprise tiers. Vyay exposes these inefficiencies instantly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: 'Subscription Chaos', 
              desc: 'Teams often pay for multiple IDE agents (Cursor + Copilot) and reasoning tools simultaneously, creating $100s in monthly waste per seat.',
              icon: <Plus size={24} />
            },
            { 
              title: 'Tier Mismatch', 
              desc: 'Small startups frequently default to "Enterprise" or "Team" tiers with 5-seat minimums when individual Pro seats would suffice.',
              icon: <Users size={24} />
            },
            { 
              title: 'Invisible Inflation', 
              desc: 'Without a centralized audit, AI costs inflate silently month-over-month, eating into runway that could be used for headcount.',
              icon: <TrendingDown size={24} />
            }
          ].map((item, i) => (
            <Card key={i} className="group p-10 bg-background border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2.5rem]">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-3xl font-serif italic mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                {item.desc}
              </p>
            </Card>
          ))}
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
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {steps.map((step) => (
            <div key={step.id} className="group relative">
              <div className="text-[120px] font-serif italic text-foreground/5 leading-none mb-[-60px] transition-all group-hover:text-primary/5 select-none">
                {step.id}
              </div>
              <div className="space-y-6 relative z-10 pl-8 border-l border-foreground/5 group-hover:border-primary/20 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary/50 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-serif italic tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">{step.desc}</p>
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
