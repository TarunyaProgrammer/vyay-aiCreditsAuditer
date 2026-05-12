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

  async getReferralStats(code: string) {
    const { count, error } = await supabase
      .from('referrals')
      .select('*', { count: 'exact', head: true })
      .eq('referral_code', code);

    if (error) {
      console.error('Error fetching referral stats:', error);
      return 0;
    }

    return count || 0;
  }
};
