import { AuditInput, Recommendation } from '../types';

export const checkDuplicateTooling = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  const toolIds = input.tools.map(t => t.toolId);

  // 1. Coding Tool Redundancy (Cursor + Copilot)
  if (toolIds.includes('cursor') && toolIds.includes('github-copilot')) {
    const copilotInput = input.tools.find(t => t.toolId === 'github-copilot');
    recommendations.push({
      id: `redundant-copilot-${Date.now()}`,
      toolId: 'github-copilot',
      type: 'redundant',
      title: 'Consolidate IDE Intelligence',
      description: 'You are using both Cursor and GitHub Copilot. Cursor includes built-in Copilot-like features. Removing Copilot could improve workflow focus and save capital.',
      estimatedSavings: copilotInput?.monthlySpend || 10,
      confidence: 'high',
    });
  }

  // 2. Triple Overlap (Reasoning Stack Saturation)
  const reasoningTools = ['chatgpt', 'claude', 'perplexity', 'gemini'];
  const activeReasoningTools = toolIds.filter(id => reasoningTools.includes(id));
  
  if (activeReasoningTools.length >= 3) {
    // Recommend consolidating to the most efficient/preferred tool
    const leastExpensiveToolId = activeReasoningTools.sort((a, b) => {
      const spendA = input.tools.find(t => t.toolId === a)?.monthlySpend || 0;
      const spendB = input.tools.find(t => t.toolId === b)?.monthlySpend || 0;
      return spendA - spendB;
    })[0];

    recommendations.push({
      id: `overlap-stack-${Date.now()}`,
      toolId: leastExpensiveToolId,
      type: 'alternative',
      title: 'Stack Saturation Detected',
      description: `Your team is paying for ${activeReasoningTools.length} general-purpose reasoning tools simultaneously. We recommend consolidating to 1-2 primary vendors to reduce cognitive overhead and redundant spend.`,
      estimatedSavings: 20 * (activeReasoningTools.length - 2), // Assume $20/mo per tool
      confidence: 'medium',
    });
  }

  return recommendations;
};
