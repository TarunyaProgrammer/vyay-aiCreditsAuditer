import { describe, it, expect } from 'vitest';
import { runAudit } from './index';
import { AuditInput } from '../types';

describe('Audit Engine Deterministic Reasoning', () => {
  
  it('detects oversized plans for tiny teams', () => {
    const input: AuditInput = {
      teamSize: 2,
      tools: [
        { toolId: 'claude', tier: 'team', userCount: 2, monthlySpend: 150 } // Claude Team is ~$25/seat, min 5 = $125. Here user says 150.
      ]
    };
    
    const result = runAudit(input);
    const recommendation = result.recommendations.find(r => r.type === 'oversized');
    
    expect(recommendation).toBeDefined();
    expect(recommendation?.title).toContain('Efficiency Override');
    expect(recommendation?.estimatedSavings).toBeGreaterThan(0);
    expect(recommendation?.confidence).toBe('high');
  });

  it('detects redundant coding assistants (Cursor + Copilot)', () => {
    const input: AuditInput = {
      teamSize: 10,
      tools: [
        { toolId: 'cursor', tier: 'pro', userCount: 10, monthlySpend: 200 },
        { toolId: 'github-copilot', tier: 'individual', userCount: 10, monthlySpend: 100 }
      ]
    };

    const result = runAudit(input);
    const recommendation = result.recommendations.find(r => r.toolId === 'github-copilot');

    expect(recommendation).toBeDefined();
    expect(recommendation?.type).toBe('redundant');
    expect(recommendation?.estimatedSavings).toBe(100);
    expect(recommendation?.confidence).toBe('high');
  });

  it('detects reasoning stack saturation (Triple Overlap)', () => {
    const input: AuditInput = {
      teamSize: 5,
      tools: [
        { toolId: 'chatgpt', tier: 'plus', userCount: 5, monthlySpend: 100 },
        { toolId: 'claude', tier: 'pro', userCount: 5, monthlySpend: 100 },
        { toolId: 'perplexity', tier: 'pro', userCount: 5, monthlySpend: 100 }
      ]
    };

    const result = runAudit(input);
    const overlapRec = result.recommendations.find(r => r.title.includes('Stack Saturation'));

    expect(overlapRec).toBeDefined();
    expect(overlapRec?.estimatedSavings).toBeGreaterThan(0);
    expect(overlapRec?.confidence).toBe('medium');
  });

  it('gracefully handles already optimized stacks', () => {
    const input: AuditInput = {
      teamSize: 5,
      tools: [
        { toolId: 'cursor', tier: 'pro', userCount: 5, monthlySpend: 100 }
      ]
    };

    const result = runAudit(input);
    const optimizedRec = result.recommendations.find(r => r.title.includes('Focused Vendor Strategy'));

    expect(result.potentialSavings).toBe(0);
    expect(optimizedRec).toBeDefined();
    expect(optimizedRec?.confidence).toBe('high');
  });

  it('handles edge cases like zero-spend users', () => {
    const input: AuditInput = {
      teamSize: 1,
      tools: [
        { toolId: 'chatgpt', tier: 'free', userCount: 1, monthlySpend: 0 }
      ]
    };

    const result = runAudit(input);
    expect(result.potentialSavings).toBe(0);
    expect(result.totalMonthlySpend).toBe(0);
    expect(result.metrics.efficiencyGrade).toBe('A');
  });

});
