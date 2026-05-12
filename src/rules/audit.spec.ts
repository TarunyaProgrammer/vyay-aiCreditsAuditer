import { describe, it, expect } from 'vitest';
import { runAudit } from './index';
import { AuditInput } from '../types';

describe('Audit Engine Deterministic Reasoning', () => {
  
  it('detects oversized plans for tiny teams', () => {
    const input: AuditInput = {
      teamSize: 2,
      tools: [
        { toolId: 'claude', tier: 'team', userCount: 2, monthlySpend: 150 }
      ]
    };
    
    const result = runAudit(input);
    const recommendation = result.recommendations.find(r => r.type === 'oversized');
    
    expect(recommendation).toBeDefined();
    expect(recommendation?.title).toContain('Tier Efficiency');
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
    expect(recommendation?.title).toContain('Consolidate AI Coding Stack');
    expect(recommendation?.estimatedSavings).toBe(100);
    expect(recommendation?.confidence).toBe('high');
  });

  it('detects reasoning stack saturation (Triple Overlap)', () => {
    const input: AuditInput = {
      teamSize: 5,
      tools: [
        { toolId: 'chatgpt', tier: 'plus', userCount: 5, monthlySpend: 100 },
        { toolId: 'claude', tier: 'pro', userCount: 5, monthlySpend: 100 },
        { toolId: 'gemini', tier: 'advanced', userCount: 5, monthlySpend: 100 }
      ]
    };

    const result = runAudit(input);
    const overlapRec = result.recommendations.find(r => r.title.includes('General AI Stack Saturation'));

    expect(overlapRec).toBeDefined();
    expect(overlapRec?.estimatedSavings).toBeGreaterThan(0);
    expect(overlapRec?.confidence).toBe('medium');
  });

  it('handles enterprise oversizing for small teams', () => {
    const input: AuditInput = {
      teamSize: 5,
      tools: [
        { toolId: 'github-copilot', tier: 'enterprise', userCount: 5, monthlySpend: 195 }
      ]
    };

    const result = runAudit(input);
    const oversizedRec = result.recommendations.find(r => r.title === 'Enterprise Tier Mismatch');

    expect(oversizedRec).toBeDefined();
    expect(oversizedRec?.estimatedSavings).toBeCloseTo(195 * 0.4, 0);
  });

  it('gracefully handles already optimized stacks', () => {
    const input: AuditInput = {
      teamSize: 5,
      tools: [
        { toolId: 'cursor', tier: 'pro', userCount: 5, monthlySpend: 100 }
      ]
    };

    const result = runAudit(input);
    expect(result.potentialSavings).toBe(0);
  });

  it('handles usage-based API spend correctly', () => {
    const input: AuditInput = {
      teamSize: 1,
      tools: [
        { toolId: 'openai-api', tier: 'usage', userCount: 1, monthlySpend: 500 }
      ]
    };

    const result = runAudit(input);
    expect(result.totalMonthlySpend).toBe(500);
    expect(result.potentialSavings).toBe(0); // No redundancy yet
  });

});
