import { useParams } from 'react-router-dom';

const ResultPage = () => {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Audit ID: {id}</p>
          <h1 className="text-5xl font-serif">Audit Results</h1>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
          Share Report
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-foreground/5 p-8 rounded-3xl border">
          <p className="text-sm text-muted-foreground mb-1">Monthly Spend</p>
          <p className="text-4xl font-serif">$2,450</p>
        </div>
        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
          <p className="text-sm text-primary/60 mb-1">Potential Savings</p>
          <p className="text-4xl font-serif text-primary">$420</p>
        </div>
        <div className="bg-foreground/5 p-8 rounded-3xl border">
          <p className="text-sm text-muted-foreground mb-1">Efficiency Score</p>
          <p className="text-4xl font-serif">82%</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-3xl font-serif italic mb-6">Top Recommendations</h2>
        <div className="h-20 bg-foreground/5 rounded-2xl animate-pulse"></div>
        <div className="h-20 bg-foreground/5 rounded-2xl animate-pulse"></div>
        <div className="h-20 bg-foreground/5 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default ResultPage;
