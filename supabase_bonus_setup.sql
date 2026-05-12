-- Bonus Features Tables

-- Referral Stats for viral loops
CREATE TABLE IF NOT EXISTS referral_stats (
  referral_code TEXT PRIMARY KEY,
  click_count INTEGER DEFAULT 0,
  conversion_count INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Referral details table
CREATE TABLE IF NOT EXISTS referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referral_code TEXT NOT NULL,
  source_audit_id UUID REFERENCES audits(id),
  referred_audit_id UUID REFERENCES audits(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Function to increment clicks atomically
CREATE OR REPLACE FUNCTION increment_referral_clicks(code TEXT)
RETURNS VOID AS $$
BEGIN
  INSERT INTO referral_stats (referral_code, click_count)
  VALUES (code, 1)
  ON CONFLICT (referral_code)
  DO UPDATE SET click_count = referral_stats.click_count + 1, updated_at = NOW();
END;
$$ LANGUAGE plpgsql;
