import { GoogleGenerativeAI } from '@google/generative-ai';
import { AuditResult } from '../types';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export const aiService = {
  async generateSummary(result: AuditResult): Promise<string> {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      return this.getFallbackSummary(result);
    }

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

      const prompt = `
        You are Vyay AI, a Senior Infrastructure Economist specializing in AI stack optimization for high-growth startups. 

        TASK:
        Analyze the provided Audit Data and generate a professional, high-impact summary (~100 words).

        CONSTRAINTS:
        1. Tone: Corporate, analytical, objective, and practical. Avoid hype words like "revolutionary" or "game-changing".
        2. Focus: Highlight the total annualized savings of $${(result.potentialSavings * 12).toLocaleString()} and the primary areas of inefficiency.
        3. Call to Action: Subtly suggest that complex optimizations like credits migration require expert consultation.
        4. Format: Plain text, single paragraph.

        INPUT DATA:
        ${JSON.stringify({
          totalMonthlySpend: result.totalMonthlySpend,
          potentialMonthlySavings: result.potentialSavings,
          potentialAnnualSavings: result.potentialSavings * 12,
          recommendationCount: result.recommendations.length,
          efficiencyGrade: result.metrics.efficiencyGrade,
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
