import { AuditInput, Recommendation } from '../types';
import { TOOL_CATEGORIES } from '../data/pricing';

export const checkOverlapRules = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  const toolIds = input.tools.map(t => t.toolId);

  // 1. Strategic Stack Saturation: Jab 3 se zyada general assistants use ho rahe hon
  const activeAssistants = toolIds.filter(id => TOOL_CATEGORIES.generalAssistant.includes(id));
  
  if (activeAssistants.length >= 3) {
    recommendations.push({
      id: `overlap-saturation-${Date.now()}`,
      toolId: 'multiple',
      type: 'alternative',
      title: 'General AI Stack Saturation',
      description: `Your team is utilizing ${activeAssistants.length} general-purpose reasoning tools (${activeAssistants.join(', ')}). There may be unnecessary overlap between general reasoning and research tooling. We recommend standardizing on 1-2 primary vendors to preserve capital and context.`,
      estimatedSavings: 20 * (activeAssistants.length - 1),
      confidence: 'medium',
    });
  }

  // 2. Specific API + Subscription Overlap
  if (toolIds.includes('openai-api') && toolIds.includes('chatgpt')) {
    recommendations.push({
      id: `api-sub-overlap-${Date.now()}`,
      toolId: 'chatgpt',
      type: 'redundant',
      title: 'Subscription vs API Redundancy',
      description: 'You are using both the ChatGPT subscription and the OpenAI API. For many engineering workflows, the API can substitute for individual Plus seats if integrated into internal tooling.',
      estimatedSavings: 20,
      confidence: 'low',
    });
  }

  return recommendations;
};
