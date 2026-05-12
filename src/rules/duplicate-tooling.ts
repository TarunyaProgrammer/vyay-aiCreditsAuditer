import { AuditInput, Recommendation } from '../types';
import { TOOL_CATEGORIES } from '../data/pricing';

export const checkDuplicateTooling = (input: AuditInput): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  const toolIds = input.tools.map(t => t.toolId);

  // 1. Coding Tools Redundancy (Cursor + Copilot + Windsurf)
  const codingToolsPresent = toolIds.filter(id => TOOL_CATEGORIES.coding.includes(id));
  if (codingToolsPresent.length > 1) {
    // Keep the first one, flag others as redundant
    const [primary, ...duplicates] = codingToolsPresent;
    duplicates.forEach(dupId => {
      const dupTool = input.tools.find(t => t.toolId === dupId);
      recommendations.push({
        id: `redundant-coding-${dupId}-${Date.now()}`,
        toolId: dupId,
        type: 'redundant',
        title: `Consolidate AI Coding Stack: ${dupId}`,
        description: `Your stack contains multiple AI coding assistants (${codingToolsPresent.join(', ')}). For a team of ${input.teamSize}, we recommend consolidating to a single primary environment (e.g., ${primary}) to ensure consistent context management and avoid subscription sprawl.`,
        estimatedSavings: dupTool?.monthlySpend || 20,
        confidence: 'high',
      });
    });
  }

  // 2. General Assistant Overlap (ChatGPT + Claude + Gemini)
  const assistantToolsPresent = toolIds.filter(id => TOOL_CATEGORIES.generalAssistant.includes(id));
  if (assistantToolsPresent.length > 1) {
    // Flag all but the primary assistant
    const [primary, ...duplicates] = assistantToolsPresent;
    duplicates.forEach(dupId => {
      const dupTool = input.tools.find(t => t.toolId === dupId);
      recommendations.push({
        id: `redundant-assistant-${dupId}-${Date.now()}`,
        toolId: dupId,
        type: 'redundant',
        title: `Reasoning Tool Overlap: ${dupId}`,
        description: `There is significant capability overlap between ${assistantToolsPresent.join(' and ')}. Unless your specific workflows require multi-model verification, you can recapture capital by standardizing on a single high-reasoning assistant like ${primary}.`,
        estimatedSavings: dupTool?.monthlySpend || 20,
        confidence: 'medium',
      });
    });
  }

  return recommendations;
};
