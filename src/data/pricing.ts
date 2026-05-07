import { AuditTool } from '../types';

export const SUPPORTED_TOOLS: AuditTool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    provider: 'Anysphere',
    category: 'ide',
    website: 'https://cursor.sh',
    plans: [
      { name: 'Free', price: 0, billing: 'monthly', features: ['Limited completions'] },
      { name: 'Pro', price: 20, billing: 'monthly', features: ['Unlimited completions', '500 fast requests'] },
      { name: 'Business', price: 40, billing: 'monthly', features: ['Admin controls', 'Privacy mode'] },
    ],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    provider: 'OpenAI',
    category: 'chat',
    website: 'https://chat.openai.com',
    plans: [
      { name: 'Free', price: 0, billing: 'monthly', features: ['GPT-3.5'] },
      { name: 'Plus', price: 20, billing: 'monthly', features: ['GPT-4', 'DALL-E'] },
      { name: 'Team', price: 30, billing: 'monthly', features: ['Shared workspace', 'Admin'] },
      { name: 'Enterprise', price: 60, billing: 'monthly', features: ['SSO', 'Advanced Security'] },
    ],
  },
  {
    id: 'claude',
    name: 'Claude',
    provider: 'Anthropic',
    category: 'chat',
    website: 'https://claude.ai',
    plans: [
      { name: 'Free', price: 0, billing: 'monthly', features: ['Claude 3 Sonnet'] },
      { name: 'Pro', price: 20, billing: 'monthly', features: ['Claude 3 Opus', 'Priority access'] },
      { name: 'Team', price: 30, billing: 'monthly', features: ['Minimum 5 users', 'Centralized billing'] },
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
      { name: 'Business', price: 19, billing: 'monthly', features: ['Organization management', 'Policy control'] },
      { name: 'Enterprise', price: 39, billing: 'monthly', features: ['Custom models', 'Knowledge base'] },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    provider: 'Google',
    category: 'chat',
    website: 'https://gemini.google.com',
    plans: [
      { name: 'Free', price: 0, billing: 'monthly', features: ['Gemini Pro'] },
      { name: 'Gemini Advanced', price: 20, billing: 'monthly', features: ['Ultra 1.0', '2TB Storage'] },
      { name: 'Business', price: 20, billing: 'monthly', features: ['Workspace integration'] },
      { name: 'Enterprise', price: 30, billing: 'monthly', features: ['Unlimited usage', 'Security'] },
    ],
  },
];
