import { AuditInput, Recommendation } from '../types';

export const checkDuplicateTooling = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  const toolIds = input.tools.map(t => t.toolId);

  // Rule 1: Cursor + GitHub Copilot Redundancy
  if (toolIds.includes('cursor') && toolIds.includes('github-copilot')) {
    const copilotInput = input.tools.find(t => t.toolId === 'github-copilot');
    recommendations.push({
      id: `redundant-copilot-${Date.now()}`,
      toolId: 'github-copilot',
      type: 'redundant',
      title: 'Consolidate IDE Intelligence',
      description: 'You are using both Cursor and GitHub Copilot. Cursor includes built-in Copilot-like features, making a separate Copilot subscription redundant.',
      estimatedSavings: copilotInput?.monthlySpend || 10,
    });
  }

  // Rule 2: ChatGPT + Claude Overlap (Optional Suggestion)
  if (toolIds.includes('chatgpt') && toolIds.includes('claude')) {
    recommendations.push({
      id: `overlap-chat-${Date.now()}`,
      toolId: 'chatgpt',
      type: 'alternative',
      title: 'Minimize Chat Subscriptions',
      description: 'Using both ChatGPT and Claude is common for high-end research, but if usage is light, consolidating to one could save $20/mo.',
      estimatedSavings: 20,
    });
  }

  return recommendations;
};
