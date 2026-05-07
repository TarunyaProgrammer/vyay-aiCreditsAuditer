const AuditPage = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-2xl">
      <h1 className="text-5xl font-serif mb-8 text-center">Start Audit</h1>
      <div className="bg-foreground/5 p-12 rounded-3xl border border-dashed border-foreground/20 text-center">
        <p className="text-muted-foreground mb-8 italic">Audit input flow coming soon.</p>
        {/* TODO: Implement multi-step audit form */}
        <div className="h-40 bg-foreground/10 rounded-2xl flex items-center justify-center animate-pulse">
          <span className="text-sm font-sans uppercase tracking-widest opacity-30 font-semibold">Form Placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default AuditPage;
