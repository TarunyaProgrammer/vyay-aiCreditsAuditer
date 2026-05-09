import { AuditInput, Recommendation } from '../types';

export const checkRetailOptimization = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  
  // Rule: High Reasoning Tool Spend
  // If total reasoning tool spend > $200/mo, suggest credit-based consolidation
  const reasoningTools = ['chatgpt', 'claude', 'perplexity', 'gemini'];
  const reasoningSpend = input.tools
    .filter(t => reasoningTools.includes(t.toolId))
    .reduce((sum, t) => sum + t.monthlySpend, 0);

  if (reasoningSpend >= 200) {
    recommendations.push({
      id: `retail-api-consolidation-${Date.now()}`,
      toolId: 'chatgpt',
      type: 'alternative',
      title: 'Consolidate High-Volume Reasoning',
      description: 'Your monthly spend on chat-based reasoning tools suggests high volume. Transitioning intensive workloads to API-based providers (like OpenRouter or DeepSeek) could reduce costs by 40-60% while maintaining intelligence parity.',
      estimatedSavings: reasoningSpend * 0.4,
      confidence: 'medium',
    });
  }

  // Rule: High Seat Count on Consumer Plans
  const highSeatTools = input.tools.filter(t => t.userCount > 20 && t.tier === 'pro');
  for (const tool of highSeatTools) {
    recommendations.push({
      id: `retail-bulk-discount-${tool.toolId}-${Date.now()}`,
      toolId: tool.toolId,
      type: 'oversized',
      title: 'Negotiate Bulk Licensing',
      description: `Managing ${tool.userCount} individual Pro seats for ${tool.toolId} creates administrative friction. We recommend contacting vendor sales for a volume-discounted contract or transitioning to a centralized Business tier for better oversight.`,
      estimatedSavings: 0, // Strategic benefit over direct savings
      confidence: 'low',
    });
  }

  return recommendations;
};
