import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuditStore } from '../store/auditStore';
import { SUPPORTED_TOOLS } from '../data/pricing';
import { TrendingDown, Download, Share2, AlertCircle, CheckCircle2, ChevronRight, RefreshCw } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ResultPage = () => {
  const { id } = useParams();
  const { result, resetAudit } = useAuditStore();

  if (!result) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle size={64} className="text-muted-foreground opacity-20" />
        </div>
        <h1 className="text-3xl font-serif">Report Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto">This audit report may have expired or was never generated.</p>
        <Link 
          to="/audit" 
          onClick={resetAudit}
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all"
        >
          Start New Audit
        </Link>
      </div>
    );
  }

  const annualSavings = result.potentialSavings * 12;

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">Audit Identifier: {result.id}</p>
          <h1 className="text-6xl font-serif italic mb-2">Audit Intelligence</h1>
          <p className="text-muted-foreground">Strategic expenditure analysis for AI infrastructure.</p>
        </div>
        <div className="flex gap-4">
          <button className="p-4 rounded-2xl border border-foreground/10 hover:bg-foreground/5 transition-all text-muted-foreground" title="Share Report">
            <Share2 size={20} />
          </button>
          <button className="flex items-center gap-2 bg-foreground text-background px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all shadow-xl shadow-foreground/10">
            <Download size={20} /> Export Executive PDF
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-foreground/5 p-8 rounded-[2rem] border border-foreground/10">
          <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Monthly Inflow</p>
          <p className="text-5xl font-serif tracking-tighter">${result.totalMonthlySpend.toLocaleString()}</p>
        </div>
        <div className="bg-primary/10 p-8 rounded-[2rem] border border-primary/20 relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-xs font-sans uppercase tracking-widest text-primary/70 mb-4 font-semibold">Identified Waste</p>
            <p className="text-5xl font-serif text-primary tracking-tighter">${result.potentialSavings.toLocaleString()}</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <TrendingDown size={120} className="text-primary" />
          </div>
        </div>
        <div className="bg-foreground/5 p-8 rounded-[2rem] border border-foreground/10">
          <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Efficiency Grade</p>
          <p className="text-5xl font-serif tracking-tighter">{100 - result.metrics.overlapScore}%</p>
        </div>
      </div>

      <div className="bg-foreground text-background p-8 rounded-[2rem] mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-serif italic mb-1">Projected Annual Capital Recovery</h3>
          <p className="text-background/60 text-sm">Strategic redistribution potential for engineering headcount.</p>
        </div>
        <div className="text-5xl font-serif text-primary">
          ${annualSavings.toLocaleString()}
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-serif italic">Strategic Recommendations</h2>
          <span className="text-xs font-sans uppercase tracking-widest bg-foreground/5 px-3 py-1 rounded-full">{result.recommendations.length} Action Items</span>
        </div>

        {result.recommendations.map((rec, index) => {
          const tool = SUPPORTED_TOOLS.find(t => t.id === rec.toolId);
          return (
            <div 
              key={rec.id} 
              className="bg-foreground/5 rounded-[2rem] border border-foreground/10 p-8 hover:border-primary/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground font-bold">{rec.type}</span>
                  </div>
                  <h3 className="text-2xl font-serif">{rec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{rec.description}</p>
                  
                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Impact:</span>
                      <span className="font-semibold text-primary">-${rec.estimatedSavings}/mo</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Primary Tool:</span>
                      <span className="font-semibold">{tool?.name}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button className="w-full md:w-auto bg-foreground text-background px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all group">
                    Implement Strategy <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-24 pt-12 border-t border-foreground/5 text-center space-y-6">
        <h4 className="text-xl font-serif italic text-muted-foreground">Want a more granular deep-dive?</h4>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link 
            to="/audit" 
            onClick={resetAudit}
            className="flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-8 py-4 rounded-2xl font-semibold transition-all"
          >
            <RefreshCw size={18} /> Recalibrate Audit
          </Link>
          <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all shadow-xl shadow-primary/20">
            Consult a Financial Specialist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
