import { describe, it, expect } from 'vitest';
import { aiService } from '../src/services/aiService';
import { AuditResult } from '../src/types';

describe('aiService fallback', () => {
  it('should return a valid fallback summary when API key is missing', async () => {
    const result = {
      potentialSavings: 200,
      metrics: { efficiencyGrade: 'B' },
      recommendations: [ { title: 'Test' } ]
    };
    
    const summary = await aiService.generateSummary(result as unknown as AuditResult);
    expect(summary).toContain('$2,400'); // 200 * 12
    expect(summary).toContain('efficiency grade from its current B status');
  });
});
