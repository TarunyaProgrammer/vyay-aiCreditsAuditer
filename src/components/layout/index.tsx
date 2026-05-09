import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../shared';
import { Zap, Github, Shield } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const isAudit = location.pathname.includes('/audit');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-foreground text-background rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <Zap size={24} className="fill-background" />
          </div>
          <span className="text-2xl font-serif italic tracking-tighter">Vyay</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">Strategy</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Market Data</Link>
          {!isAudit && (
            <Link to="/audit">
              <Button size="sm">Initiate Audit</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-foreground/10 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Zap size={24} className="text-foreground fill-foreground" />
              <span className="text-2xl font-serif italic tracking-tighter">Vyay</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Empowering engineering leadership with deterministic financial intelligence to optimize AI infrastructure expenditure.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer" className="p-2 rounded-lg hover:bg-foreground/5 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-foreground/5 transition-colors">
                <Shield size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs font-bold text-muted-foreground">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/audit" className="hover:text-primary transition-colors">Audit Engine</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Market Reference</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Methodology</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans uppercase tracking-[0.2em] text-xs font-bold text-muted-foreground">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Vyay Intelligence. Built for the Credex Web Development Internship.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Deterministic data points as of May 09, 2026.
          </p>
        </div>
      </div>
    </footer>
  );
};
