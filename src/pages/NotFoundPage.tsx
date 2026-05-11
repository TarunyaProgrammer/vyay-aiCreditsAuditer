import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/shared/SharedComponents';
import { AlertCircle, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <main className="container mx-auto px-6 py-48 text-center space-y-12 animate-in fade-in duration-1000">
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-foreground/5 flex items-center justify-center relative">
          <AlertCircle size={48} className="text-muted-foreground opacity-20" />
          <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping opacity-20" aria-hidden="true" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-7xl md:text-8xl font-serif italic tracking-tighter leading-none">
          Sector 404 <br />
          <span className="text-muted-foreground opacity-40">Not Found</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto font-serif italic">
          The requested strategic node does not exist or has been decommissioned from the active grid.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link to="/">
          <Button variant="outline" size="xl">
            <ArrowLeft size={20} /> Return to Strategy
          </Button>
        </Link>
        <Link to="/audit">
          <Button size="xl" className="shadow-2xl shadow-primary/20 bg-foreground text-background hover:bg-foreground/90">
            Initiate New Audit
          </Button>
        </Link>
      </div>

      <div className="pt-24 opacity-20">
        <p className="text-[10px] font-sans uppercase tracking-[0.5em] font-bold">Vyay Protocol Error: Routing Exception</p>
      </div>
    </main>
  );
};

export default NotFoundPage;
