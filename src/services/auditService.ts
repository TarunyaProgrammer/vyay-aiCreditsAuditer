import { supabase } from '../lib/supabase';
import { AuditResult, AuditInput } from '../types';

export const auditService = {
  async saveAudit(input: AuditInput, result: AuditResult): Promise<string | null> {
    const { data, error } = await supabase
      .from('audits')
      .insert({
        team_size: input.teamSize,
        primary_use_case: input.useCase || 'General Engineering Optimization',
        tools_json: input.tools,
        recommendations_json: result.recommendations,
        monthly_savings: result.potentialSavings,
        annual_savings: result.potentialSavings * 12,
        ai_summary: result.aiSummary,
        total_monthly_spend: result.totalMonthlySpend,
        efficiency_metrics: result.metrics,
      })
      .select('public_id')
      .single();

    if (error) {
      console.error('Error saving audit:', error);
      return null;
    }

    return data?.public_id;
  },

  async getAuditByPublicId(publicId: string): Promise<AuditResult | null> {
    const { data, error } = await supabase
      .from('audits')
      .select('*')
      .eq('public_id', publicId)
      .single();

    if (error || !data) {
      console.error('Error fetching audit:', error);
      return null;
    }

    return {
      id: data.id.toString(),
      publicId: data.public_id,
      createdAt: data.created_at,
      totalMonthlySpend: data.total_monthly_spend,
      potentialSavings: data.monthly_savings,
      recommendations: data.recommendations_json,
      metrics: data.efficiency_metrics,
      aiSummary: data.ai_summary,
    };
  },

  async captureLead(auditId: string, email: string, companyName?: string, role?: string) {
    const { error } = await supabase
      .from('leads')
      .insert({
        audit_id: auditId,
        email,
        company_name: companyName,
        role,
      });

    if (error) {
      console.error('Error capturing lead:', error);
      throw error;
    }
  }
};
