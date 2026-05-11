import React from 'react';
import { SectionHeading, Card, Badge } from '../components/shared/SharedComponents';
import { Target, Zap, Shield, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="container mx-auto px-6 pt-32 pb-24 max-w-5xl animate-in fade-in duration-1000">
      <div className="space-y-16">
        <SectionHeading 
          title="The Strategy of Vyay" 
          subtitle="Precision auditing for the modern AI-first engineering organization."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-2xl font-serif italic leading-relaxed text-foreground/80">
              In the age of stochastic intelligence, financial precision is often the first casualty. Vyay was built to restore that precision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most infrastructure audits rely on broad generalizations or opaque AI predictions. Vyay takes the opposite approach: **Deterministic Intelligence**. By mapping your specific tool consumption against our proprietary market pricing matrix, we identify capital leaks with 100% mathematical defensibility.
            </p>
            <div className="pt-8">
              <Badge variant="primary">Calm Engineering Protocol</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6 flex gap-4 items-start">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><Target size={20} /></div>
              <div>
                <h4 className="font-serif italic text-lg">Mission</h4>
                <p className="text-sm text-muted-foreground">To maximize engineering efficiency by rationalizing the cost of intelligence.</p>
              </div>
            </Card>
            <Card className="p-6 flex gap-4 items-start">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><Shield size={20} /></div>
              <div>
                <h4 className="font-serif italic text-lg">Neutrality</h4>
                <p className="text-sm text-muted-foreground">We accept no referral fees from vendors. Our data remains objective and unbiased.</p>
              </div>
            </Card>
            <Card className="p-6 flex gap-4 items-start">
              <div className="p-2 bg-primary/10 rounded-lg text-primary"><Zap size={20} /></div>
              <div>
                <h4 className="font-serif italic text-lg">Velocity</h4>
                <p className="text-sm text-muted-foreground">Zero-auth audits. Strategic reports generated in under 60 seconds.</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="pt-24 border-t border-foreground/5 space-y-12">
          <SectionHeading 
            title="The Architect" 
            subtitle="Bridging institutional finance and agentic engineering."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl font-serif italic text-foreground/80">
                "Vyay is the intersection of my passion for capital efficiency and modern software architecture."
              </p>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif">Tarunya Kesharwani</h4>
                <p className="text-muted-foreground">
                  Student at <strong>Newton School of Technology</strong> (Year 1) <br />
                  Aspiring Engineering Lead & Product Architect
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This platform was designed and engineered as a <strong>Pre-Internship Task for Credex</strong>. It represents a commitment to high-fidelity, deterministic software that solves real-world fiscal problems for engineering teams.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-all duration-700" aria-hidden="true" />
              <Card className="relative p-12 text-center space-y-4 border-primary/20 bg-primary/5">
                <Badge variant="primary">Task Status: Mission Complete</Badge>
                <h4 className="text-3xl font-serif italic">Credex Selection Process</h4>
                <p className="text-sm text-muted-foreground">Round 1: 7-Day High-Fidelity Build</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="pt-24 border-t border-foreground/5">
          <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <h3 className="text-4xl md:text-5xl font-serif italic tracking-tighter mb-8 relative z-10">
              Built for the <br />
              <span className="opacity-40">Post-Hype Era.</span>
            </h3>
            <p className="text-lg opacity-60 max-w-xl font-serif italic mb-12 relative z-10">
              Vyay is more than a calculator; it's a lead-generation asset for Credex, designed to transition high-growth teams from generic chat tools to high-performance API infrastructure.
            </p>
            <div className="flex gap-4 relative z-10">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-foreground bg-primary/20" />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold tracking-widest uppercase opacity-40">Trusted by</span>
                <span className="text-sm italic font-serif">500+ Engineering Leads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
