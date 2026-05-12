# Vyay — Full MVP + Bonus Implementation Specification

This document encapsulates the original vision, implementation requirements, and product principles that define **Vyay**. It serves as the definitive guide for maintaining the platform's strategic positioning and technical integrity.

## 1. Product Positioning

Vyay audits AI subscription and API spend for small engineering teams and startups, identifying unnecessary costs, overlapping tools, and cheaper alternatives in under 60 seconds.

### Core Principles
- **No Authentication**: Value first, identity later.
- **Fast Time-to-Value**: Results in < 60 seconds.
- **Deterministic Audit Logic**: 100% rule-based financial reasoning.
- **Conservative Recommendations**: No manufactured savings.
- **Financial Credibility**: CFO-ready data and tone.
- **Publicly Shareable Results**: Built-in viral loop.
- **Strong UX Polish**: Modern, restrained SaaS aesthetic.

---

## 2. Required MVP Features

### FEATURE 1 — Spend Input Form
A highly polished, frictionless audit intake flow supporting:
- **Supported Tools**: Cursor, GitHub Copilot, Claude, ChatGPT, Anthropic API, OpenAI API, Gemini, Windsurf.
- **Input Requirements**: Selected plan, monthly spend, seat count.
- **Global Context**: Team size, primary use case (Coding, Writing, Data, Research, Mixed).
- **UX Details**: Dynamic tool cards, localStorage persistence, pricing hints, and validation warnings.

### FEATURE 2 — Deterministic Audit Engine
A rule-based reasoning system that is 100% explainable and mathematically sound.
- **Logic**: Oversized plans, duplicate tooling, overlapping subscriptions, inefficient API spend, enterprise mismatch, and coding assistant redundancy.
- **Integrity**: If savings are low, the engine is honest about the stack's efficiency.
- **Structure**: Each recommendation includes current spend, action, estimated savings, confidence level, and reasoning.

### FEATURE 3 — Audit Results Page
The primary visual anchor of the product, designed to be screenshot-worthy and shareable.
- **Sections**: Savings Hero (Monthly/Annual), Per-Tool Recommendations, "Already Optimized" handling, Lead Capture, and Share Section.
- **CTA Logic**: High savings (>$500/mo) trigger a Credex consultation CTA.

### FEATURE 4 — AI-Generated Summary
Using **Gemini 2.5 Flash** for executive-style synthesis.
- **Role**: Translation of deterministic data into a human-readable strategic narrative.
- **Tone**: Calm, analytical, and professional.
- **Fallback**: A robust deterministic summary template if the AI service is unavailable.

### FEATURE 5 — Lead Capture & Storage
A non-gated conversion flow utilizing **Supabase** for persistence.
- **Persistence**: Audits and leads are stored securely.
- **Communication**: Integrated **Resend** transactional emails for report delivery.
- **Protection**: Honeypot-based abuse prevention.

### FEATURE 6 — Shareable Result URLs
Publicly accessible results at `/result/:publicId`.
- **Privacy**: No exposure of PII (email, company name) in public reports.
- **Social**: Fully optimized Open Graph (OG) metadata and Twitter cards.

---

## 3. Bonus Features Implemented

### BONUS 1 — PDF Export
Downloadable, clean-formatted audit reports for institutional sharing.

### BONUS 2 — Embeddable Widget
A lightweight `<script>` widget for third-party integration on blogs and startup sites.

### BONUS 3 — Benchmark Mode
Contextual insights comparing user spend against peer-group averages (e.g., "28% above similar 5-15 person teams").

### BONUS 4 — Referral Codes
A lightweight referral tracking system for community-driven growth.

### BONUS 5 — Launch Content
Pre-generated launch copy for Product Hunt, X/Twitter, and founder-focused blogs.

---

## 4. Engineering & Design Philosophy

### Design Philosophy
- **Restrained & Calm**: No neon, no flashy gradients, no over-animation.
- **Modern SaaS**: Clean layouts, high-quality typography (Inter & Playfair Display).
- **Industrial Minimalism**: Cream and Charcoal palette for institutional trust.

### Engineering Philosophy
- **TypeScript First**: End-to-end type safety.
- **Modular Architecture**: Rule-based engine decoupled from the UI.
- **Efficiency**: Client-side execution for near-zero infrastructure overhead.
- **Reliability**: Comprehensive Vitest suite for all core logic.

---
"Calculated intelligence, verified data."
