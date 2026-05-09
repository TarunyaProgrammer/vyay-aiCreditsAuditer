import { AuditInput, AuditResult, Recommendation } from '../types';
import { checkDuplicateTooling } from './duplicate-tooling';
import { checkOversizedPlans } from './oversized-plans';

export const runAudit = (input: AuditInput): AuditResult => {
  const recommendations: Recommendation[] = [
    ...checkDuplicateTooling(input),
    ...checkOversizedPlans(input),
  ];

  const totalMonthlySpend = input.tools.reduce((sum, tool) => sum + tool.monthlySpend, 0);
  const potentialSavings = recommendations.reduce((sum, rec) => sum + rec.estimatedSavings, 0);

  // Find tool with highest spend
  let highestSpendTool = 'None';
  if (input.tools.length > 0) {
    highestSpendTool = [...input.tools].sort((a, b) => b.monthlySpend - a.monthlySpend)[0].toolId;
  }

  // Calculate a mock overlap score based on number of recommendations
  const overlapScore = Math.min(100, (recommendations.length * 25));

  return {
    id: `audit-${Math.random().toString(36).substring(7)}`,
    createdAt: new Date().toISOString(),
    totalMonthlySpend,
    potentialSavings,
    recommendations,
    metrics: {
      toolCount: input.tools.length,
      highestSpendTool,
      overlapScore,
    },
  };
};
