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

## Project Status: Day 2 Complete
- [x] **Architecture Redux**: Implemented a feature-oriented directory structure.
- [x] **Design System**: Established a shared component library (`src/components/shared`) with a McKinsey-style aesthetic.
- [x] **Dynamic Audit UX**: Realized a 3-step dynamic audit flow with Zod validation.
- [x] **Market Data Integrity**: Unified official pricing data into a deterministic reference engine.
- [x] **Testing Foundation**: Initialized Vitest and React Testing Library setup.

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
