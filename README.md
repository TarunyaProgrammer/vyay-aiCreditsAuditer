# Vyay — AI Spend Audit Platform

**Vyay** (Sanskrit for "Spend") is a production-quality spend audit platform built for small engineering teams and startups. It identifies overlapping AI tools, oversized plans, and cheaper alternatives in under 60 seconds.

## 🚀 Problem Statement
Startups today are leaking cash through "Shadow AI" — unmanaged subscriptions to ChatGPT, Claude, Cursor, GitHub Copilot, and various API keys. Engineering teams often pay for overlapping features or tiered plans that are 80% underutilized.

Vyay provides a fast, trust-based, and deterministic audit to reclaim that spend.

## ✨ Key Features
- **Zero-Friction Audit**: No authentication required. Just input your tools and get results.
- **Deterministic Logic**: Audit rules based on real pricing data and feature overlaps.
- **Cheaper Alternatives**: Intelligent mapping to open-source or lower-cost AI providers.
- **Shareable Reports**: Public URLs for audit results to share with finance or leadership.
- **Mobile Optimized**: Review your team's spend on the go.

## 🛠 Tech Stack
- **Frontend**: React, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **State & Logic**: React Router, Zustand, Zod
- **Backend**: Supabase
- **AI**: Gemini 2.5 Flash API
- **Email**: Resend
- **Testing**: Vitest, React Testing Library

## 📂 Project Structure
```text
src/
├── app/          # App providers and global config
├── pages/        # Route components
├── components/   # UI components (layout, landing, audit, result)
├── features/     # Feature-specific logic (audit engine, sharing)
├── services/     # External API integrations (Supabase, Gemini)
├── store/        # Zustand state management
├── rules/        # Audit logic & business rules
├── data/         # Static pricing & tool data
├── hooks/        # Reusable React hooks
├── types/        # TypeScript definitions
└── utils/        # Helper functions
```

## 🏗 Planned Architecture
Vyay uses a **deterministic rule engine** coupled with **LLM-assisted analysis** for complex spend patterns. Data flows from a multi-step audit form into the rule engine, which generates a report stored in Supabase and shared via a unique ID.

## 🤝 Decisions & Tradeoffs
- **No Auth**: We prioritized "Time-to-Value". Forcing a login for a 60-second audit is a conversion killer.
- **Zustand over Redux**: Simpler state management for a tool-focused application.
- **Tailwind CSS**: Rapid UI development with a premium "glassmorphic" aesthetic.

## 📸 Screenshots
*(Coming Soon — Placeholder for Hero Section)*

## 🚀 Deployment
Vyay is deployed on **Vercel** with Supabase handling the backend.

---
Built with 💡 for the modern engineering team.
