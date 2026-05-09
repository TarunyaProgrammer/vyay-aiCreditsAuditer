import { AuditInput, Recommendation } from '../types';

export const checkOversizedPlans = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];

  // Rule 1: Claude Team Seat Minimum
  // Claude Team is $30/user but requires minimum 5 users ($150/mo).
  // If team size < 5, Claude Pro ($20/user) is more efficient.
  const claudeTool = input.tools.find(t => t.toolId === 'claude' && t.tier === 'team');
  if (claudeTool && input.teamSize < 5) {
    const currentSpend = 150; // Min spend for Claude Team
    const proSpend = input.teamSize * 20;
    const savings = currentSpend - proSpend;
    
    recommendations.push({
      id: `oversized-claude-${Date.now()}`,
      toolId: 'claude',
      type: 'oversized',
      title: 'Optimize Claude Seat Allocation',
      description: `Your team size (${input.teamSize}) is below the Claude Team minimum seat requirement (5). Switching to individual Pro seats would save $${savings}/mo.`,
      estimatedSavings: savings,
    });
  }

  // Rule 2: Cursor Business vs Pro
  // Cursor Business is $40/user, Pro is $20/user.
  // Unless Enterprise features are needed, Pro is often enough for small teams.
  const cursorBusiness = input.tools.find(t => t.toolId === 'cursor' && t.tier === 'team'); // Mapping 'Business' to 'team'
  if (cursorBusiness && input.teamSize < 10) {
    const savings = input.teamSize * 20;
    recommendations.push({
      id: `oversized-cursor-${Date.now()}`,
      toolId: 'cursor',
      type: 'oversized',
      title: 'Downgrade Cursor to Pro',
      description: 'For teams under 10, Cursor Pro provides nearly identical AI capabilities to Business at half the cost.',
      estimatedSavings: savings,
    });
  }

  return recommendations;
};
