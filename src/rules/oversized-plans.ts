import { AuditInput, Recommendation } from '../types';

export const checkOversizedPlans = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];

  // 1. Team Tier Efficiency: Agar team size 5 se kam hai, toh Team plans shayad mehnge hain
  const teamTierTools = input.tools.filter(t => t.tier === 'team' || t.tier === 'teams');
  
  for (const tool of teamTierTools) {
    if (input.teamSize < 5) {
      const currentSpend = tool.monthlySpend;
      const proRate = 20 * input.teamSize; // Default Pro rate assumption
      const savings = currentSpend - proRate;

      if (savings > 0) {
        recommendations.push({
          id: `oversized-team-${tool.toolId}-${Date.now()}`,
          toolId: tool.toolId,
          type: 'oversized',
          title: `Tier Efficiency: ${tool.toolId}`,
          description: `Your team size (${input.teamSize}) does not appear to justify the administrative premium of ${tool.toolId}'s Team-tier features. Transitioning to individual Pro seats maintains power-user access while reclaiming significant capital.`,
          estimatedSavings: savings,
          confidence: 'high',
        });
      }
    }
  }

  // 2. Enterprise Oversizing: Choti teams ke liye Enterprise zaroori nahi hota
  const enterpriseTools = input.tools.filter(t => t.tier === 'enterprise');
  if (enterpriseTools.length > 0 && input.teamSize < 20) {
    for (const tool of enterpriseTools) {
      recommendations.push({
        id: `mismatch-enterprise-${tool.toolId}-${Date.now()}`,
        toolId: tool.toolId,
        type: 'oversized',
        title: 'Enterprise Tier Mismatch',
        description: `Enterprise-tier deployments for a team of ${input.teamSize} often result in disproportionate administrative overspend. Unless specific SSO or compliance requirements are non-negotiable, a Business or Team plan would be more capital-efficient.`,
        estimatedSavings: tool.monthlySpend * 0.4, // Assume 40% overspend vs Business/Team tier
        confidence: 'medium',
      });
    }
  }

  return recommendations;
};
