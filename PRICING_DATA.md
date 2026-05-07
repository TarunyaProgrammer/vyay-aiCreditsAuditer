<img src="public/logo_light.png" alt="Vyay Logo" width="200" />

# Service Pricing Data and Market Analysis

This document serves as a reference for the pricing structures and service tiers of major AI platforms integrated with the Vyay audit system.

## Supported Platforms and Service Tiers

### 1. Cursor
- **Free Tier**: $0 USD (Restricted completion volume)
- **Pro Tier**: $20 USD/month (Unrestricted completions, 500 premium requests)
- **Business Tier**: $40 USD/user/month (Enhanced privacy and administrative controls)

### 2. ChatGPT (OpenAI)
- **Free Tier**: $0 USD
- **Plus Tier**: $20 USD/month
- **Team Tier**: $30 USD/user/month (Minimum requirement: 2 users)
- **Enterprise Tier**: Custom Pricing (Projected ~$60 USD/user/month)

### 3. Claude (Anthropic)
- **Free Tier**: $0 USD
- **Pro Tier**: $20 USD/month
- **Team Tier**: $30 USD/user/month (Minimum requirement: 5 users)

### 4. GitHub Copilot
- **Individual Tier**: $10 USD/month
- **Business Tier**: $19 USD/user/month
- **Enterprise Tier**: $39 USD/user/month

### 5. Gemini (Google)
- **Pro Tier**: $20 USD/month
- **Enterprise Tier**: $30 USD/user/month

## Audit Logic Integration Parameters
- **Redundancy Analysis**: In instances where an organization maintains both Cursor Pro ($20) and GitHub Copilot ($10) subscriptions, the system recommends the termination of Copilot to achieve a $10/month saving.
- **Service Tier Optimization**: For a team of two personnel utilizing ChatGPT Team ($60 total), the system evaluates the necessity of shared workspaces and recommends transition to two ChatGPT Plus accounts ($40 total) if appropriate.
- **Strategic Alternative Mapping**: Recommendations for high-throughput API utilization shift to Groq or Together AI in scenarios where latency is not the primary performance metric.
