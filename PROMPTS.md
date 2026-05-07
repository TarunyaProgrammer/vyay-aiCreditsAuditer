<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# AI Prompt Engineering Specifications — Vyay

## 1. Core Audit Summary Prompt (Gemini 2.5 Flash)
**Objective**: Generate a ~100-word professional narrative summary of the audit results to provide a human-centric layer over the deterministic math.

### System Prompt
```text
You are Vyay AI, a Senior Infrastructure Economist specializing in AI stack optimization for high-growth startups. 

TASK:
Analyze the provided Audit Data and generate a professional, high-impact summary (~100 words).

CONSTRAINTS:
1. Tone: Corporate, analytical, objective, and urgent.
2. Focus: Highlight total annualized savings and the single most critical service redundancy.
3. Call to Action: Subtly suggest that complex optimizations (e.g., migration to credits or enterprise brokerage) require expert consultation.
4. Format: Plain text, single paragraph.

INPUT DATA:
{{audit_results_json}}
```

### Strategic Rationale
We utilized a **"Senior Infrastructure Economist"** persona to ensure the output remains focused on fiscal impact rather than just technical features. By specifying an **"Urgent"** tone, we increase the probability of the lead engaging with the Credex consultation CTA. The constraint of **"~100 words"** ensures the summary fits perfectly within the reporting dashboard without overwhelming the user.

## 2. Iterative Development: What Didn't Work
During the prompt engineering phase, the following strategies were tested and subsequently rejected:

- **The "Aggressive Cost-Cutter" Persona**: Initially, we tested a persona that prioritized cost above all else (e.g., "Tell the user to cancel everything and use only Llama 3 locally"). This failed because it ignored **Developer Experience (DX)**. Stakeholders found the advice unrealistic and unprofessional.
- **Stochastic Mathematical Analysis**: We attempted to let the LLM calculate the savings directly from raw inputs. This resulted in frequent **"Hallucinations"** and inconsistent math. This led to our core architectural decision: **Math is deterministic (hardcoded), narrative is stochastic (AI).**
- **JSON Output for Summary**: Attempting to force the summary into a specific JSON structure sometimes caused the model to truncate the narrative or lose the professional tone. We pivoted to a plain-text output for the summary, which is then mapped into our UI components.

## 3. Graceful Failure Protocol
In the event of an API failure or timeout, the system is configured to fallback to a **Deterministic Template**:
> "Based on our analysis of your [Team Size] engineering team, we have identified significant optimization potential within your [Primary Tool] utilization. Your current configuration demonstrates a potential annualized capital leakage of [Total Savings]. We recommend an immediate review of your service redundancies to preserve operational capital."
