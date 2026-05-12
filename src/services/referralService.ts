import { supabase } from '../lib/supabase';

export const referralService = {
  generateCode(prefix: string = 'VYAY'): string {
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${random}`;
  },

  async trackReferral(referralCode: string, leadId: string) {
    const { error } = await supabase
      .from('referrals')
      .insert({
        referral_code: referralCode,
        referred_lead_id: leadId,
      });

    if (error) {
      console.error('Error tracking referral:', error);
    }
  },

  async trackClick(referralCode: string) {
    const { error } = await supabase.rpc('increment_referral_clicks', { code: referralCode });
    if (error) {
      console.error('Error tracking referral click:', error);
      // Fallback if RPC not available
      await supabase
        .from('referral_stats')
        .upsert({ referral_code: referralCode, click_count: 1 }, { onConflict: 'referral_code' });
    }
  },

  async getReferralStats(code: string) {
    const { data, error } = await supabase
      .from('referral_stats')
      .select('click_count, conversion_count')
      .eq('referral_code', code)
      .single();

    if (error) {
      console.error('Error fetching referral stats:', error);
      return { clicks: 0, conversions: 0 };
    }

    return { 
      clicks: data.click_count || 0, 
      conversions: data.conversion_count || 0 
    };
  }
};
