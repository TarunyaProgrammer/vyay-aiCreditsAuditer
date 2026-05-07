<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Quality Assurance and Testing Strategy — Vyay

Vyay utilizes a deterministic testing suite to ensure the mathematical integrity of all financial recommendations. Every release is validated against the following Quality Assurance protocols.

## 1. Core Testing Infrastructure
- **Test Runner**: Vitest (High-speed, Vite-native)
- **UI Validation**: React Testing Library + JSDOM
- **Schema Validation**: Zod-based contract testing

## 2. Mandatory Audit Engine Test Cases (Min 5)

| Test Case ID | Objective | Expected Outcome |
| :--- | :--- | :--- |
| **TC-01** | Redundancy Detection: Cursor + Copilot | System identifies overlapping IDE capabilities and recommends deactivating GitHub Copilot (Savings: $10/mo). |
| **TC-02** | Tier Optimization: Claude Team (Underutilized) | In teams < 5, identifies that individual Pro seats are more cost-effective than the Team tier (Savings: $90/mo). |
| **TC-03** | Redundancy Detection: ChatGPT + Claude | Identifies that maintaining Pro seats on both platforms for the same user is sub-optimal; recommends consolidation based on "Primary Use Case." |
| **TC-04** | API Substitution Logic | Detects high-volume GPT-4o usage and recommends a 30% saving through GPT-4o-mini or a 70% saving via Gemini 1.5 Flash. |
| **TC-05** | Null/Empty State Handling | Ensures that a submission with zero tools results in an "Optimal Spend" status with no erroneous recommendations generated. |

## 3. Interface and Integration Protocols
- **State Persistence**: Validates that form data survives page reloads (Zustand/LocalStorage integration).
- **Navigation Sequence**: Ensures a user cannot bypass the data ingestion stage and jump directly to the results dashboard.
- **Lead Capture Validation**: Validates that the "Book Consultation" CTA only appears for audits identifying >$500/mo in savings.

## 4. Execution Protocol
To execute the automated testing suite and generate a coverage report:
```bash
# Execute unit and component tests
npm run test

# Generate coverage analysis
npm run test -- --coverage
```

## 5. Continuous Integration (CI)
Automated testing is integrated into the `.github/workflows/ci.yml` pipeline. Every push to the `main` branch triggers a full suite execution. A "Green" status is a hard requirement for all production deployments.
