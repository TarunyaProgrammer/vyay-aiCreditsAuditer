<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Audit Engine Reference: Vendor Pricing & Tiers

This document serves as the "Source of Truth" for the deterministic audit engine. All logic hooks are calculated against these validated pricing benchmarks.

## 1. Chat & Reasoning Tiers

| Vendor | Tier | Price (seat/mo) | Official Source | Verified |
| :--- | :--- | :--- | :--- | :--- |
| **ChatGPT** | Plus | $20 | [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing) | 2026-05-11 |
| | Team | $30 | [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing) | 2026-05-11 |
| | Enterprise | $60 (est) | [openai.com/contact-sales](https://openai.com/contact-sales) | 2026-05-11 |
| **Claude** | Pro | $20 | [anthropic.com/claude/pricing](https://www.anthropic.com/claude/pricing) | 2026-05-11 |
| | Team | $30 | [anthropic.com/claude/pricing](https://www.anthropic.com/claude/pricing) | 2026-05-11 |
| **Perplexity** | Pro | $20 | [perplexity.ai/pro](https://www.perplexity.ai/pro) | 2026-05-11 |
| **Gemini** | Advanced | $20 | [gemini.google.com/pricing](https://gemini.google.com/pricing) | 2026-05-11 |

## 2. Engineering & Development Tiers

| Vendor | Tier | Price (seat/mo) | Official Source | Verified |
| :--- | :--- | :--- | :--- | :--- |
| **Copilot** | Individual | $10 | [github.com/features/copilot](https://github.com/features/copilot/plans) | 2026-05-11 |
| | Business | $19 | [github.com/features/copilot](https://github.com/features/copilot/plans) | 2026-05-11 |
| | Enterprise | $39 | [github.com/features/copilot](https://github.com/features/copilot/plans) | 2026-05-11 |
| **Cursor** | Pro | $20 | [cursor.com/pricing](https://www.cursor.com/pricing) | 2026-05-11 |
| | Business | $40 | [cursor.com/pricing](https://www.cursor.com/pricing) | 2026-05-11 |
| **Windsurf** | Pro | $20 | [codeium.com/windsurf/pricing](https://codeium.com/windsurf/pricing) | 2026-05-11 |

## 3. API Pricing Benchmarks (Input/Output)
*Used for calculating "API Substitution" savings.*

- **GPT-4o**: $2.50 / 1M input tokens | $10.00 / 1M output tokens ([openai.com/api/pricing](https://openai.com/api/pricing))
- **Claude 3.5 Sonnet**: $3.00 / 1M input tokens | $15.00 / 1M output tokens ([anthropic.com/pricing](https://www.anthropic.com/pricing))
- **Gemini 1.5 Flash**: $0.075 / 1M input tokens | $0.30 / 1M output tokens ([ai.google.dev/pricing](https://ai.google.dev/pricing))

## 4. Tier Mismatch Logic (The "CFO Rules")
- **The "Small Team" Rule**: If `teamSize < 5` AND `tier === 'team'`, suggest downgrade to Pro.
- **The "Admin Overhead" Rule**: If `userCount > 20` AND `tier === 'pro'`, suggest upgrade to Business for bulk discounting and oversight.

---
"Calculated intelligence, verified data."
