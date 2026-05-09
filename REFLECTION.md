<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Strategic Reflection — Project Vyay

### 1. The Hardest Bug: State Synchronization in the Multi-Step Stepper
Early in Day 3, I hit a frustrating state hydration issue. The multi-step audit form was losing partial inputs when users navigated "Back" to correct a previous step. 
- **Hypothesis**: I initially assumed it was a React re-render issue with local component state.
- **Failed Assumption**: Moving state to a higher-level component didn't fix it because of how the routing was triggering unmounts.
- **Root Cause**: The Zustand store was initializing with defaults on every mount because I had placed the initial state object outside the store creator incorrectly.
- **Fix**: Refactored the store to use a persistent state pattern and added a small `localStorage` sync for the transient form data.
- **Lesson**: Even for "simple" apps, state lifecycle management is the most common point of failure.

### 2. Strategic Pivot: Removing Authentication
Initially, I planned a robust Supabase Auth implementation with RBAC. Midway through Day 1, I reversed this.
- **Rationale**: I realized that asking an Engineering Manager to "Sign up with Google" just to see if they're overspending $20 on Cursor is a massive UX failure.
- **Trade-off**: I traded "user data stickiness" for "immediate conversion." 
- **Result**: By using anonymous session IDs and shareable URLs, I reduced the "Time-to-Value" from 3 minutes to 45 seconds. This significantly improved the product's clarity as a high-velocity lead-gen tool.

### 3. Week 2: Scaling Beyond the MVP
If I had another week, I wouldn't just add "more AI." I would focus on:
- **Historical Spend Tracking**: Allowing users to upload CSVs from Stripe/AWS to track spend *over time* rather than just a snapshot.
- **Finance-Ready Exports**: Generating high-fidelity CFO-ready PDFs that justify budget cuts with specific ROI metrics.
- **Benchmark Data Integration**: Aggregating anonymous audit data to show users how they compare to "best-in-class" teams of their size.

### 4. AI Usage: Accelerant & Guardrails
- **Acceleration**: Used Gemini for UI scaffolding, boilerplate TypeScript interfaces, and drafting initial market-copy variations. It saved roughly 30% of development time on the "mundane" parts.
- **Friction**: I intentionally avoided using AI for the core recommendation logic. In testing, Gemini suggested "cutting all GPU instances" to save money—which was technically true but operationally catastrophic. 
- **Verification**: I manually verified all pricing data in `src/data/pricing.ts` against vendor docs. AI was a co-pilot, but the "flight deck" remained deterministic and human-led.

### 5. Professional Self-Rating
- **Architectural Judgment: 9/10** — Strong decisions on simplification and deterministic logic.
- **UI/UX execution: 8/10** — Clean and functional, but some advanced visualizations for the result page could be more polished.
- **Problem-Solving: 8/10** — Adapted well to state synchronization issues, though I spent too much time initially over-engineering the backend.
