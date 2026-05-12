<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Project Development Log — Vyay

## Day 1 2026-05-05
**Hours worked:** 4
**What I did:** Initial project ideation and scoping. Conducted "Market Scans" for AI tool pricing.
**What I learned:** Most AI cost-saving tools focus on API usage; there's a massive gap in auditing "Seat-based" SaaS subscriptions like Cursor and Claude Pro.
**Blockers / what I'm stuck on:** Deciding between a deep OAuth integration vs. a high-velocity manual input model.
**Plan for tomorrow:** Finalize architecture and setup the project repository.

## Day 2 2026-05-06
**Hours worked:** 6
**What I did:** Setup Vite + React + TypeScript. Implemented the core UI foundation and the 3-step audit wizard.
**What I learned:** Tailwind's utility-first approach is perfect for building a custom "Calm Engineering" aesthetic without generic UI kits.
**Blockers / what I'm stuck on:** Handling complex state across multi-step forms while ensuring persistence.
**Plan for tomorrow:** Build the deterministic audit engine.

## Day 3 2026-05-07
**Hours worked:** 8
**What I did:** Developed the `runAudit` engine. Mapped 20+ pricing rules. Implemented Vitest suite for logic verification.
**What I learned:** Financial auditing logic must be deterministic. Stochastic AI summaries are good for synthesis, but math requires business rules.
**Blockers / what I'm stuck on:** Correctly identifying overlaps between ChatGPT Plus and Gemini Advanced when they come bundled with other services.
**Plan for tomorrow:** Integrate persistence and AI summaries.

## Day 4 2026-05-08
**Hours worked:** 0
**What I did:** Day off for mental recalibration and independent research into Credex's unit economics.
**What I learned:** High-value leads are worth significantly more than the "saved" amount due to LTV.
**Blockers / what I'm stuck on:** None.
**Plan for tomorrow:** Connect Supabase and Gemini.

## Day 5 2026-05-09
**Hours worked:** 10
**What I did:** Integrated Supabase for report storage and Gemini 2.5 Flash for summaries. Configured Resend for transactional emails.
**What I learned:** Gemini 2.5 Flash is significantly faster than Pro for this specific task, hitting sub-2s response times.
**Blockers / what I'm stuck on:** Handling rate limits on the Gemini free tier during rapid testing.
**Plan for tomorrow:** Build shareable report pages and OG tags.

## Day 6 2026-05-10
**Hours worked:** 7
**What I did:** Implemented dynamic Open Graph previews and the public report hydration logic. Finalized the landing page polish.
**What I learned:** Social shareability is the primary viral loop for this tool. OG previews are high-leverage assets.
**Blockers / what I'm stuck on:** Vercel deployment issues with media-src CSP headers for the hero video.
**Plan for tomorrow:** Final documentation audit and production hardening.

## Day 7 2026-05-11
**Hours worked:** 9
**What I did:** Conducted user interviews. Finalized the 12 required markdown files. Hardened accessibility and testing.
**What I learned:** Users respond more to "Annualized Savings" than monthly. It triggers a stronger "Pivot or Recalibrate" response.
**Blockers / what I'm stuck on:** None. Project at launch readiness.
**Plan for tomorrow:** Final submission.
