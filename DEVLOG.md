<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Project Development Log — Vyay

### Day 1: Architecture Reduction & Trust Foundation
- **Goal**: Full-stack audit dashboard with auth.
- **Pivot**: Realized "Time-to-Value" is the critical metric for lead-gen. Removed auth to prioritize a 60-second "Anonymous-to-Insight" flow.
- **Decision**: Locked down a "calm" data-centric UI over flashy AI gradients to establish financial credibility.

### Day 2: Dynamic UI & Validation
- **Goal**: Build a flexible inventory ingestion system.
- **Accomplishments**: 
  - Implemented 3-step dynamic audit wizard with card-based tool management.
  - Setup Zod schema validation to ensure runtime data integrity.
  - Created a reusable shared component library (`src/components/shared`) following a "McKinsey-style" aesthetic.
- **Insight**: Discovered that small-team users often have complex mixed-vendor stacks, requiring a dynamic "Add Tool" approach over simple checkboxes.

### Day 3: Deterministic Engine & Financial Defensibility
- **Focus**: Turning UI inputs into credible, explainable financial logic.
- **Pivot**: Explicitly avoided LLM-generated recommendations. Financial auditing requires 100% deterministic math to be trustworthy for technical founders.
- **Accomplishments**:
  - Implemented modular rule architecture: `oversized`, `overlap`, `redundancy`, and `retail`.
  - Introduced **Confidence Scoring** (High/Medium/Low) for every recommendation to reflect operational nuances.
  - Developed the **"Already Optimized"** logic path. Validating efficient spend is higher signal for trust than forcing fake savings.
  - **Testing**: Implemented 5+ core engine tests covering edge cases (zero spend, tiny teams, stack saturation).
- **Learning**: Conservative recommendations (e.g., "Review your Enterprise mismatch") feel more professional than aggressive claims (e.g., "Switch to free tools").

### Day 4: Persistence & Shareability (Planned)
- **Focus**: Strategic storage and public report URLs.
- **Goal**: Integrate Supabase for persistent report storage and unique ID generation.

### Day 5: Commercial Validation (Planned)
- **Focus**: Economics, GTM strategy, and final accessibility audit.
