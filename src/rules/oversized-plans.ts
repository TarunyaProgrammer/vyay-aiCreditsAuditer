import { AuditInput, Recommendation } from '../types';

export const checkOversizedPlans = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];

  // 1. Small Team Overpaying for Team Plans
  // If team size < 5, ChatGPT Team ($25-30) or Claude Team ($25, min 5) might be overkill.
  const teamTierTools = input.tools.filter(t => t.tier === 'team');
  
  for (const tool of teamTierTools) {
    if (input.teamSize < 5) {
      const currentSpend = tool.monthlySpend;
      const proRate = 20 * input.teamSize;
      const savings = currentSpend - proRate;

      if (savings > 0) {
        recommendations.push({
          id: `oversized-team-${tool.toolId}-${Date.now()}`,
          toolId: tool.toolId,
          type: 'oversized',
          title: `Efficiency Override: ${tool.toolId}`,
          description: `Your team size (${input.teamSize}) does not appear to justify ${tool.toolId}'s Team-tier collaboration features. Downgrading to individual Pro seats maintains power-user access while optimizing capital.`,
          estimatedSavings: savings,
          confidence: 'high',
        });
      }
    }
  }

  // 2. Enterprise Mismatch
  const enterpriseTools = input.tools.filter(t => t.tier === 'enterprise');
  if (enterpriseTools.length > 0 && input.teamSize < 20) {
    for (const tool of enterpriseTools) {
      recommendations.push({
        id: `mismatch-enterprise-${tool.toolId}-${Date.now()}`,
        toolId: tool.toolId,
        type: 'oversized',
        title: 'Enterprise Tier Mismatch',
        description: 'Enterprise-tier deployments for teams under 20 often result in administrative overspend. Evaluate if SSO and advanced controls are worth the significant price premium.',
        estimatedSavings: tool.monthlySpend * 0.4, // Assume 40% overspend vs Team tier
        confidence: 'medium',
      });
    }
  }

  return recommendations;
};
