# Pricing Data & Market Research

This document tracks the pricing tiers of major AI tools supported by Vyay.

## 🛠 Supported Tools & Tiers

### 1. Cursor
- **Free**: $0 (Limited completions)
- **Pro**: $20/mo (Unlimited completions, 500 fast premium requests)
- **Business**: $40/user/mo (Privacy, admin controls)

### 2. ChatGPT (OpenAI)
- **Free**: $0
- **Plus**: $20/mo
- **Team**: $30/user/mo (minimum 2 users)
- **Enterprise**: Custom (~$60/user/mo)

### 3. Claude (Anthropic)
- **Free**: $0
- **Pro**: $20/mo
- **Team**: $30/user/mo (minimum 5 users)

### 4. GitHub Copilot
- **Individual**: $10/mo
- **Business**: $19/user/mo
- **Enterprise**: $39/user/mo

### 5. Gemini (Google)
- **Pro**: $20/mo
- **Enterprise**: $30/user/mo

## 💡 Audit Logic Hooks
- **Overlap**: If user has Cursor Pro ($20) AND GitHub Copilot ($10), recommend dropping Copilot (Total Savings: $10/mo).
- **Oversized**: If a 2-person team uses ChatGPT Team ($60 total), check if they actually need shared workspaces; otherwise, recommend 2x ChatGPT Plus ($40 total).
- **Alternatives**: Recommend Groq or Together AI for high-throughput API usage instead of OpenAI tiers if latency is not the primary factor.
