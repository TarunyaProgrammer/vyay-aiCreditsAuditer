import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../shared/SharedComponents';
import { Zap, Github, Shield, ArrowRight, Clock, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const isAudit = location.pathname.includes('/audit');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4 gap-3 pointer-events-none" aria-label="Global Navigation">
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Left Pill: Logo */}
        <Link 
          to="/" 
          className="flex items-center justify-center rounded-full w-12 h-12 bg-background border border-foreground/5 shadow-sm hover:scale-105 transition-transform overflow-hidden p-2"
          aria-label="Vyay Home"
        >
          <img src="/logo_light.png" alt="" className="w-full h-full object-contain" aria-hidden="true" width="48" height="48" />
        </Link>

        {/* Right Pill: Links */}
        <div className="flex items-center gap-8 rounded-2xl px-8 py-3 bg-background border border-foreground/5 shadow-sm" role="list">
          <Link to="/" className="text-[13px] font-medium hover:text-primary transition-colors" role="listitem">Strategy</Link>
          <Link to="/pricing" className="text-[13px] font-medium hover:text-primary transition-colors" role="listitem">Market Data</Link>
          {!isAudit && (
            <Link to="/audit" className="text-[13px] font-medium text-primary hover:opacity-80 transition-opacity flex items-center gap-1 group" role="listitem">
              Initiate Audit <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-background pb-12 pt-24 px-6 overflow-hidden" aria-label="Site Footer">
      <div className="container mx-auto">
        <div className="relative bg-foreground text-background rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">
          {/* Corner Accents */}
          <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-background/20" aria-hidden="true" />
          <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-background/20" aria-hidden="true" />
          <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-background/20" aria-hidden="true" />
          <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-background/20" aria-hidden="true" />

          {/* Large Watermark */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none select-none" aria-hidden="true">
            <h2 className="text-[25vw] font-serif italic text-background/[0.03] leading-none tracking-tighter">
              vyay.
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contacts Section */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-serif italic tracking-tight">Intelligence</h3>
                <a href="mailto:tarunyak.10@gmail.com" className="text-xl md:text-2xl font-serif italic text-background hover:opacity-80 transition-opacity underline decoration-background/30 underline-offset-8" aria-label="Contact intelligence team at tarunyak.10@gmail.com">
                  tarunyak.10@gmail.com <ArrowUpRight className="inline-block" size={24} />
                </a>
              </div>
              
              <div className="pt-8 flex flex-wrap gap-6">
                <Link to="/audit">
                  <Button variant="outline" className="border-background/10 hover:bg-background hover:text-foreground rounded-full px-8" aria-label="Initiate new audit">
                    Initiate Audit
                  </Button>
                </Link>
                <a 
                  href="https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer" 
                  className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                  aria-label="Visit Vyay GitHub Repository"
                >
                  <Github size={18} aria-hidden="true" /> GitHub Repository ↗
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 items-start lg:justify-end text-left lg:text-right">
              <div className="space-y-6">
                <h4 className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-40 font-bold">Protocol</h4>
                <div className="flex flex-col gap-4">
                  <Link to="/" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Strategy</Link>
                  <Link to="/pricing" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Market Data</Link>
                  <Link to="/audit" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Audit Engine</Link>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-40 font-bold">Foundation</h4>
                <div className="flex flex-col gap-4">
                  <Link to="/about" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">About</Link>
                  <Link to="/methodology" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Methodology</Link>
                  <Link to="/privacy" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Privacy</Link>
                  <Link to="/terms" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Terms</Link>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-40 font-bold">Social</h4>
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">X / Twitter</a>
                  <a href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">LinkedIn</a>
                  <a href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">Product Hunt</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="relative z-10 mt-32 flex flex-col md:flex-row justify-between items-end gap-6 pt-12 border-t border-background/5">
            <div className="space-y-4">
              <Link to="/" aria-label="Vyay Home" className="focus-visible:ring-2 focus-visible:ring-primary outline-none rounded-lg">
                <img src="/logo_light.png" alt="" className="h-8 w-auto object-contain opacity-20 hover:opacity-100 transition-opacity" aria-hidden="true" width="80" height="32" loading="lazy" />
              </Link>
              <p className="text-xs opacity-40 max-w-xs leading-relaxed italic">
                Deterministic AI infrastructure auditing for engineering leadership. Built for the Credex Web Development Internship.
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="text-[10px] font-sans uppercase tracking-[0.4em] opacity-40 font-bold">
                © 2026 VYAY STUDIO
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock size={14} className="opacity-50" aria-hidden="true" />
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">
                  Audit Snapshot: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
