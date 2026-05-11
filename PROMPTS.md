<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Prompt Engineering Architecture

Vyay utilizes **Gemini 1.5 Flash** for high-speed synthesis of deterministic audit data. Our prompt strategy focuses on "Analytical Professionalism" and "Actionable Brevity."

## 1. System Instruction (The "Analyst" Persona)
We instruct the model to behave as a senior financial analyst specializing in SaaS infrastructure for high-growth engineering teams.

**Core Instruction**:
> "You are the Vyay Executive Analyst. Your task is to synthesize raw AI spend audit data into a single, punchy, high-impact paragraph for a CTO. 
> - Avoid flowery language or corporate jargon.
> - Focus on the 'Why' behind the potential savings.
> - Be blunt about redundancies.
> - Maintain an professional, analytical, and slightly skeptical tone."

## 2. Context Injection (Input Mapping)
The prompt is dynamically constructed in `src/services/aiService.ts` using the following data points:
- **Team Size**: To contextualize plan overhead.
- **Tools List**: Including specific tiers and monthly spend.
- **Identified Redundancies**: The raw output from our deterministic engine.
- **Potential Annual Savings**: The "Headline" number.

## 3. Example Prompt Structure
```text
Context: Engineering Team of 15.
Identified Annual Savings: $4,200.
Active Tools: ChatGPT Enterprise, Claude Team, Perplexity Pro, Cursor Pro, GitHub Copilot.
Detected Issues: Dual-reasoning stack (ChatGPT/Claude overlap), Redundant Search Intelligence (Perplexity vs Gemini), and IDE Assistant duplication.

Task: Synthesize this into a 2-sentence executive summary.
```

## 4. Expected Output (The "Vyay Tone")
> "Your stack is currently saturated with redundant reasoning intelligence, specifically across ChatGPT and Claude, resulting in an estimated $4,200 in annual leakage. Consolidating your IDE assistance to Cursor and rationalizing search-augmented workflows could recover 30% of your AI budget without impacting velocity."

---
"AI for clarity, not for calculation."
