import React from 'react';
import { SUPPORTED_TOOLS } from '../data/pricing';
import { Card, SectionHeading, Badge } from '../components/shared/SharedComponents';
import { ShieldCheck, Info, BarChart4, Target } from 'lucide-react';

const PricingPage = () => {
  return (
    <main className="container mx-auto px-6 pt-32 pb-24 max-w-6xl animate-in fade-in duration-1000">
      <SectionHeading 
        title="Market Intelligence Data" 
        subtitle="Live pricing benchmarks and deterministic logic used by our audit engine."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 mt-16">
        <Card className="flex flex-col items-center text-center p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <BarChart4 size={24} />
          </div>
          <h3 className="text-xl font-serif italic">Verified Rates</h3>
          <p className="text-sm text-muted-foreground">
            Our data is updated weekly via direct vendor APIs and official pricing schedules.
          </p>
        </Card>
        <Card className="flex flex-col items-center text-center p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-xl font-serif italic">Deterministic Logic</h3>
          <p className="text-sm text-muted-foreground">
            No stochastic estimations. We use exact tiered math to calculate your potential savings.
          </p>
        </Card>
        <Card className="flex flex-col items-center text-center p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Target size={24} />
          </div>
          <h3 className="text-xl font-serif italic">Provider Agnostic</h3>
          <p className="text-sm text-muted-foreground">
            Vyay maintains absolute neutrality. Recommendations are purely data-driven.
          </p>
        </Card>
      </div>

      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-foreground/5 pb-8">
          <div className="space-y-2">
            <Badge variant="primary">Repository v1.0</Badge>
            <h2 className="text-4xl font-serif italic">Vendor Pricing Matrix</h2>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground bg-foreground/5 px-4 py-2 rounded-full">
            <Info size={16} className="opacity-50" />
            <span className="text-[10px] font-sans uppercase tracking-widest font-bold">Updated: May 11, 2026</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-foreground/5 bg-background shadow-2xl">
          <table className="w-full text-left border-collapse" aria-label="Vendor Pricing Benchmarks">
            <thead>
              <tr className="bg-foreground/[0.02]">
                <th className="p-8 text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-muted-foreground border-b border-foreground/5">Provider</th>
                <th className="p-8 text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-muted-foreground border-b border-foreground/5">Strategic Tier</th>
                <th className="p-8 text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-muted-foreground border-b border-foreground/5">Rate / Unit</th>
                <th className="p-8 text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-muted-foreground border-b border-foreground/5">Audit Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {SUPPORTED_TOOLS.map((tool) => (
                <React.Fragment key={tool.id}>
                  {tool.plans.map((plan, idx) => (
                    <tr key={`${tool.id}-${plan.name}`} className="group hover:bg-primary/[0.01] transition-colors">
                      {idx === 0 && (
                        <td className="p-8 align-top border-r border-foreground/5" rowSpan={tool.plans.length}>
                          <div className="space-y-1">
                            <p className="text-xl font-serif italic">{tool.name}</p>
                            <p className="text-[10px] font-sans text-muted-foreground uppercase tracking-widest">{tool.category}</p>
                          </div>
                        </td>
                      )}
                      <td className="p-8">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-serif">{plan.name}</span>
                          {plan.name === 'Enterprise' && <Badge variant="primary">Contact Required</Badge>}
                        </div>
                      </td>
                      <td className="p-8">
                        <p className="text-lg font-serif">
                          ${plan.price} <span className="text-xs text-muted-foreground opacity-60">/ {plan.billing}</span>
                        </p>
                      </td>
                      <td className="p-8">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${plan.price > 50 ? 'bg-orange-500' : 'bg-success'}`} aria-hidden="true" />
                          <span className="text-sm opacity-60">
                            {plan.price > 50 ? 'High Optimization Potential' : 'Standard Efficiency'}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-32 p-12 rounded-[3rem] bg-foreground text-background relative overflow-hidden">
        <div className="relative z-10 space-y-8 max-w-2xl">
          <h2 className="text-5xl font-serif italic tracking-tighter leading-tight">
            Institutional <br />
            <span className="opacity-40">Intelligence Support.</span>
          </h2>
          <p className="text-lg opacity-60 leading-relaxed font-serif italic">
            Are you seeing rates different from our index? Our engineering team validates pricing submissions daily. Contact our strategy desk to report market deviations.
          </p>
          <a href="mailto:tarunyak.10@gmail.com" className="inline-block border-b border-background/20 hover:border-primary transition-colors text-2xl font-serif italic py-2">
            Submit Market Correction ↗
          </a>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px]" aria-hidden="true" />
      </div>
    </main>
  );
};

export default PricingPage;
