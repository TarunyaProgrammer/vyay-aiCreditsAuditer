import React from 'react';
import { SectionHeading } from '../components/shared/SharedComponents';
import { EyeOff, Lock, Globe } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <main className="container mx-auto px-6 pt-32 pb-24 max-w-4xl animate-in fade-in duration-1000">
      <SectionHeading 
        title="Privacy Protocol" 
        subtitle="Zero-Auth auditing with maximum data discretion."
        align="center"
      />

      <div className="space-y-12 mt-16">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1 p-3 bg-primary/10 rounded-xl text-primary flex justify-center"><EyeOff size={24} /></div>
          <div className="md:col-span-11 space-y-4">
            <h2 className="text-2xl font-serif italic">Zero Personal Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vyay does not require account creation, SSO integration, or access to your financial accounts. Our audit is performed purely on the data you provide in the session. We do not store any sensitive corporate credentials.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1 p-3 bg-primary/10 rounded-xl text-primary flex justify-center"><Lock size={24} /></div>
          <div className="md:col-span-11 space-y-4">
            <h2 className="text-2xl font-serif italic">Ephemeral In-Memory Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Audit logic is executed client-side where possible. Final reports are persisted to our secure Supabase instance with unique, non-guessable identifiers (UUIDs) for sharing. You maintain total control over your shareable link.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1 p-3 bg-primary/10 rounded-xl text-primary flex justify-center"><Globe size={24} /></div>
          <div className="md:col-span-11 space-y-4">
            <h2 className="text-2xl font-serif italic">Lead Capture Integrity</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you submit your email for an Executive PDF, that data is stored separately from your audit results to ensure anonymity of the audit data itself. We use Resend for transactional emails, adhering to strict anti-spam protocols.
            </p>
          </div>
        </section>

        <div className="pt-12 border-t border-foreground/5 text-center">
          <p className="text-xs text-muted-foreground italic">
            Questions regarding our privacy protocol? Contact our lead architect at <a href="mailto:tarunyak.10@gmail.com" className="underline hover:text-primary transition-colors">tarunyak.10@gmail.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
