import React from 'react';
import { SectionHeading } from '../components/shared/SharedComponents';

const TermsPage = () => {
  return (
    <main className="container mx-auto px-6 pt-32 pb-24 max-w-4xl animate-in fade-in duration-1000">
      <SectionHeading 
        title="Terms of Protocol" 
        subtitle="Operational boundaries for the Vyay audit platform."
        align="left"
      />

      <div className="space-y-16 mt-16">
        <section className="space-y-4">
          <h2 className="text-2xl font-serif italic border-b border-foreground/5 pb-2">1. Scope of Service</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vyay provides informational infrastructure audits based on deterministic market data. Our reports are intended for strategic guidance and organizational planning. They do not constitute financial or legal advice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif italic border-b border-foreground/5 pb-2">2. Data Accuracy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Recommendations are only as accurate as the data provided during the audit session. While we strive to maintain a 100% accurate market pricing matrix, vendor rates are subject to change without notice. Vyay is not responsible for discrepancies between our benchmarks and actual vendor invoices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif italic border-b border-foreground/5 pb-2">3. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Vyay audit engine, its deterministic logic, and industrial aesthetic are the property of Tarunya Kesharwani, developed as a pre-internship submission for Credex. All brand logos used within the platform belong to their respective owners and are used here for identification and auditing purposes under fair use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif italic border-b border-foreground/5 pb-2">4. Ethical Usage</h2>
          <p className="text-muted-foreground leading-relaxed">
            Users agree not to use the platform for automated scraping, malicious load testing, or any activity that compromises the integrity of our lead-generation funnel.
          </p>
        </section>

        <div className="pt-12 opacity-40">
          <p className="text-[10px] font-sans uppercase tracking-[0.5em] font-bold">Document v1.0 · May 11, 2026</p>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
