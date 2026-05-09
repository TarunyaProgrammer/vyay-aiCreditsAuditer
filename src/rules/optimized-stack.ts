import { AuditInput, Recommendation } from '../types';

export const checkOptimizedStack = (input: AuditInput, totalSavings: number): Recommendation[] => {
  const recommendations: Recommendation[] = [];

  // Rule: Low Waste Threshold
  const totalSpend = input.tools.reduce((sum, t) => sum + t.monthlySpend, 0);
  const wastePercentage = totalSpend > 0 ? (totalSavings / totalSpend) : 0;

  if (totalSpend > 0 && wastePercentage < 0.05) {
    recommendations.push({
      id: `optimized-baseline-${Date.now()}`,
      toolId: 'all',
      type: 'alternative',
      title: 'Maintain Efficient Baseline',
      description: 'Your current AI tooling expenditure is highly optimized. We found minimal redundancy or tier mismatch. Continue with your current lean stack strategy.',
      estimatedSavings: 0,
      confidence: 'high',
    });
  }

  // Rule: Single Tool Strategy
  if (input.tools.length === 1 && input.tools[0].monthlySpend > 0) {
    recommendations.push({
      id: `optimized-single-vendor-${Date.now()}`,
      toolId: input.tools[0].toolId,
      type: 'alternative',
      title: 'Focused Vendor Strategy',
      description: 'By centralizing on a single high-performance vendor, you have eliminated the most common source of AI spend leakage: cross-vendor overlap.',
      estimatedSavings: 0,
      confidence: 'high',
    });
  }

  return recommendations;
};
