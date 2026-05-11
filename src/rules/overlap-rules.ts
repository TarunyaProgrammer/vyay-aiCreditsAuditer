import { AuditInput, Recommendation } from '../types';

export const checkOverlapRules = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  const toolIds = input.tools.map(t => t.toolId);

  // 1. Triple Overlap check: Jab 3 se zyada AI tools use ho rahe hon
  const reasoningTools = ['chatgpt', 'claude', 'perplexity', 'gemini'];
  const activeReasoningTools = toolIds.filter(id => reasoningTools.includes(id));
  
  if (activeReasoningTools.length >= 3) {
    const totalReasoningSpend = input.tools
      .filter(t => activeReasoningTools.includes(t.toolId))
      .reduce((sum, t) => sum + t.monthlySpend, 0);

    recommendations.push({
      id: `overlap-saturation-${Date.now()}`,
      toolId: 'multiple',
      type: 'alternative',
      title: 'Stack Saturation Detected',
      description: `Your team is paying for ${activeReasoningTools.length} general-purpose reasoning tools simultaneously. While each has unique strengths, maintaining 3+ vendors often leads to "subscription sprawl" and reduced tool depth.`,
      estimatedSavings: 20 * (activeReasoningTools.length - 2), // Recommend cutting at least 1-2
      confidence: 'medium',
    });
  }

  // 2. ChatGPT aur Claude ka dual overlap check karo
  if (toolIds.includes('chatgpt') && toolIds.includes('claude')) {
    recommendations.push({
      id: `dual-overlap-reasoning-${Date.now()}`,
      toolId: 'multiple',
      type: 'alternative',
      title: 'Rationalize Reasoning Stack',
      description: 'ChatGPT and Claude have significantly overlapping capability sets. Unless specific internal workflows require both (e.g. Artifacts vs Custom GPTs), consolidating to one primary vendor is recommended.',
      estimatedSavings: 20,
      confidence: 'medium',
    });
  }

  // 3. Perplexity aur Gemini ka overlap check
  if (toolIds.includes('perplexity') && toolIds.includes('gemini')) {
    recommendations.push({
      id: `search-overlap-${Date.now()}`,
      toolId: 'perplexity',
      type: 'redundant',
      title: 'Redundant Search Intelligence',
      description: 'You are using both Perplexity and Gemini. Since Gemini now includes deep Google Search integration and reasoning capabilities, Perplexity may be redundant for general search-augmented workflows.',
      estimatedSavings: 20,
      confidence: 'medium',
    });
  }

  return recommendations;
};
