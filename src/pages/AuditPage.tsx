import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuditStore } from '../store/auditStore';
import { runAudit } from '../rules';
import { SUPPORTED_TOOLS } from '../data/pricing';
import { Button, Card, SectionHeading, Badge } from '../components/shared/SharedComponents';
import { AuditInputSchema, ToolInputSchema } from '../lib/validation';
import { ArrowRight, ArrowLeft, Plus, Trash2, Zap, Info, Calculator, Users } from 'lucide-react';
import { ToolInput } from '../types';

const AuditPage = () => {
  const navigate = useNavigate();
  const { step, nextStep, prevStep, input, updateInput, setResult } = useAuditStore();
  const [errors, setErrors] = useState<any>({});

  const validateStep = () => {
    if (step === 1) {
      const result = AuditInputSchema.pick({ teamSize: true }).safeParse(input);
      if (!result.success) {
        setErrors(result.error.flatten().fieldErrors);
        return false;
      }
    }
    if (step === 2 && input.tools.length === 0) {
      setErrors({ tools: ['At least one tool is required'] });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (validateStep()) nextStep();
  };

  const addTool = () => {
    const newTool: ToolInput = {
      toolId: SUPPORTED_TOOLS[0].id,
      tier: 'pro',
      userCount: input.teamSize,
      monthlySpend: 20 * input.teamSize,
    };
    updateInput({ tools: [...input.tools, newTool] });
  };

  const removeTool = (index: number) => {
    updateInput({ tools: input.tools.filter((_, i) => i !== index) });
  };

  const updateTool = (index: number, updates: Partial<ToolInput>) => {
    const newTools = [...input.tools];
    newTools[index] = { ...newTools[index], ...updates };
    updateInput({ tools: newTools });
  };

  const handleStartAudit = () => {
    const result = AuditInputSchema.safeParse(input);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }
    const auditResult = runAudit(input);
    setResult(auditResult);
    navigate(`/result/${auditResult.id}`);
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
      <div className="mb-16 flex justify-center gap-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${step >= s ? 'bg-primary' : 'bg-foreground/10'}`} />
            {s < 3 && <div className="w-12 h-[1px] bg-foreground/10" />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <SectionHeading 
            title="Strategic Parameters" 
            subtitle="Define the core metrics of your engineering organization."
          />
          
          <Card className="max-w-xl mx-auto space-y-8">
            <div className="space-y-4">
              <label className="block space-y-2">
                <span className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-muted-foreground flex items-center gap-2">
                  <Users size={14} /> Engineering Team Size
                </span>
                <input 
                  type="number" 
                  value={input.teamSize}
                  onChange={(e) => updateInput({ teamSize: parseInt(e.target.value) || 0 })}
                  className={`w-full bg-background border-2 ${errors.teamSize ? 'border-red-500/50' : 'border-foreground/10'} rounded-2xl p-6 text-3xl font-serif focus:border-primary outline-none transition-all`}
                  min="1"
                />
                {errors.teamSize && <p className="text-red-500 text-xs font-medium">{errors.teamSize[0]}</p>}
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-muted-foreground flex items-center gap-2">
                  <Zap size={14} /> Primary Use Case
                </span>
                <select 
                  value={input.useCase}
                  onChange={(e) => updateInput({ useCase: e.target.value })}
                  className="w-full bg-background border-2 border-foreground/10 rounded-2xl p-4 text-lg font-serif outline-none focus:border-primary transition-all"
                >
                  <option value="early-stage">Early Stage Startup</option>
                  <option value="growth">Growth Engineering</option>
                  <option value="enterprise">Enterprise Systems</option>
                  <option value="agency">Development Agency</option>
                </select>
              </label>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex gap-4">
              <Info className="text-primary shrink-0" size={20} />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Team size influences plan efficiency recommendations. Large teams on individual seats may be flagged for administrative overhead.
              </p>
            </div>
          </Card>
          
          <div className="flex justify-center">
            <Button size="xl" onClick={handleNext} className="group">
              Define Tooling Stack <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
          <SectionHeading 
            title="Service Inventory" 
            subtitle="Add the AI tools currently active across your organization."
          />
          
          <div className="space-y-6">
            {input.tools.map((tool, index) => (
              <Card key={index} padding="sm" className="relative group/card">
                <button 
                  onClick={() => removeTool(index)}
                  className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all opacity-0 group-hover/card:opacity-100"
                >
                  <Trash2 size={16} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground font-bold">Tool</span>
                    <select 
                      value={tool.toolId}
                      onChange={(e) => updateTool(index, { toolId: e.target.value })}
                      className="w-full bg-background border border-foreground/10 rounded-xl p-3 text-sm outline-none focus:border-primary"
                    >
                      {SUPPORTED_TOOLS.map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground font-bold">Tier</span>
                    <select 
                      value={tool.tier}
                      onChange={(e) => updateTool(index, { tier: e.target.value })}
                      className="w-full bg-background border border-foreground/10 rounded-xl p-3 text-sm outline-none focus:border-primary"
                    >
                      {SUPPORTED_TOOLS.find(t => t.id === tool.toolId)?.plans.map(p => (
                        <option key={p.name} value={p.name.toLowerCase()}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground font-bold">Monthly Spend</span>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">$</span>
                      <input 
                        type="number" 
                        value={tool.monthlySpend}
                        onChange={(e) => updateTool(index, { monthlySpend: parseFloat(e.target.value) || 0 })}
                        className="w-full bg-background border border-foreground/10 rounded-xl p-3 pl-8 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground font-bold">Seats</span>
                    <input 
                      type="number" 
                      value={tool.userCount}
                      onChange={(e) => updateTool(index, { userCount: parseInt(e.target.value) || 0 })}
                      className="w-full bg-background border border-foreground/10 rounded-xl p-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </Card>
            ))}

            <button 
              onClick={addTool}
              className="w-full border-2 border-dashed border-foreground/10 rounded-[2rem] p-8 flex items-center justify-center gap-2 text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all"
            >
              <Plus size={20} /> Add Service to Inventory
            </button>
            {errors.tools && <p className="text-red-500 text-xs text-center">{errors.tools[0]}</p>}
          </div>
          
          <div className="flex gap-4 max-w-xl mx-auto">
            <Button variant="outline" className="flex-1" onClick={prevStep}>
              <ArrowLeft size={20} /> Back
            </Button>
            <Button className="flex-[2]" onClick={handleNext}>
              Review Audit Context <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
          <SectionHeading 
            title="Strategic Review" 
            subtitle="Verify your operational profile before executing the audit engine."
          />
          
          <Card className="max-w-2xl mx-auto divide-y divide-foreground/5 p-0">
            <div className="p-8 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground font-bold mb-1">Company Scope</p>
                <p className="text-2xl font-serif italic">{input.teamSize} Engineers · {input.useCase}</p>
              </div>
              <Calculator size={32} className="text-muted-foreground opacity-20" />
            </div>

            <div className="p-8 space-y-4">
              <p className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground font-bold">Inventory Summary</p>
              <div className="flex flex-wrap gap-2">
                {input.tools.map((t, i) => (
                  <Badge key={i} variant="primary">{t.toolId} · {t.tier}</Badge>
                ))}
              </div>
            </div>

            <div className="p-8 flex justify-between items-center bg-primary/5">
              <div>
                <p className="text-[10px] font-sans uppercase tracking-widest text-primary/70 font-bold mb-1">Estimated Monthly Audit Base</p>
                <p className="text-4xl font-serif text-primary tracking-tighter">${input.tools.reduce((s, t) => s + t.monthlySpend, 0).toLocaleString()}</p>
              </div>
              <Zap size={40} className="text-primary opacity-20 fill-primary" />
            </div>
          </Card>
          
          <div className="flex gap-4 max-w-2xl mx-auto">
            <Button variant="outline" className="flex-1" onClick={prevStep}>
              <ArrowLeft size={20} /> Back
            </Button>
            <Button className="flex-[2]" onClick={handleStartAudit} size="lg">
              Execute Strategic Audit <Zap size={20} className="fill-current" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditPage;
