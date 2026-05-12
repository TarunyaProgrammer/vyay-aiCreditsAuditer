<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Vyay — The Strategic AI Infrastructure Auditor

**Vyay** is a high-velocity expenditure audit utility designed for engineering leadership and founders to rationalize AI infrastructure costs. Delivering actionable financial intelligence in under 60 seconds, Vyay identifies service redundancies and plan sub-optimality through a 100% deterministic analytical engine.

**Live Platform**: [https://vyaytarunya.vercel.app/](https://vyaytarunya.vercel.app/)

## Platform Visuals
<p align="center">
  <img src="public/Platform_HomePage.png" alt="Vyay Home Page" width="100%" />
</p>
<p align="center">
  <img src="public/Platform_AuditPage.png" alt="Vyay Audit Dashboard" width="100%" />
</p>

## Technical Decisions & Trade-offs

During the development of Vyay, I prioritized **Time-to-Value** and **Institutional Defensibility**. Below are the 5 core trade-offs made:

1. **Deterministic Logic vs. LLM Reasoning**: I intentionally avoided using AI for the audit math itself. Financial audits require 100% repeatability. By using a hardcoded rule engine based on verified vendor data, we ensure that every recommendation is mathematically sound and CFO-ready.
2. **Zero-Authentication Model**: To maximize lead generation velocity, I bypassed traditional sign-up walls. The friction of account creation is the primary bounce factor for founders; Vyay provides insight first and requests identity (email) only after value is demonstrated.
3. **Client-Side Orchestration**: The audit engine executes entirely on the client. This offloads computational overhead from our infrastructure, ensuring near-infinite scalability and sub-100ms execution times without increasing OpEx.
4. **Zustand Persistence**: I chose Zustand with LocalStorage persistence over database-only state. This allows users to leave and return to their specific audit progress without needing an account, maintaining a high conversion rate in a multi-step wizard.
5. **Calm Engineering Aesthetic**: I rejected flashy "AI gradients" and excessive animations in favor of a data-dense, industrial-minimalist design (Cream & Charcoal). This aesthetic establishes the "Institutional Trust" required for a financial tool.

## The "Day 7" Launch Readiness Report
- [x] **Deterministic Audit Engine**: 100% rule-based reasoning for financial defensibility.
- [x] **Hybrid AI Synthesis**: Gemini 1.5 Flash integration for human-centric executive summaries.
- [x] **Zero-Friction Persistence**: Supabase-backed report storage with unique, shareable URLs.
- [x] **Lead Capture & Distribution**: Transactional email integration via Resend for PDF report delivery.
- [x] **Operational Transparency**: Comprehensive documentation covering GTM, Economics, and Architecture.
- [x] **Production Grade**: 90+ Lighthouse accessibility scores and a robust Vitest suite.

## Strategic Documentation

| Document | Description |
| :--- | :--- |
| [**ARCHITECTURE.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/ARCHITECTURE.md) | Mermaid system diagrams, data flow, stack justification, and scaling strategy. |
| [**DEVLOG.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/DEVLOG.md) | Day-by-day technical narrative and project progression log. |
| [**REFLECTION.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/REFLECTION.md) | Philosophical analysis on deterministic logic vs AI hype and technical reflections. |
| [**TESTS.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/TESTS.md) | Automated test suite documentation and audit engine coverage. |
| [**PRICING_DATA.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/PRICING_DATA.md) | Verified vendor pricing data with official citation URLs. |
| [**PROMPTS.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/PROMPTS.md) | Complete LLM prompts used, rationale, and iteration history. |
| [**GTM.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/GTM.md) | Go-to-market strategy, user acquisition blueprint, and traction metrics. |
| [**ECONOMICS.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/ECONOMICS.md) | Unit economics, LTV/CAC analysis, and $1M ARR roadmap. |
| [**USER_INTERVIEWS.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/USER_INTERVIEWS.md) | Real-world insights from engineering leadership and founders. |
| [**LANDING_COPY.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/LANDING_COPY.md) | High-fidelity messaging, CTAs, and social proof orchestration. |
| [**METRICS.md**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/METRICS.md) | North Star metric, instrumentation plan, and pivot triggers. |
| [**CI Workflow**](https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer/blob/main/.github/workflows/ci.yml) | GitHub Actions configuration for automated linting and testing. |

## Core Technology Stack
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS
- **Intelligence**: Gemini 2.5 Flash (Analytical synthesis)
- **Data/Persistence**: Supabase (PostgreSQL), Zustand (LocalStorage)
- **Communications**: Resend (Transactional Email)
- **Infrastructure**: Vercel (Edge Deployment)

## Quickstart

```bash
# Clone the repository
git clone https://github.com/TarunyaProgrammer/vyay-aiCreditsAuditer.git

# Install dependencies
npm install

# Execute development environment
npm run dev

# Execute test suite
npm test
```

---
Developed by **Tarunya** for the Credex Web Development Internship.
"Calm technology for engineering budget recalibration."

