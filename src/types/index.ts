export type BillingType = 'subscription' | 'usage-based';

export type PlanTier = 'free' | 'pro' | 'team' | 'enterprise' | 'usage-based';

export type ToolCategory = 
  | 'coding' 
  | 'generalAssistant' 
  | 'apiProviders'
  | 'ide' 
  | 'chat' 
  | 'api' 
  | 'infrastructure' 
  | 'other';

export interface ToolPlan {
  id: string;
  label: string;
  monthlyPrice: number | null;
  pricingModel: BillingType;
  description?: string;
  officialUrl: string;
  verifiedAt: string;
}

export interface AuditTool {
  id: string;
  name: string;
  provider: string;
  category: ToolCategory;
  website: string;
  logoUrl?: string;
  plans: ToolPlan[];
}

export interface ToolInput {
  toolId: string;
  tier: string; // Dynamic based on tool
  userCount: number;
  monthlySpend: number;
}

export interface AuditInput {
  companyName?: string;
  teamSize: number;
  useCase?: string;
  tools: ToolInput[];
}

export interface Recommendation {
  id: string;
  toolId: string;
  type: 'redundant' | 'oversized' | 'alternative';
  title: string;
  description: string;
  estimatedSavings: number;
  confidence: 'high' | 'medium' | 'low'; // Confidence scoring yahan ho rahi hai
  actionUrl?: string;
  alternativeToolId?: string;
}

export interface AuditResult {
  id: string;
  publicId?: string; // Supabase public identifier
  createdAt: string;
  totalMonthlySpend: number;
  potentialSavings: number;
  recommendations: Recommendation[];
  metrics: {
    toolCount: number;
    highestSpendTool: string;
    overlapScore: number;
    efficiencyGrade: 'A' | 'B' | 'C' | 'D' | 'F';
    benchmarkInsight?: string;
    percentile?: number;
  };
  aiSummary?: string; // Gemini generated summary
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
