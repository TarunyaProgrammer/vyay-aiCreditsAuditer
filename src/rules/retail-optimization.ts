import { AuditInput, Recommendation } from '../types';

export const checkRetailOptimization = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  
  // Rule: High reasoning tools pe karcha check karo
  // Agar Reasoning spend $200 se zyada hai, toh API consolidation suggest karo
  const reasoningTools = ['chatgpt', 'claude', 'perplexity', 'gemini'];
  const reasoningSpend = input.tools
    .filter(t => reasoningTools.includes(t.toolId))
    .reduce((sum, t) => sum + t.monthlySpend, 0);

  if (reasoningSpend >= 300) {
    recommendations.push({
      id: `retail-api-consolidation-${Date.now()}`,
      toolId: 'chatgpt',
      type: 'alternative',
      title: 'High-Volume Reasoning API Consolidation',
      description: 'Your monthly spend on reasoning tools exceeds $300. We recommend migrating high-frequency repetitive tasks to API-based providers (DeepSeek/OpenRouter) to reduce costs by ~50% without quality loss.',
      estimatedSavings: reasoningSpend * 0.45,
      confidence: 'medium',
    });
  } else if (reasoningSpend >= 100) {
    recommendations.push({
      id: `retail-seat-optimization-${Date.now()}`,
      toolId: 'multiple',
      type: 'alternative',
      title: 'Rationalize Individual reasoning seats',
      description: 'You are spending significantly on individual reasoning seats. Consider a centralized team tier to gain better visibility and shared context, or consolidate to a single provider.',
      estimatedSavings: reasoningSpend * 0.15,
      confidence: 'high',
    });
  }

  // Rule: Centralized billing for growing teams
  if (input.teamSize > 5) {
    const individualPlusTools = input.tools.filter(t => t.tier === 'plus' || t.tier === 'pro');
    if (individualPlusTools.length > 0) {
      recommendations.push({
        id: `team-tier-optimization-${Date.now()}`,
        toolId: individualPlusTools[0].toolId,
        type: 'oversized',
        title: 'Transition to Managed Team Tiers',
        description: `With a team of ${input.teamSize}, managing individual seats for ${individualPlusTools.map(t => t.toolId).join(', ')} is operationally inefficient. Transitioning to 'Team' or 'Business' tiers offers centralized billing and admin controls.`,
        estimatedSavings: 0,
        confidence: 'high',
      });
    }
  }

  // Rule: Tool fragmentation check
  if (input.tools.length > 5) {
    recommendations.push({
      id: `fragmentation-warning-${Date.now()}`,
      toolId: 'multiple',
      type: 'redundant',
      title: 'High Stack Fragmentation',
      description: `You are managing ${input.tools.length} distinct AI vendors. This increases operational overhead and security risk. We recommend consolidating core workflows into a unified suite (M365 Copilot or Workspace Gemini).`,
      estimatedSavings: 0,
      confidence: 'high',
    });
  }

  // Rule: Consumer plans pe zyada seats check karo
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
