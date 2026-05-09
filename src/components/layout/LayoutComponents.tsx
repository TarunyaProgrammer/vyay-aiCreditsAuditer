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
    <footer className="bg-background border-t border-foreground/5 pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Section: CTA & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          {/* Brand & CTA */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3">
                <img src="/logo_light.png" alt="Vyay Logo" className="h-10 w-auto object-contain" />
                <span className="text-3xl font-serif italic tracking-tighter">Vyay</span>
              </Link>
              <h3 className="text-4xl md:text-5xl font-serif italic leading-[1.1] tracking-tight max-w-md">
                Ready to recapture your <br />
                <span className="text-primary">AI Infrastructure Capital?</span>
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/audit">
                <Button size="xl" className="rounded-full px-10 shadow-2xl shadow-primary/20">
                  Start Free Audit <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer" className="inline-flex items-center justify-center rounded-full border border-foreground/10 px-10 h-14 font-medium hover:bg-foreground hover:text-background transition-all">
                <Github size={20} className="mr-2" /> GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:pl-12">
            <div className="space-y-6">
              <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-muted-foreground">Platform</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/audit" className="hover:text-primary transition-colors">Audit Engine</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Market Reference</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">Methodology</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-muted-foreground">Resources</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Audit Case Studies</Link></li>
                <li><Link to="/tools" className="hover:text-primary transition-colors">Free Utility Suite</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-sans uppercase tracking-[0.2em] text-[10px] font-bold text-muted-foreground">Legal</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Massive Logo Signature */}
        <div className="relative mb-24 pointer-events-none select-none">
          <h2 className="text-[20vw] font-serif italic text-foreground/[0.03] leading-none tracking-tighter text-center translate-y-12">
            Vyay.
          </h2>
          <div className="absolute inset-0 flex items-center justify-center translate-y-8">
            <img src="/logo_light.png" alt="" className="w-[10vw] h-auto object-contain opacity-[0.05]" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
              © 2026 Vyay Intelligence
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/10" />
            <p className="text-[11px] text-muted-foreground">
              Built for Credex Web Development Internship
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Shield size={14} className="text-primary/40" />
            <p className="text-[11px] text-muted-foreground italic font-medium">
              Deterministic data points as of May 09, 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
