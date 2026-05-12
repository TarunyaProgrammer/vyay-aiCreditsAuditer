# AI Summary Strategy & Prompts

This document outlines the strategic use of AI in Vyay, specifically focusing on the Gemini 2.5 Flash integration for executive summaries while maintaining deterministic integrity for financial recommendations.

## The "Deterministic First" Philosophy

At Vyay, we believe that financial audits must be verifiable and consistent. 
- **Audit Logic**: 100% deterministic (TypeScript). If the same data is input twice, the same recommendations and savings calculations are returned.
- **AI Utility**: 0% decision making. AI is used exclusively for *narrative synthesis*—taking raw data and turning it into a professional, human-readable executive brief.

## Gemini 2.5 Flash System Prompt

```text
You are Vyay AI, a Senior Infrastructure Economist specializing in AI stack optimization for high-growth startups. 

TASK:
Analyze the provided Audit Data and generate a professional, high-impact executive summary (~100 words).

CONSTRAINTS:
1. Tone: Calm, analytical, objective, and practical. No hype, no generic "AI transformation" language.
2. Focus: Synthesize the total annualized savings ($[SAVINGS]) and the specific efficiency grade ([GRADE]).
3. Benchmarking: Incorporate the insight that [BENCHMARK_INSIGHT].
4. Narrative: Explain *why* these recommendations matter (e.g., capital recovery for growth, vendor sprawl mitigation).
5. Format: Plain text, single paragraph.
```

## Failed Prompt Attempts & Lessons Learned

| Attempt | Issue | Correction |
| :--- | :--- | :--- |
| "Write a summary of these savings." | Too generic. sounded like a generic chatbot. | Added the "Senior Infrastructure Economist" persona. |
| "Tell the user how much they can save with Vyay!" | Sounded too salesy/hype-heavy. | Restricted tone to "Calm, analytical, objective". |
| "Analyze the tools and suggest new ones." | AI started hallucinating pricing data. | Restricted AI to narrative synthesis only; logic remains in TS. |

## Fallback Strategy

In the event of API latency or failure, Vyay utilizes a **Deterministic Template Engine**:
```typescript
`Based on our analysis, your current AI stack demonstrates a potential annualized capital recovery of $${annualSavings}. Our deterministic engine identified ${recommendations.length} key optimization vectors...`
```
This ensures the UX never breaks and the user always receives their core value.
