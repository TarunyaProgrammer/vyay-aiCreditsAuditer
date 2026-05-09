import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuditStore } from '../store/auditStore';
import { runAudit } from '../rules';
import { SUPPORTED_TOOLS } from '../data/pricing';
import { ToolInput, PlanTier } from '../types';
import { ArrowRight, ArrowLeft, Check, Calculator, ShieldCheck, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AuditPage = () => {
  const navigate = useNavigate();
  const { step, nextStep, prevStep, input, updateInput, setResult } = useAuditStore();
  const [selectedToolIds, setSelectedToolIds] = useState<string[]>(input.tools.map(t => t.toolId));

  const handleToolToggle = (toolId: string) => {
    if (selectedToolIds.includes(toolId)) {
      setSelectedToolIds(selectedToolIds.filter(id => id !== toolId));
    } else {
      setSelectedToolIds([...selectedToolIds, toolId]);
    }
  };

  const handleStartAudit = () => {
    const tools: ToolInput[] = selectedToolIds.map(id => {
      const tool = SUPPORTED_TOOLS.find(t => t.id === id);
      const existing = input.tools.find(t => t.toolId === id);
      return {
        toolId: id,
        tier: existing?.tier || 'pro',
        userCount: input.teamSize,
        monthlySpend: existing?.monthlySpend || (tool?.plans.find(p => p.name.toLowerCase() === 'pro')?.price || 20) * input.teamSize,
      };
    });
    
    const finalInput = { ...input, tools };
    updateInput(finalInput);
    const result = runAudit(finalInput);
    setResult(result);
    navigate(`/result/${result.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl">
      <div className="mb-12 flex justify-between items-center">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500",
              step >= s ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground/20 text-muted-foreground"
            )}>
              {step > s ? <Check size={18} /> : s}
            </div>
            {s < 3 && <div className={cn("w-20 h-0.5 mx-2", step > s ? "bg-primary" : "bg-muted-foreground/10")} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4 italic">Organization Context</h1>
            <p className="text-muted-foreground">Define the scope of your engineering infrastructure.</p>
          </div>
          
          <div className="bg-foreground/5 p-12 rounded-3xl border border-foreground/10 space-y-6">
            <label className="block">
              <span className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-4 block font-semibold">Team Size (Engineers)</span>
              <input 
                type="number" 
                value={input.teamSize}
                onChange={(e) => updateInput({ teamSize: parseInt(e.target.value) || 1 })}
                className="w-full bg-background border-2 border-foreground/10 rounded-2xl p-4 text-2xl font-serif focus:border-primary outline-none transition-all"
                min="1"
              />
            </label>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                <Calculator className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-sm">Deterministic Baseline</h4>
                  <p className="text-xs text-muted-foreground">Calculations are pegged to current vendor market rates.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                <ShieldCheck className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-sm">Zero Data Persistence</h4>
                  <p className="text-xs text-muted-foreground">Input data is transient and never leaves your session.</p>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={nextStep}
            className="w-full bg-foreground text-background py-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all group"
          >
            Define Tooling Landscape <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4 italic">Service Inventory</h1>
            <p className="text-muted-foreground">Select the AI agents and infrastructure currently in use.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SUPPORTED_TOOLS.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleToolToggle(tool.id)}
                className={cn(
                  "p-6 rounded-3xl border-2 text-left transition-all duration-300 relative overflow-hidden group",
                  selectedToolIds.includes(tool.id) 
                    ? "border-primary bg-primary/5" 
                    : "border-foreground/10 hover:border-foreground/20 bg-foreground/5"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground font-semibold">{tool.category}</span>
                  {selectedToolIds.includes(tool.id) && <Check size={20} className="text-primary" />}
                </div>
                <h3 className="text-xl font-serif mb-1">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.provider}</p>
                
                {selectedToolIds.includes(tool.id) && (
                  <div className="absolute bottom-0 right-0 p-2 opacity-10">
                    <Zap size={40} className="text-primary fill-primary" />
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevStep}
              className="flex-1 bg-foreground/5 text-foreground py-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-foreground/10 transition-all"
            >
              <ArrowLeft size={20} /> Back
            </button>
            <button 
              onClick={nextStep}
              disabled={selectedToolIds.length === 0}
              className="flex-[2] bg-foreground text-background py-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
            >
              Analyze Expenditure <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4 italic">Refine Parameters</h1>
            <p className="text-muted-foreground">Adjust tier and spend data for maximum audit accuracy.</p>
          </div>
          
          <div className="space-y-4">
            {selectedToolIds.map(id => {
              const tool = SUPPORTED_TOOLS.find(t => t.id === id);
              return (
                <div key={id} className="bg-foreground/5 p-6 rounded-3xl border border-foreground/10 flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-serif">{tool?.name}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{tool?.provider}</p>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <select 
                      className="bg-background border border-foreground/10 rounded-xl p-2 text-sm outline-none focus:border-primary"
                      onChange={(e) => {
                        const tier = e.target.value as PlanTier;
                        const plan = tool?.plans.find(p => p.name.toLowerCase() === tier);
                        const spend = (plan?.price || 0) * input.teamSize;
                        updateInput({
                          tools: input.tools.map(t => t.toolId === id ? { ...t, tier, monthlySpend: spend } : t)
                        });
                      }}
                    >
                      {tool?.plans.map(plan => (
                        <option key={plan.name} value={plan.name.toLowerCase()}>{plan.name}</option>
                      ))}
                    </select>
                    <div className="text-right w-24">
                      <p className="text-xs text-muted-foreground uppercase tracking-tighter">Est. Monthly</p>
                      <p className="font-serif text-lg">${(input.tools.find(t => t.toolId === id)?.monthlySpend || 0).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevStep}
              className="flex-1 bg-foreground/5 text-foreground py-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-foreground/10 transition-all"
            >
              <ArrowLeft size={20} /> Back
            </button>
            <button 
              onClick={handleStartAudit}
              className="flex-[2] bg-primary text-primary-foreground py-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 shadow-lg shadow-primary/20 transition-all"
            >
              Finalize Strategic Audit <Zap size={20} className="fill-primary-foreground" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditPage;
