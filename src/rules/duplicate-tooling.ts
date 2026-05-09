import { AuditInput, Recommendation } from '../types';

export const checkDuplicateTooling = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  const toolIds = input.tools.map(t => t.toolId);

  // 1. Coding Tool Redundancy (Cursor + Copilot)
  if (toolIds.includes('cursor') && toolIds.includes('github-copilot')) {
    const copilotInput = input.tools.find(t => t.toolId === 'github-copilot');
    recommendations.push({
      id: `redundant-coding-copilot-${Date.now()}`,
      toolId: 'github-copilot',
      type: 'redundant',
      title: 'Consolidate IDE Intelligence',
      description: 'You are using both Cursor and GitHub Copilot. Since Cursor has deep native integration for autocomplete and chat, GitHub Copilot is largely redundant for this workflow.',
      estimatedSavings: copilotInput?.monthlySpend || 10,
      confidence: 'high',
    });
  }

  // 2. Cursor + Windsurf Overlap
  if (toolIds.includes('cursor') && toolIds.includes('windsurf')) {
    recommendations.push({
      id: `redundant-coding-windsurf-${Date.now()}`,
      toolId: 'windsurf',
      type: 'redundant',
      title: 'Redundant AI IDE Stack',
      description: 'Cursor and Windsurf are both agent-first AI IDEs. We recommend selecting a single primary editor to ensure consistent context management and avoid double-billing.',
      estimatedSavings: 20,
      confidence: 'high',
    });
  }

  return recommendations;
};
