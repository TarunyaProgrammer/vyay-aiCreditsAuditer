import { describe, it, expect } from 'vitest';
import { runAudit } from '../src/rules';
import { AuditInput } from '../src/types';

describe('Audit Engine Deterministic Logic', () => {
  it('should identify overlap between Perplexity and Gemini', () => {
    const input: AuditInput = {
      teamSize: 5,
      useCase: 'growth',
      tools: [
        { toolId: 'perplexity', tier: 'pro', userCount: 5, monthlySpend: 100 },
        { toolId: 'gemini', tier: 'advanced', userCount: 5, monthlySpend: 100 }
      ]
    };

    const result = runAudit(input);
    const overlapRec = result.recommendations.find(r => r.title.includes('Redundant Search Intelligence'));
    expect(overlapRec).toBeDefined();
    expect(result.potentialSavings).toBeGreaterThan(0);
  });

  it('should flag oversized enterprise plans for small teams', () => {
    const input: AuditInput = {
      teamSize: 3,
      useCase: 'early-stage',
      tools: [
        { toolId: 'chatgpt', tier: 'enterprise', userCount: 3, monthlySpend: 180 }
      ]
    };

    const result = runAudit(input);
    const oversizedRec = result.recommendations.find(r => r.title.includes('Enterprise Tier Mismatch'));
    expect(oversizedRec).toBeDefined();
    expect(result.potentialSavings).toBeGreaterThan(0);
  });

  it('should identify redundancy between Cursor and GitHub Copilot', () => {
    const input: AuditInput = {
      teamSize: 10,
      useCase: 'growth',
      tools: [
        { toolId: 'cursor', tier: 'pro', userCount: 10, monthlySpend: 200 },
        { toolId: 'github-copilot', tier: 'pro', userCount: 10, monthlySpend: 100 }
      ]
    };

    const result = runAudit(input);
    const redundancyRec = result.recommendations.find(r => r.title.includes('Consolidate IDE Intelligence'));
    expect(redundancyRec).toBeDefined();
  });

  it('should award a high grade for an optimized stack', () => {
    const input: AuditInput = {
      teamSize: 1,
      useCase: 'early-stage',
      tools: [
        { toolId: 'chatgpt', tier: 'pro', userCount: 1, monthlySpend: 20 }
      ]
    };

    const result = runAudit(input);
    expect(result.metrics.efficiencyGrade).toBe('A');
    const optimizedRec = result.recommendations.find(r => r.title.includes('Maintain Efficient Baseline'));
    expect(optimizedRec).toBeDefined();
  });

  it('should flag high-volume reasoning spend for consolidation', () => {
    const input: AuditInput = {
      teamSize: 10,
      useCase: 'enterprise',
      tools: [
        { toolId: 'chatgpt', tier: 'pro', userCount: 10, monthlySpend: 400 }
      ]
    };

    const result = runAudit(input);
    const volumeRec = result.recommendations.find(r => r.title.includes('High-Volume Reasoning'));
    expect(volumeRec).toBeDefined();
  });

  it('should handle zero tool input gracefully', () => {
    const input: AuditInput = {
      teamSize: 5,
      useCase: 'growth',
      tools: []
    };

    const result = runAudit(input);
    expect(result.potentialSavings).toBe(0);
    const initRec = result.recommendations.find(r => r.title.includes('Initialize Strategic AI Stack'));
    expect(initRec).toBeDefined();
  });
});
