import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../shared/SharedComponents';
import { Zap, Github, Shield, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const isAudit = location.pathname.includes('/audit');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4 gap-3 pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Left Pill: Logo */}
        <Link 
          to="/" 
          className="flex items-center justify-center rounded-full w-12 h-12 bg-background border border-foreground/5 shadow-sm hover:scale-105 transition-transform overflow-hidden p-2"
        >
          <img src="/logo_light.png" alt="Vyay Logo" className="w-full h-full object-contain" />
        </Link>

        {/* Right Pill: Links */}
        <div className="flex items-center gap-8 rounded-2xl px-8 py-3 bg-background border border-foreground/5 shadow-sm">
          <Link to="/" className="text-[13px] font-medium hover:text-primary transition-colors">Strategy</Link>
          <Link to="/pricing" className="text-[13px] font-medium hover:text-primary transition-colors">Market Data</Link>
          {!isAudit && (
            <Link to="/audit" className="text-[13px] font-medium text-primary hover:opacity-80 transition-opacity flex items-center gap-1 group">
              Initiate Audit <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-background pb-12 pt-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative bg-foreground text-background rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">
          {/* Corner Accents */}
          <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-background/20" />
          <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-background/20" />
          <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-background/20" />
          <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-background/20" />

          {/* Large Watermark */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none select-none">
            <h2 className="text-[25vw] font-serif italic text-background/[0.03] leading-none tracking-tighter">
              vyay.
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contacts Section */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-serif italic tracking-tight">Intelligence</h3>
                <a href="mailto:intelligence@vyay.ai" className="text-xl md:text-2xl font-serif italic text-primary hover:opacity-80 transition-opacity underline decoration-primary/30 underline-offset-8">
                  intelligence@vyay.ai ↗
                </a>
              </div>
              
              <div className="pt-8 flex flex-wrap gap-6">
                <Link to="/audit">
                  <Button variant="outline" className="border-background/10 hover:bg-background hover:text-foreground rounded-full px-8">
                    Initiate Audit
                  </Button>
                </Link>
                <a href="https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
                  <Github size={18} /> GitHub Repository ↗
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-6 flex flex-col justify-between items-start lg:items-end">
              <div className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-40 font-bold mb-12">
                © 2026 VYAY STUDIO
              </div>
              
              <div className="flex flex-wrap justify-start lg:justify-end gap-x-8 gap-y-4">
                <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing ↗</Link>
                <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">Methodology ↗</Link>
                <Link to="/privacy" className="text-sm font-medium hover:text-primary transition-colors">Privacy ↗</Link>
                <Link to="/terms" className="text-sm font-medium hover:text-primary transition-colors">Terms ↗</Link>
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="relative z-10 mt-32 flex flex-col md:flex-row justify-between items-end gap-6 pt-12 border-t border-background/5">
            <p className="text-xs opacity-40 max-w-xs leading-relaxed italic">
              Deterministic AI infrastructure auditing for engineering leadership. Built for the Credex Web Development Internship.
            </p>
            <div className="flex items-center gap-3">
              <Shield size={14} className="text-primary/40" />
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
                May 09, 2026 Snapshot
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
