import { AuditTool } from '../types';

export const VERIFIED_DATE = '2026-05-12';
export const PRICING_DISCLAIMER = 'AI tool pricing is subject to frequent updates and regional variations. Values shown are based on official documentation at the time of verification.';

export const SUPPORTED_TOOLS: AuditTool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    provider: 'Anysphere',
    category: 'coding',
    website: 'https://cursor.com/pricing',
    plans: [
      { id: 'hobby', label: 'Hobby', monthlyPrice: 0, pricingModel: 'subscription', officialUrl: 'https://cursor.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'pro', label: 'Pro', monthlyPrice: 20, pricingModel: 'subscription', officialUrl: 'https://cursor.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'business', label: 'Business', monthlyPrice: 40, pricingModel: 'subscription', officialUrl: 'https://cursor.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'enterprise', label: 'Enterprise', monthlyPrice: null, pricingModel: 'subscription', officialUrl: 'https://cursor.com/pricing', verifiedAt: VERIFIED_DATE },
    ],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    provider: 'GitHub',
    category: 'coding',
    website: 'https://github.com/features/copilot',
    plans: [
      { id: 'free', label: 'Free', monthlyPrice: 0, pricingModel: 'subscription', officialUrl: 'https://github.com/features/copilot', verifiedAt: VERIFIED_DATE },
      { id: 'individual', label: 'Individual', monthlyPrice: 10, pricingModel: 'subscription', officialUrl: 'https://github.com/features/copilot', verifiedAt: VERIFIED_DATE },
      { id: 'business', label: 'Business', monthlyPrice: 19, pricingModel: 'subscription', officialUrl: 'https://github.com/features/copilot', verifiedAt: VERIFIED_DATE },
      { id: 'enterprise', label: 'Enterprise', monthlyPrice: 39, pricingModel: 'subscription', officialUrl: 'https://github.com/features/copilot', verifiedAt: VERIFIED_DATE },
    ],
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    provider: 'Codeium',
    category: 'coding',
    website: 'https://windsurf.com/pricing',
    plans: [
      { id: 'free', label: 'Free', monthlyPrice: 0, pricingModel: 'subscription', officialUrl: 'https://windsurf.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'pro', label: 'Pro', monthlyPrice: 15, pricingModel: 'subscription', officialUrl: 'https://windsurf.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'teams', label: 'Teams', monthlyPrice: 30, pricingModel: 'subscription', officialUrl: 'https://windsurf.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'enterprise', label: 'Enterprise', monthlyPrice: null, pricingModel: 'subscription', officialUrl: 'https://windsurf.com/pricing', verifiedAt: VERIFIED_DATE },
    ],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    provider: 'OpenAI',
    category: 'generalAssistant',
    website: 'https://chatgpt.com/pricing',
    plans: [
      { id: 'free', label: 'Free', monthlyPrice: 0, pricingModel: 'subscription', officialUrl: 'https://chatgpt.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'plus', label: 'Plus', monthlyPrice: 20, pricingModel: 'subscription', officialUrl: 'https://chatgpt.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'pro', label: 'Pro', monthlyPrice: 200, pricingModel: 'subscription', officialUrl: 'https://chatgpt.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'team', label: 'Team', monthlyPrice: 30, pricingModel: 'subscription', officialUrl: 'https://chatgpt.com/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'enterprise', label: 'Enterprise', monthlyPrice: null, pricingModel: 'subscription', officialUrl: 'https://openai.com/contact-sales', verifiedAt: VERIFIED_DATE },
    ],
  },
  {
    id: 'claude',
    name: 'Claude',
    provider: 'Anthropic',
    category: 'generalAssistant',
    website: 'https://claude.ai/pricing',
    plans: [
      { id: 'free', label: 'Free', monthlyPrice: 0, pricingModel: 'subscription', officialUrl: 'https://claude.ai/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'pro', label: 'Pro', monthlyPrice: 20, pricingModel: 'subscription', officialUrl: 'https://claude.ai/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'max-5x', label: 'Max 5x', monthlyPrice: 100, pricingModel: 'subscription', officialUrl: 'https://claude.ai/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'max-20x', label: 'Max 20x', monthlyPrice: 200, pricingModel: 'subscription', officialUrl: 'https://claude.ai/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'team', label: 'Team', monthlyPrice: 25, pricingModel: 'subscription', officialUrl: 'https://claude.ai/pricing', verifiedAt: VERIFIED_DATE },
      { id: 'enterprise', label: 'Enterprise', monthlyPrice: null, pricingModel: 'subscription', officialUrl: 'https://www.anthropic.com/contact-sales', verifiedAt: VERIFIED_DATE },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    provider: 'Google',
    category: 'generalAssistant',
    website: 'https://gemini.google/subscriptions',
    plans: [
      { id: 'free', label: 'Free', monthlyPrice: 0, pricingModel: 'subscription', officialUrl: 'https://gemini.google/subscriptions', verifiedAt: VERIFIED_DATE },
      { id: 'advanced', label: 'Advanced', monthlyPrice: 20, pricingModel: 'subscription', officialUrl: 'https://gemini.google/subscriptions', verifiedAt: VERIFIED_DATE },
      { id: 'ultra', label: 'Ultra', monthlyPrice: 250, pricingModel: 'subscription', officialUrl: 'https://gemini.google/subscriptions', verifiedAt: VERIFIED_DATE },
    ],
  },
  {
    id: 'anthropic-api',
    name: 'Anthropic API',
    provider: 'Anthropic',
    category: 'apiProviders',
    website: 'https://www.anthropic.com/pricing',
    plans: [
      { id: 'usage', label: 'Usage Based', monthlyPrice: 0, pricingModel: 'usage-based', officialUrl: 'https://www.anthropic.com/pricing', verifiedAt: VERIFIED_DATE },
    ],
  },
  {
    id: 'openai-api',
    name: 'OpenAI API',
    provider: 'OpenAI',
    category: 'apiProviders',
    website: 'https://openai.com/api/pricing',
    plans: [
      { id: 'usage', label: 'Usage Based', monthlyPrice: 0, pricingModel: 'usage-based', officialUrl: 'https://openai.com/api/pricing', verifiedAt: VERIFIED_DATE },
    ],
  },
  {
    id: 'gemini-api',
    name: 'Gemini API',
    provider: 'Google',
    category: 'apiProviders',
    website: 'https://ai.google.dev/pricing',
    plans: [
      { id: 'usage', label: 'Usage Based', monthlyPrice: 0, pricingModel: 'usage-based', officialUrl: 'https://ai.google.dev/pricing', verifiedAt: VERIFIED_DATE },
    ],
  },
];

export const TOOL_CATEGORIES = {
  coding: ['cursor', 'github-copilot', 'windsurf'],
  generalAssistant: ['chatgpt', 'claude', 'gemini'],
  apiProviders: ['openai-api', 'anthropic-api', 'gemini-api'],
};
