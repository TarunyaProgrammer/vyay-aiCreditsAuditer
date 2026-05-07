<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Service Pricing Data — Market Reference Repository

Every figure in this repository is cited to official vendor documentation. Vyay utilizes these deterministic figures for all audit calculations.

| Tool | Tier | Monthly Price | Verification Date | Source URL |
| :--- | :--- | :--- | :--- | :--- |
| **Cursor** | Pro | $20/mo | 2026-05-07 | [cursor.com/pricing](https://www.cursor.com/pricing) |
| **Cursor** | Business | $40/user/mo | 2026-05-07 | [cursor.com/pricing](https://www.cursor.com/pricing) |
| **GitHub Copilot** | Individual | $10/mo | 2026-05-07 | [github.com/features/copilot#pricing](https://github.com/features/copilot#pricing) |
| **GitHub Copilot** | Business | $19/user/mo | 2026-05-07 | [github.com/features/copilot#pricing](https://github.com/features/copilot#pricing) |
| **GitHub Copilot** | Enterprise | $39/user/mo | 2026-05-07 | [github.com/features/copilot#pricing](https://github.com/features/copilot#pricing) |
| **ChatGPT** | Plus | $20/mo | 2026-05-07 | [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing) |
| **ChatGPT** | Team | $30/user/mo | 2026-05-07 | [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing) |
| **Claude** | Pro | $20/mo | 2026-05-07 | [anthropic.com/claude](https://www.anthropic.com/claude) |
| **Claude** | Team | $30/user/mo | 2026-05-07 | [anthropic.com/claude](https://www.anthropic.com/claude) |
| **Gemini** | Business | $20/user/mo | 2026-05-07 | [gemini.google.com/business](https://gemini.google.com/business/pricing) |
| **Windsurf** | Pro | $20/mo | 2026-05-07 | [codeium.com/windsurf](https://codeium.com/windsurf) |

## API Model Pricing (Per 1M Tokens)

| Model | Input Cost | Output Cost | Verification Date | Source URL |
| :--- | :--- | :--- | :--- | :--- |
| **GPT-4o** | $5.00 | $15.00 | 2026-05-07 | [openai.com/api/pricing](https://openai.com/api/pricing) |
| **GPT-4o-mini** | $0.15 | $0.60 | 2026-05-07 | [openai.com/api/pricing](https://openai.com/api/pricing) |
| **Claude 3.5 Sonnet** | $3.00 | $15.00 | 2026-05-07 | [anthropic.com/pricing](https://www.anthropic.com/pricing) |
| **Claude 3.5 Haiku** | $0.25 | $1.25 | 2026-05-07 | [anthropic.com/pricing](https://www.anthropic.com/pricing) |
| **Gemini 1.5 Flash** | $0.075 | $0.30 | 2026-05-07 | [ai.google.dev/pricing](https://ai.google.dev/pricing) |

## Deterministic Rule Logic hooks
1. **Redundancy Hook**: If `Cursor Pro` and `GitHub Copilot` are both active, recommend `Deactivate Copilot` (Save $10/mo).
2. **Tier Efficiency Hook**: If `Team Size` < 5 and `Claude Team` is active (min 5 seats), recommend `Claude Pro` individual seats (Save $90/mo).
3. **Credit Substitution Hook**: If `API Spend` > $100/mo on GPT-4o, recommend `OpenRouter Credits` or `Groq Llama 3` (Projected Save 30-70%).
