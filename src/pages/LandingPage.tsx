import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-foreground/5 px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Auditing $1.2M+ in monthly AI spend
          </div>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[0.9] tracking-tighter">
            Stop leaking cash on <span className="italic">Shadow AI.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            Vyay audits your team's AI subscriptions and API spend, identifying overlaps and oversized plans in under 60 seconds. No auth required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/audit" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 hover:scale-[1.02] transition-transform group">
              Start Free Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-full text-lg font-medium border hover:bg-foreground/5 transition-colors">
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-foreground/5 border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-widest opacity-40 mb-12">Supports the entire stack</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Cursor', 'ChatGPT', 'Claude', 'Copilot', 'Gemini', 'Perplexity'].map((tool) => (
              <span key={tool} className="text-2xl font-serif font-semibold">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif">60-Second Audit</h3>
              <p className="text-muted-foreground leading-relaxed">Simply input your tools and seat counts. Our deterministic rule engine identifies leaks instantly.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif">Zero Friction</h3>
              <p className="text-muted-foreground leading-relaxed">No account needed. No credit card required. We believe in showing value before asking for data.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif">Deep Logic</h3>
              <p className="text-muted-foreground leading-relaxed">We don't just find tools; we find feature overlaps between things like Cursor and Copilot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Savings Section */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-16 italic">Average startup saves $420/mo per 10 engineers.</h2>
          <div className="bg-background/10 rounded-3xl p-8 md:p-12 border border-background/20 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="text-left">
                <p className="text-background/60 text-sm uppercase tracking-wider mb-2">Example Case Study</p>
                <h4 className="text-2xl font-serif">Series A Engineering Team</h4>
              </div>
              <div className="text-right">
                <p className="text-5xl font-serif text-primary">$5,120 <span className="text-lg opacity-60 italic">saved/yr</span></p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                { label: 'Identified', value: '3 Overlaps' },
                { label: 'Optimized', value: '2 Tiers' },
                { label: 'Alternatives', value: '1 API' },
                { label: 'Audit Time', value: '42 seconds' },
              ].map((stat) => (
                <div key={stat.label} className="bg-background/5 p-4 rounded-xl border border-background/10">
                  <p className="text-xs text-background/40 uppercase mb-1">{stat.label}</p>
                  <p className="text-lg font-medium">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-32 text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-serif mb-8 leading-tight">Ready to reclaim your <span className="italic">AI budget?</span></h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join 200+ teams who have optimized their stack with Vyay.
          </p>
          <Link to="/audit" className="bg-primary text-primary-foreground px-12 py-5 rounded-full text-xl font-medium inline-flex items-center gap-3 hover:scale-[1.02] transition-transform">
            Start Audit Now <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
