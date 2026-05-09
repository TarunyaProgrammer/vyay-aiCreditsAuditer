import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuditStore } from '../store/auditStore';
import { SUPPORTED_TOOLS } from '../data/pricing';
import { Button, Card, Badge, SectionHeading } from '../components/shared/SharedComponents';
import { 
  TrendingDown, Download, Share2, AlertCircle, 
  CheckCircle2, ChevronRight, RefreshCw, Zap,
  BarChart3, ShieldCheck, Target
} from 'lucide-react';

const ResultPage = () => {
  const { id } = useParams();
  const { result, resetAudit, input } = useAuditStore();

  if (!result) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-foreground/5 flex items-center justify-center">
            <AlertCircle size={48} className="text-muted-foreground opacity-20" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-serif italic">Audit Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">This strategic report may have expired or was never finalized. Initiate a new audit to generate a fresh profile.</p>
        </div>
        <Link to="/audit" onClick={resetAudit}>
          <Button size="xl">Initiate New Audit</Button>
        </Link>
      </div>
    );
  }

  const annualSavings = result.potentialSavings * 12;
  const isOptimized = result.potentialSavings === 0 || (result.potentialSavings / result.totalMonthlySpend) < 0.05;

  const confidenceColors = {
    high: 'success' as const,
    medium: 'primary' as const,
    low: 'warning' as const,
  };

  return (
    <div className="container mx-auto px-6 py-24 max-w-5xl animate-in fade-in duration-1000">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div className="space-y-4">
          <Badge variant="primary">Strategic Expenditure Report</Badge>
          <h1 className="text-6xl md:text-7xl font-serif italic tracking-tighter leading-tight">
            Audit Intelligence <br />
            <span className="text-muted-foreground opacity-40">Ref: {result.id.toUpperCase()}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Deterministic analysis for {input.teamSize}-seat organization specializing in {input.useCase}.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="lg"><Share2 size={18} /> Share</Button>
          <Button size="lg" className="shadow-2xl shadow-primary/20"><Download size={18} /> Executive PDF</Button>
        </div>
      </div>
      
      {/* Savings Hero */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="md:col-span-2 bg-foreground text-background overflow-hidden relative group">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-2">Projected Annual Recovery</p>
                <p className="text-7xl md:text-8xl font-serif italic tracking-tighter">${annualSavings.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-primary text-background rounded-2xl rotate-12">
                <TrendingDown size={32} />
              </div>
            </div>
            
            <div className="mt-12 flex gap-8 border-t border-background/10 pt-8">
              <div>
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-1">Monthly Optimization</p>
                <p className="text-2xl font-serif">${result.potentialSavings.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-1">Efficiency Grade</p>
                <p className="text-2xl font-serif text-primary italic">{result.metrics.efficiencyGrade}</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700" />
        </Card>

        <Card className="flex flex-col justify-between items-center text-center py-12">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-serif italic">Operational Trust</h3>
            <p className="text-sm text-muted-foreground px-4">
              Our audit uses 100% deterministic logic. Recommendations are conservative and financially defensible.
            </p>
          </div>
          <Badge>Verified Market Rates</Badge>
        </Card>
      </div>

      {/* Summary Block */}
      <Card padding="md" className="mb-16 border-dashed bg-transparent">
        <div className="flex gap-6 items-start">
          <div className="p-3 bg-foreground/5 rounded-xl">
            <Target size={24} />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg font-serif">Executive Summary</h4>
            <p className="text-muted-foreground leading-relaxed italic">
              "The organization is currently operating with a {result.metrics.overlapScore.toFixed(1)}% expenditure leakage. The primary drivers are cross-vendor reasoning overlap and sub-optimal tier allocation for smaller sub-teams. Implementing the high-confidence actions below will recapture approximately {annualSavings.toLocaleString()} in annual capital."
            </p>
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      <div className="space-y-8 mb-24">
        <SectionHeading title="Strategic Recommendations" subtitle="Specific, actionable steps to rationalize your AI infrastructure." align="left" />
        
        {result.recommendations.map((rec, index) => {
          const tool = SUPPORTED_TOOLS.find(t => t.id === rec.toolId);
          return (
            <Card 
              key={rec.id} 
              padding="lg" 
              className="hover:border-primary/20 transition-all group/card animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <Badge variant={confidenceColors[rec.confidence]}>{rec.confidence} Confidence</Badge>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-muted-foreground opacity-50">{rec.type}</span>
                  </div>
                  
                  <h3 className="text-3xl font-serif italic">{rec.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{rec.description}</p>
                  
                  <div className="flex flex-wrap gap-8 pt-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground font-bold">Projected Impact</p>
                      <p className="text-xl font-serif text-primary">-${rec.estimatedSavings}/mo</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground font-bold">Related Provider</p>
                      <p className="text-xl font-serif">{tool?.name || 'Multi-Vendor'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-64 flex items-center">
                  <Button className="w-full group" size="lg">
                    Implement Action <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="pt-24 border-t border-foreground/10 text-center space-y-8">
        <h3 className="text-3xl font-serif italic">Operational Recalibration</h3>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/audit" onClick={resetAudit}>
            <Button variant="outline" size="xl"><RefreshCw size={20} /> Recalibrate Audit</Button>
          </Link>
          <Button size="xl" className="shadow-2xl shadow-primary/20">Download Full Audit Log</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
