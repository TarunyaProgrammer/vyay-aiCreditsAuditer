import { GoogleGenerativeAI } from '@google/generative-ai';
import { AuditResult } from '../types';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export const aiService = {
  async generateSummary(result: AuditResult): Promise<string> {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      return this.getFallbackSummary(result);
    }

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

      const prompt = `
        You are Vyay AI, a Senior Infrastructure Economist specializing in AI stack optimization for high-growth startups. 

        TASK:
        Analyze the provided Audit Data and generate a professional, high-impact executive summary (~100 words).

        CONSTRAINTS:
        1. Tone: Calm, analytical, objective, and practical. No hype, no generic "AI transformation" language.
        2. Focus: Synthesize the total annualized savings ($${(result.potentialSavings * 12).toLocaleString()}) and the specific efficiency grade (${result.metrics.efficiencyGrade}).
        3. Benchmarking: Incorporate the insight that ${result.metrics.benchmarkInsight}.
        4. Narrative: Explain *why* these recommendations matter (e.g., capital recovery for growth, vendor sprawl mitigation).
        5. Format: Plain text, single paragraph.

        INPUT DATA:
        ${JSON.stringify({
          totalMonthlySpend: result.totalMonthlySpend,
          potentialAnnualSavings: result.potentialSavings * 12,
          recommendationCount: result.recommendations.length,
          efficiencyGrade: result.metrics.efficiencyGrade,
          benchmarkInsight: result.metrics.benchmarkInsight,
          recommendations: result.recommendations.map(r => r.title)
        }, null, 2)}
      `;

      const aiResult = await model.generateContent(prompt);
      const response = await aiResult.response;
      const text = response.text();

      return text || this.getFallbackSummary(result);
    } catch (error) {
      console.error('Gemini API Error:', error);
      return this.getFallbackSummary(result);
    }
  },

  getFallbackSummary(result: AuditResult): string {
    const annualSavings = (result.potentialSavings * 12).toLocaleString();
    return `Based on our analysis, your current AI stack demonstrates a potential annualized capital recovery of $${annualSavings}. Our deterministic engine identified ${result.recommendations.length} key optimization vectors, primarily focused on service redundancy and tier alignment. Implementing these recommendations will significantly improve your operational efficiency grade from its current ${result.metrics.efficiencyGrade} status. We recommend a strategic review of your multi-vendor reasoning stack to preserve growth capital.`;
  }
};
