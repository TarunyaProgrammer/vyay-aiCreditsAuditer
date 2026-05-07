<img src="public/logo_light.png" alt="Vyay Logo" width="200" />

# Vyay — AI Spend Audit Platform

**Vyay** is a professional-grade spend audit platform developed for engineering teams and enterprise startups. The system identifies redundant AI subscriptions, oversized service plans, and cost-effective alternatives with high efficiency.

## Executive Summary
Modern organizations frequently incur unnecessary expenses due to unmanaged AI subscriptions across various platforms, including ChatGPT, Claude, Cursor, and GitHub Copilot. Engineering departments often maintain overlapping service features or underutilized premium tiers.

Vyay provides a deterministic, data-driven audit process to optimize resource allocation and recover capital.

## Core Capabilities
- **Frictionless Audit Process**: No authentication required to minimize time-to-value.
- **Deterministic Analysis**: Audit logic based on validated pricing data and feature mapping.
- **Cost Optimization**: Automated identification of open-source or lower-cost alternatives.
- **Reporting and Distribution**: Generation of public URLs for stakeholder review and financial reporting.
- **Mobile Compatibility**: Optimized interface for cross-device accessibility.

## Technical Specifications
- **Frontend**: React, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **State Management**: React Router, Zustand, Zod
- **Backend Infrastructure**: Supabase
- **Artificial Intelligence**: Gemini 2.5 Flash API
- **Communication Services**: Resend
- **Quality Assurance**: Vitest, React Testing Library

## System Directory Structure
```text
src/
├── app/          # Application providers and global configuration
├── pages/        # Route-level components
├── components/   # UI components (layout, landing, audit, result)
├── features/     # Feature-specific business logic
├── services/     # External service integrations
├── store/        # State management
├── rules/        # Audit logic and business rules
├── data/         # Static pricing and tool definitions
├── hooks/        # Reusable application hooks
├── types/        # TypeScript type definitions
└── utils/        # Utility functions
```

## System Architecture
Vyay utilizes a deterministic rule engine integrated with LLM-assisted analysis to process complex spend patterns. Data is ingested via a multi-step audit interface, processed through the rule engine, and persisted in Supabase for secure retrieval and distribution.

## Strategic Decisions
- **Authentication Model**: Authentication was intentionally omitted to maximize user conversion and immediate utility.
- **State Architecture**: Zustand was selected for its minimalist footprint and efficiency in managing complex form states.
- **Styling Framework**: Tailwind CSS was utilized to ensure a high-performance, standardized UI consistent with modern design principles.

## Deployment Profile
The application is deployed via Vercel, utilizing Supabase for backend data persistence and management.

---
Developed for professional engineering organizations.
