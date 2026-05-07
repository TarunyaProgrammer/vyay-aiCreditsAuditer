export type PlanTier = 'free' | 'pro' | 'team' | 'enterprise' | 'usage-based';

export interface AuditTool {
  id: string;
  name: string;
  provider: string;
  category: 'ide' | 'chat' | 'api' | 'writing' | 'image' | 'other';
  website: string;
  logoUrl?: string;
  plans: {
    name: string;
    price: number; // monthly per user
    billing: 'monthly' | 'yearly';
    features: string[];
  }[];
}

export interface ToolInput {
  toolId: string;
  tier: PlanTier;
  userCount: number;
  monthlySpend: number;
}

export interface AuditInput {
  companyName?: string;
  teamSize: number;
  tools: ToolInput[];
}

export interface Recommendation {
  id: string;
  toolId: string;
  type: 'redundant' | 'oversized' | 'alternative';
  title: string;
  description: string;
  estimatedSavings: number;
  actionUrl?: string;
  alternativeToolId?: string;
}

export interface AuditResult {
  id: string;
  createdAt: string;
  totalMonthlySpend: number;
  potentialSavings: number;
  recommendations: Recommendation[];
  metrics: {
    toolCount: number;
    highestSpendTool: string;
    overlapScore: number; // 0-100
  };
}

export interface LeadCapture {
  email: string;
  auditId: string;
  consent: boolean;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  tools: string[]; // Tool IDs
}
