import React, { useState } from 'react';
import { Card, Button } from './shared/SharedComponents';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { auditService } from '../services/auditService';
import { emailService } from '../services/emailService';
import { AuditResult } from '../types';

interface LeadCaptureProps {
  auditId: string;
  result: AuditResult;
}

export const LeadCapture: React.FC<LeadCaptureProps> = ({ auditId, result }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent fail for bots
    
    setIsSubmitting(true);
    try {
      await auditService.captureLead(auditId, email, company);
      await emailService.sendAuditReport(email, result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to capture lead:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="bg-primary/5 border-primary/20 p-12 text-center space-y-4">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-serif italic">Report Dispatched</h3>
        <p className="text-muted-foreground">Check your inbox. The full executive brief and implementation roadmap are on their way.</p>
      </Card>
    );
  }

  return (
    <Card padding="lg" className="bg-foreground text-background overflow-hidden relative">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-4xl font-serif italic tracking-tight">Preserve these insights.</h3>
          <p className="text-background/60 text-lg">
            Email this audit report to yourself or your finance team. We'll include a high-resolution PDF and a strategic implementation guide.
          </p>
          <div className="flex gap-4 items-center text-xs text-background/40 font-mono uppercase tracking-widest">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> No Spam</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> PDF Included</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Lead capture form">
          <input 
            id="hp-field"
            type="text" 
            name="b_phone" 
            style={{ display: 'none' }} 
            tabIndex={-1} 
            aria-hidden="true"
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
          <div className="space-y-2">
            <label htmlFor="lead-email" className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-background/20" size={18} aria-hidden="true" />
              <input 
                id="lead-email"
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@company.com"
                className="w-full bg-background/5 border border-background/10 rounded-xl p-4 pl-12 text-background outline-none focus:border-primary/50 transition-all"
                aria-required="true"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="lead-company" className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Company (Optional)</label>
            <input 
              id="lead-company"
              type="text" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Corp"
              className="w-full bg-background/5 border border-background/10 rounded-xl p-4 text-background outline-none focus:border-primary/50 transition-all"
            />
          </div>
          <Button 
            type="submit" 
            size="xl" 
            className="w-full group"
            disabled={isSubmitting}
            aria-label={isSubmitting ? 'Dispatching audit report' : 'Send My Audit Report'}
          >
            {isSubmitting ? 'Dispatching...' : 'Send My Audit Report'} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </form>
      </div>
      <div className="absolute -left-24 -top-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
    </Card>
  );
};
