<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Vyay — AI Spend Audit Platform

**Vyay** is a high-velocity expenditure audit utility designed for engineering leadership and founders to optimize AI infrastructure costs. The platform provides a deterministic analytical engine to identify service redundancies and plan sub-optimality, delivering actionable financial insights in under 60 seconds.

**Deployed URL**: [https://vyay-ai-credits-auditer.vercel.app/](https://vyay-ai-credits-auditer.vercel.app/)

## Platform Visuals
<p align="center">
  <img src="https://via.placeholder.com/800x450.png?text=Landing+Page+Dashboard" alt="Landing Page" width="32%" />
  <img src="https://via.placeholder.com/800x450.png?text=Multi-Step+Audit+Interface" alt="Audit Form" width="32%" />
  <img src="https://via.placeholder.com/800x450.png?text=Analytical+Results+Reporting" alt="Results Page" width="32%" />
</p>

## Project Status: Day 3 Complete
- [x] **Architecture Redux**: Implemented a feature-oriented directory structure.
- [x] **Deterministic Audit Engine**: 100% rule-based reasoning for financial defensibility.
- [x] **Modular Rule Architecture**: Separate logic for oversized plans, tool overlap, and redundancy.
- [x] **Executive Dashboard**: Cinematic result page with confidence scoring and annual recovery projections.
- [x] **Automated Test Suite**: 5+ core engine tests covering diverse organizational profiles.

## Strategic Architecture

Vyay is built on a **Deterministic Financial Reasoning** model. Unlike simple AI-prompting tools, our engine uses modular, traceable rules to ensure every recommendation is financially sound.

### Audit Logic Hierarchy
1. **Oversized Plans**: Detects Enterprise/Team tier mismatches for small sub-teams.
2. **Tool Overlap**: Identifies reasoning stack saturation (e.g., ChatGPT + Claude + Perplexity).
3. **Duplicate Capabilities**: Flags redundant coding assistants (e.g., Cursor + Copilot).
4. **Optimized Baseline**: Validates and acknowledges efficient expenditure.

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

1. **Authentication Model (Deferred)**: We intentionally omitted a traditional authentication layer to eliminate user friction. This "Time-to-Value" prioritization ensures a 60-second completion target.
2. **State Management (Zustand)**: Selected for its minimalist footprint and native support for localStorage persistence, critical for form-heavy applications.
3. **Audit Logic (Deterministic over Stochastic)**: We utilized hardcoded rule-based logic tied to official vendor pricing. This ensures 100% mathematical accuracy and defensibility.
4. **Validation (Zod)**: Integrated for runtime data integrity, ensuring that audits are only executed against semantically valid inputs.
5. **Styling (Tailwind CSS)**: Leveraged for rapid, consistent component development with a focus on "calm" data-centric UI.

## Technical Specifications
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Lucide React
- **Validation**: Zod (Schema validation)
- **State**: Zustand (with Persistence)
- **Testing**: Vitest, React Testing Library
- **Infrastructure**: Vercel (Deployment), Supabase (Persistence)

---
Developed by **Tarunya** for the Credex Web Development Internship Assignment.
