import { describe, it, expect, vi } from 'vitest';
import { auditService } from '../src/services/auditService';
import { AuditInput, AuditResult } from '../src/types';

vi.mock('../src/lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      insert: vi.fn(() => ({
        select: vi.fn(() => ({
          single: vi.fn(() => Promise.resolve({ data: { public_id: 'test-uuid' }, error: null }))
        })),
      })),
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn(() => Promise.resolve({ 
            data: { 
              id: 1,
              public_id: 'test-uuid',
              created_at: new Date().toISOString(),
              total_monthly_spend: 1000,
              monthly_savings: 200,
              recommendations_json: [],
              efficiency_metrics: { efficiencyGrade: 'B' },
              ai_summary: 'Test summary'
            }, 
            error: null 
          }))
        }))
      }))
    }))
  }
}));

describe('auditService persistence', () => {
  it('should save audit and return public_id', async () => {
    const input = { teamSize: 5, tools: [] };
    const result = { potentialSavings: 200, totalMonthlySpend: 1000, recommendations: [], metrics: {} };
    
    const publicId = await auditService.saveAudit(input as unknown as AuditInput, result as unknown as AuditResult);
    expect(publicId).toBe('test-uuid');
  });

  it('should fetch audit by public_id', async () => {
    const result = await auditService.getAuditByPublicId('test-uuid');
    expect(result).not.toBeNull();
    expect(result?.publicId).toBe('test-uuid');
    expect(result?.aiSummary).toBe('Test summary');
  });
});
