import { AuditTool } from '../types';

export const SUPPORTED_TOOLS: AuditTool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    provider: 'Anysphere',
    category: 'ide',
    website: 'https://cursor.com/pricing',
    plans: [
      { name: 'Hobby', price: 0, billing: 'monthly', features: ['Limited completions'] },
      { name: 'Pro', price: 20, billing: 'monthly', features: ['Unlimited completions', '500 fast requests'] },
      { name: 'Business', price: 40, billing: 'monthly', features: ['Shared billing', 'Admin controls'] },
    ],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    provider: 'OpenAI',
    category: 'chat',
    website: 'https://chatgpt.com/pricing',
    plans: [
      { name: 'Free', price: 0, billing: 'monthly', features: ['Basic access'] },
      { name: 'Plus', price: 20, billing: 'monthly', features: ['GPT-4o', 'DALL-E'] },
      { name: 'Team', price: 25, billing: 'monthly', features: ['Shared workspace', 'Admin console'] },
      { name: 'Enterprise', price: 60, billing: 'monthly', features: ['SSO', 'Advanced Security'] },
    ],
  },
  {
    id: 'claude',
    name: 'Claude',
    provider: 'Anthropic',
    category: 'chat',
    website: 'https://claude.ai/pricing',
    plans: [
      { name: 'Free', price: 0, billing: 'monthly', features: ['Claude 3.5 Sonnet'] },
      { name: 'Pro', price: 20, billing: 'monthly', features: ['Priority access', 'Claude 3.5 Opus'] },
      { name: 'Team', price: 25, billing: 'monthly', features: ['Minimum 5 users', 'Centralized billing'] },
    ],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    provider: 'GitHub',
    category: 'ide',
    website: 'https://github.com/features/copilot',
    plans: [
      { name: 'Individual', price: 10, billing: 'monthly', features: ['Autocomplete', 'Chat'] },
      { name: 'Business', price: 19, billing: 'monthly', features: ['Policy control'] },
      { name: 'Enterprise', price: 39, billing: 'monthly', features: ['Custom models'] },
    ],
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    provider: 'Perplexity AI',
    category: 'chat',
    website: 'https://www.perplexity.ai/pro',
    plans: [
      { name: 'Free', price: 0, billing: 'monthly', features: ['Basic search'] },
      { name: 'Pro', price: 20, billing: 'monthly', features: ['Advanced models', 'File uploads'] },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    provider: 'Google',
    category: 'chat',
    website: 'https://gemini.google/subscriptions',
    plans: [
      { name: 'Free', price: 0, billing: 'monthly', features: ['Gemini Pro'] },
      { name: 'Advanced', price: 20, billing: 'monthly', features: ['Gemini 1.5 Pro', '2TB Storage'] },
      { name: 'Business', price: 20, billing: 'monthly', features: ['Workspace integration'] },
    ],
  },
];

// Internal reference for deterministic logic hooks
export const pricingData = {
  cursor: {
    hobby: { monthly: 0, seats: 'individual' },
    pro: { monthly: 20, seats: 'individual' },
    business: { monthly: 40, seats: 'multi' },
  },
  chatgpt: {
    free: { monthly: 0, seats: 'individual' },
    plus: { monthly: 20, seats: 'individual' },
    team: { monthly: 25, seats: 'multi' },
  },
  claude: {
    free: { monthly: 0, seats: 'individual' },
    pro: { monthly: 20, seats: 'individual' },
    team: { monthly: 25, seats: 'multi', minSeats: 5 },
  },
  'github-copilot': {
    individual: { monthly: 10, seats: 'individual' },
    business: { monthly: 19, seats: 'multi' },
    enterprise: { monthly: 39, seats: 'multi' },
  },
  perplexity: {
    free: { monthly: 0, seats: 'individual' },
    pro: { monthly: 20, seats: 'individual' },
  },
};
