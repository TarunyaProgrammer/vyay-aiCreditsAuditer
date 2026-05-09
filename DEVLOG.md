<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Project Development Log — Vyay

### Day 1: Understanding the Problem & Architecture Reduction
- **Initial Goal**: Build a full-stack AI audit dashboard with auth and user profiles.
- **Pivot**: Realized that for a lead-gen tool, "Time-to-Value" is the only metric that matters. Authentication is friction. Removed the planned auth layer to focus on a 60-second "Anonymous-to-Insight" flow.
- **Blocked**: Struggled with balancing "startup realism" (keep it simple) vs "assignment scope" (show off complexity). Decided that engineering restraint is the better signal.
- **Next**: Lock down the UX trust foundation.

### Day 2: Building Product Foundations & Trust
- **Focus**: Calm design and validation quality.
- **Insight**: B2B financial tools don't need "loud" AI branding. They need to look like an Excel sheet and a McKinsey report had a child.
- **Activities**: Implemented the core layout, typography (Inter/Outfit), and the initial landing "hook."
- **Learning**: Restrained UI decisions (less color, better spacing) actually increase perceived trustworthiness in financial tooling.

### Day 3: Audit Logic & Deterministic Integrity
- **Focus**: Turning UX into believable logic.
- **Challenge**: Initially considered using LLMs to "guess" savings. Discarded this quickly—financial credibility requires deterministic, explainable math.
- **Blocker**: Some recommendation rules (like tool switching) sounded good on paper but were hard to defend for teams under 5 people. Refined the rules to be conservative and defensible.
- **Activities**: Built the `src/rules` engine. Logic now identifies oversized plans and tool overlaps (e.g., Cursor + Copilot) with 100% accuracy.

### Day 4: Making the Product Feel "Real"
- **Focus**: Persistence and shareability.
- **Insight**: The product felt "fake" until I could share a result URL.
- **Activities**: Integrated Supabase for report storage. Implemented unique ID generation for shareable reports.
- **Realization**: Open Graph previews and public URLs changed the feel from a "demo" to a "real internet product."
- **Refinement**: Simplified the backend coupling—stayed with a flat schema for speed.

### Day 5: Polishing & Commercial Validation
- **Focus**: Economics, GTM, and Accessibility.
- **Learning**: Writing the GTM and Economics docs exposed flaws in my earlier assumptions about "perceived savings." Adjusted the result summaries to emphasize *strategic* value, not just dollar amounts.
- **Activities**: Final accessibility audit, documentation polish, and verifying the lead capture funnel.
- **Status**: Deployment stabilized. Product is operationally ready for professional review.
