<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Vyay — AI Spend Audit Platform

**Vyay** is a high-velocity expenditure audit utility designed for engineering leadership and founders to optimize AI infrastructure costs. The platform provides a deterministic analytical engine to identify service redundancies and plan sub-optimalities, delivering actionable financial insights in under 60 seconds.

**Deployed URL**: [https://vyay-ai-credits-auditer.vercel.app/](https://vyay-ai-credits-auditer.vercel.app/)

## Platform Visuals
<p align="center">
  <img src="https://via.placeholder.com/800x450.png?text=Landing+Page+Dashboard" alt="Landing Page" width="32%" />
  <img src="https://via.placeholder.com/800x450.png?text=Multi-Step+Audit+Interface" alt="Audit Form" width="32%" />
  <img src="https://via.placeholder.com/800x450.png?text=Analytical+Results+Reporting" alt="Results Page" width="32%" />
</p>

## Quickstart Guide

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Initialize the development environment:
   ```bash
   npm run dev
   ```

## Strategic Trade-off Decisions

1. **Authentication Model (Deferred)**: We intentionally omitted a traditional authentication layer to eliminate user friction. This "Time-to-Value" prioritization ensures a 60-second completion target, maximizing initial lead conversion.
2. **State Management (Zustand)**: Selected over Redux or Context for its minimalist architectural footprint and superior performance in managing the multi-stage transient state of the audit form.
3. **Audit Logic (Deterministic over Stochastic)**: We utilized hardcoded rule-based logic for audit calculations rather than LLM inference. This ensures 100% mathematical accuracy and defensibility, which is critical for financial reporting.
4. **Styling Framework (Tailwind CSS + shadcn/ui)**: Leveraged for rapid, consistent component development. This allowed us to focus effort on the audit engine's complexity while maintaining a premium, "wow-factor" visual aesthetic.
5. **Data Persistence (Supabase)**: Opted for Supabase to handle the generation of unique, shareable report IDs. This provides a robust relational backend without the overhead of maintaining a custom server-side infrastructure.

## Technical Specifications
- **Frontend**: React, Vite, TypeScript, Tailwind CSS
- **Infrastructure**: Vercel (Deployment), Supabase (Persistence)
- **Analytical Intelligence**: Gemini 2.5 Flash API (Summary generation)
- **Communications**: Resend (Transactional Email)

---
Developed by **Tarunya** for the Credex Web Development Internship Assignment.
