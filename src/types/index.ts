export type PlanTier = 'free' | 'pro' | 'team' | 'enterprise' | 'usage-based';

export type ToolCategory = 
  | 'ide' 
  | 'chat' 
  | 'api' 
  | 'infrastructure' 
  | 'security' 
  | 'design' 
  | 'writing' 
  | 'marketing' 
  | 'other';

export interface AuditTool {
  id: string;
  name: string;
  provider: string;
  category: ToolCategory;
  website: string;
  logoUrl?: string;
  plans: {
    name: string;
    price: number; // monthly per user (or flat rate)
    billing: 'monthly' | 'yearly';
    features: string[];
  }[];
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
  confidence: 'high' | 'medium' | 'low'; // New: confidence scoring
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
    efficiencyGrade: 'A' | 'B' | 'C' | 'D' | 'F';
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
