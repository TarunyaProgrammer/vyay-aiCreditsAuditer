import { AuditInput, AuditResult, Recommendation } from '../types';
import { checkOversizedPlans } from './oversized-plans';
import { checkDuplicateTooling } from './duplicate-tooling';
import { checkOverlapRules } from './overlap-rules';
import { checkRetailOptimization } from './retail-optimization';
import { checkOptimizedStack } from './optimized-stack';

export const runAudit = (input: AuditInput): AuditResult => {
  let recommendations: Recommendation[] = [];

  // Run all modular rules
  recommendations = [
    ...checkOversizedPlans(input),
    ...checkDuplicateTooling(input),
    ...checkOverlapRules(input),
    ...checkRetailOptimization(input),
  ];

  // Calculate savings
  const totalMonthlySpend = input.tools.reduce((sum, t) => sum + t.monthlySpend, 0);
  const potentialSavings = recommendations.reduce((sum, r) => sum + r.estimatedSavings, 0);

  // If minimal savings found, run the "Optimized Stack" rule
  if (potentialSavings === 0 || (potentialSavings / totalMonthlySpend) < 0.05) {
    recommendations.push(...checkOptimizedStack(input, potentialSavings));
  }

  // Calculate efficiency metrics
  const overlapScore = Math.min(100, (potentialSavings / (totalMonthlySpend || 1)) * 100);
  
  // Determine Grade
  let efficiencyGrade: 'A' | 'B' | 'C' | 'D' | 'F' = 'A';
  if (overlapScore > 40) efficiencyGrade = 'F';
  else if (overlapScore > 30) efficiencyGrade = 'D';
  else if (overlapScore > 20) efficiencyGrade = 'C';
  else if (overlapScore > 10) efficiencyGrade = 'B';

  return {
    id: `audit-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    totalMonthlySpend,
    potentialSavings,
    recommendations,
    metrics: {
      toolCount: input.tools.length,
      highestSpendTool: input.tools.reduce((prev, current) => (prev.monthlySpend > current.monthlySpend) ? prev : current, input.tools[0] || { toolId: 'None', monthlySpend: 0 }).toolId,
      overlapScore,
      efficiencyGrade,
    },
  };
};
