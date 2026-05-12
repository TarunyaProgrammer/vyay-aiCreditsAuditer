import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuditStore } from '../store/auditStore';
import { SUPPORTED_TOOLS } from '../data/pricing';
import { Button, Card, Badge, SectionHeading } from '../components/shared/SharedComponents';
import { 
  TrendingDown, Download, AlertCircle, 
  ChevronRight, RefreshCw,
  ShieldCheck, Target, Sparkles
} from 'lucide-react';
import { LeadCapture } from '../components/LeadCapture';
import { ShareSection } from '../components/ShareSection';
import { auditService } from '../services/auditService';
import { referralService } from '../services/referralService';
import { AuditResult } from '../types';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PDFReport } from '../components/PDFReport';

const ResultPage = () => {
  const { id } = useParams<{ id: string }>();
  const { result: storeResult, resetAudit, input } = useAuditStore();
  const [result, setResult] = useState<AuditResult | null>(storeResult);
  const [isLoading, setIsLoading] = useState(!storeResult && !!id);
  const [error, setError] = useState<string | null>(null);
  const [referralStats, setReferralStats] = useState({ clicks: 0, conversions: 0 });

  useEffect(() => {
    const fetchAudit = async () => {
      if (!id) return;
      
      // Agar store mein pehle se hai aur ID match kar rahi hai, toh fetch mat karo
      if (storeResult && (storeResult.publicId === id || storeResult.id === id)) {
        setResult(storeResult);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data = await auditService.getAuditByPublicId(id);
        if (data) {
          setResult(data);
        } else {
          setError('Audit not found');
        }
      } catch (err) {
        console.error('Failed to fetch audit:', err);
        setError('Failed to load strategic report');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAudit();
  }, [id, storeResult]);

  useEffect(() => {
    const fetchStats = async () => {
      const code = result?.publicId || result?.id;
      if (code) {
        const stats = await referralService.getReferralStats(code);
        setReferralStats(stats);
      }
    };
    if (result) fetchStats();
  }, [result]);

  // Update dynamic OG tags (Client-side only, for social share crawlers we'd need SSR)
  useEffect(() => {
    if (result) {
      const savings = (result.potentialSavings * 12).toLocaleString();
      document.title = `Potential AI Savings: $${savings}/year | Vyay`;
      
      // Meta tags update (best effort)
      const description = `We found $${savings} in potential annualized savings in our AI stack. Check out the full audit report.`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', `AI Audit Result: $${savings}/year Saved`);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      
      // Dynamic OG Image URL (placeholder for now, would be handled by /api/og/:id)
      const ogImageUrl = `${window.location.origin}/api/og?savings=${result.potentialSavings * 12}&count=${result.recommendations.length}&grade=${result.metrics.efficiencyGrade}`;
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImageUrl);
    }
  }, [result]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-8" role="status" aria-live="polite">
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" aria-hidden="true" />
        </div>
        <p className="text-muted-foreground font-serif italic">Decrypting strategic audit data...</p>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-foreground/5 flex items-center justify-center">
            <AlertCircle size={48} className="text-muted-foreground opacity-20" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-serif italic">{error || 'Audit Not Found'}</h1>
          <p className="text-muted-foreground max-w-md mx-auto">This strategic report may have expired or was never finalized. Initiate a new audit to generate a fresh profile.</p>
        </div>
        <Link to="/audit" onClick={resetAudit}>
          <Button size="xl">Initiate New Audit</Button>
        </Link>
      </div>
    );
  }

  const annualSavings = result.potentialSavings * 12;
  const confidenceColors = {
    high: 'success' as const,
    medium: 'primary' as const,
    low: 'warning' as const,
  };

  return (
    <main className="container mx-auto px-6 pt-32 pb-24 max-w-5xl animate-in fade-in duration-1000">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div className="space-y-4">
          <Badge variant="primary">Strategic Expenditure Report</Badge>
          <h1 className="text-6xl md:text-7xl font-serif italic tracking-tighter leading-tight">
            Audit Intelligence <br />
            <span className="text-muted-foreground opacity-40">Ref: {(result.publicId || result.id).substring(0, 8).toUpperCase()}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Deterministic analysis for organizational engineering profiles and AI infrastructure sub-optimality.
          </p>
        </div>
        <div className="flex flex-wrap items-stretch gap-3">
          <ShareSection publicId={result.publicId} annualSavings={annualSavings} />
          <PDFDownloadLink 
            document={<PDFReport result={result} input={input} />} 
            fileName={`Vyay_Audit_${(result.publicId || result.id).substring(0, 8)}.pdf`}
          >
            {({ loading }) => (
              <Button 
                size="md" 
                className="shadow-2xl shadow-primary/20 bg-foreground text-background hover:bg-foreground/90 h-auto py-2"
                aria-label="Download executive PDF report"
                disabled={loading}
              >
                <Download size={16} aria-hidden="true" /> 
                <span className="whitespace-nowrap">{loading ? 'Preparing Report...' : 'Executive PDF'}</span>
              </Button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
      
      {/* Savings Hero */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="md:col-span-2 bg-foreground text-background overflow-hidden relative group">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-2">Projected Annual Recovery</p>
                <p className="text-7xl md:text-8xl font-serif italic tracking-tighter text-background">${annualSavings.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-primary text-background rounded-2xl rotate-12">
                <TrendingDown size={32} />
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 border-t border-background/10 pt-8">
              <div>
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-1">Monthly Optimization</p>
                <p className="text-2xl font-serif text-background">${result.potentialSavings.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-1">Efficiency Grade</p>
                <p className="text-2xl font-serif text-background italic">{result.metrics.efficiencyGrade}</p>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-40 mb-1">Benchmark Position</p>
                <p className="text-sm font-serif text-background/80 italic">{result.metrics.benchmarkInsight}</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700" />
        </Card>

        {result.potentialSavings >= 500 ? (
          <Card className="bg-primary flex flex-col justify-between items-center text-center py-10 text-background border-none shadow-2xl shadow-primary/40 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-background/20 flex items-center justify-center text-background mx-auto">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-serif italic">High Impact Detected</h3>
              <p className="text-sm text-background/80 px-4">
                Your savings potential exceeds $500/mo. For complex credit migrations and enterprise optimization, we recommend a direct consultation.
              </p>
            </div>
            <div className="space-y-3 w-full px-6 relative z-10">
              <a href="https://credex.ai/consult" target="_blank" rel="noopener noreferrer">
                <Button size="md" className="w-full bg-background text-primary hover:bg-background/90 font-bold border-none">
                  Schedule Strategic Call
                </Button>
              </a>
              {input && (
                <PDFDownloadLink 
                  document={<PDFReport result={result} input={input} />} 
                  fileName={`Vyay-Audit-${result.publicId || result.id}.pdf`}
                  className="block w-full"
                >
                  {({ loading }) => (
                    <Button variant="outline" size="sm" className="w-full border-background/20 text-background hover:bg-background/10" disabled={loading}>
                      <Download size={14} className="mr-2" /> {loading ? 'Preparing PDF...' : 'Download Executive PDF'}
                    </Button>
                  )}
                </PDFDownloadLink>
              )}
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-background/10 rounded-full blur-2xl" />
          </Card>
        ) : (
          <Card className="flex flex-col justify-between items-center text-center py-12 border-foreground/10">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-serif italic">Operational Trust</h3>
              <p className="text-sm text-muted-foreground px-4">
                Our audit uses 100% deterministic logic. Recommendations are conservative and financially defensible.
              </p>
            </div>
            <div className="w-full px-6 space-y-3">
              <Badge>Verified Market Rates</Badge>
              {input && (
                <PDFDownloadLink 
                  document={<PDFReport result={result} input={input} />} 
                  fileName={`Vyay-Audit-${result.publicId || result.id}.pdf`}
                  className="block w-full"
                >
                  {({ loading }) => (
                    <Button variant="outline" size="sm" className="w-full border-foreground/10 hover:bg-foreground/5" disabled={loading}>
                      <Download size={14} className="mr-2" /> {loading ? 'Preparing PDF...' : 'Download Report PDF'}
                    </Button>
                  )}
                </PDFDownloadLink>
              )}
            </div>
          </Card>
        )}
      </div>

      {/* AI Summary Block */}
      <Card padding="md" className="mb-16 border-primary/20 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-primary/20">
          <Sparkles size={48} />
        </div>
        <div className="flex gap-6 items-start relative z-10">
          <div className="p-3 bg-primary/10 rounded-xl text-primary">
            <Target size={24} />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-lg font-serif">Executive AI Summary</h4>
              <Badge variant="primary" className="text-[8px] py-0 px-1">Gemini 2.5 Flash</Badge>
            </div>
            {result.aiSummary ? (
              <p className="text-foreground/80 leading-relaxed italic text-lg font-serif animate-in fade-in duration-700">
                "{result.aiSummary}"
              </p>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 bg-primary/10 rounded w-full" />
                  <div className="h-4 bg-primary/10 rounded w-5/6" />
                </div>
                <p className="text-muted-foreground text-xs italic opacity-60">
                  Note: Strategic narrative generation was bypassed due to API latency. Your deterministic metrics remain 100% accurate.
                </p>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      <div className="space-y-8 mb-24">
        <SectionHeading title="Strategic Recommendations" subtitle="Specific, actionable steps to rationalize your AI infrastructure." align="left" />
        
        {result.recommendations.length > 0 ? (
          result.recommendations.map((rec, index) => {
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
                  
                  <div className="md:w-48 flex items-center">
                    <Button className="w-full group" size="md">
                      Implement Action <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <Card className="p-16 text-center space-y-6 border-dashed border-2">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto text-success">
              <ShieldCheck size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-serif italic">Operational Excellence Detected</h3>
              <p className="text-muted-foreground max-w-md mx-auto text-lg">
                Your AI infrastructure spend is already highly optimized. Our engine found no significant redundancies or tier mismatches in your current configuration.
              </p>
            </div>
            <div className="pt-4">
              <Badge variant="success">Grade A Infrastructure</Badge>
            </div>
          </Card>
        )}
      </div>

      {/* Lead Capture */}
      <div className="mb-24">
        <LeadCapture auditId={result.publicId || result.id} result={result} />
      </div>

      {/* Referral Program */}
      <div className="mb-24">
        <SectionHeading 
          title="Viral Growth Loop" 
          subtitle="Share your audit results and track how many other teams you've helped optimize."
          align="left"
        />
        <Card className="bg-foreground text-background mt-8 overflow-hidden relative">
          <div className="relative z-10 p-8 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 flex-1">
              <Badge variant="primary">Ambassador Link</Badge>
              <h3 className="text-4xl font-serif italic">Share the Intelligence</h3>
              <p className="text-background/60 max-w-md">
                Help other engineering leads rationalize their AI spend. For every audit generated through your link, we improve our global benchmark accuracy.
              </p>
              
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-widest opacity-40 mb-1">Audit Clicks</p>
                  <p className="text-3xl font-serif text-primary">{referralStats.clicks}</p>
                </div>
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-widest opacity-40 mb-1">Conversions</p>
                  <p className="text-3xl font-serif text-primary">{referralStats.conversions}</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <ShareSection publicId={result.publicId || result.id} annualSavings={annualSavings} />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </Card>
      </div>

      {/* Footer Actions */}
      <div className="pt-24 border-t border-foreground/10 text-center space-y-8">
        <h3 className="text-3xl font-serif italic">Operational Recalibration</h3>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/audit" onClick={resetAudit}>
            <Button variant="outline" size="xl"><RefreshCw size={20} /> Recalibrate Audit</Button>
          </Link>
          <a href="https://credex.ai" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="shadow-2xl shadow-primary/20 bg-foreground text-background hover:bg-foreground/90">
              Visit Parent Platform
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ResultPage;
