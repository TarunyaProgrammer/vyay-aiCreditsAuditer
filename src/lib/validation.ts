import { z } from 'zod';

export const ToolInputSchema = z.object({
  toolId: z.string().min(1, 'Tool selection is required'),
  tier: z.string().min(1, 'Plan tier is required'),
  userCount: z.number().int().min(1, 'At least 1 seat is required'),
  monthlySpend: z.number().min(0, 'Spend cannot be negative'),
});

export const AuditInputSchema = z.object({
  companyName: z.string().optional(),
  teamSize: z.number().int().min(1, 'Team size must be at least 1'),
  useCase: z.string().optional(),
  tools: z.array(ToolInputSchema).min(1, 'Add at least one tool to audit'),
});

export type ValidatedAuditInput = z.infer<typeof AuditInputSchema>;
export type ValidatedToolInput = z.infer<typeof ToolInputSchema>;
