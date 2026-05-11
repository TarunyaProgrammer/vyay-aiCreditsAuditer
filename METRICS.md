<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Measurement & Analytics Strategy

To transition Vyay from an MVP to a data-driven growth engine, we focus on three distinct categories of metrics.

## 1. The North Star Metric
**Total Potential Savings Identified (TPSI)**: The aggregate dollar amount of inefficiencies uncovered by the platform across all users. This metric validates the platform's core value proposition and utility.

## 2. Strategic Conversion Funnel
We track the "Leakage Points" in our high-velocity audit flow:
- **Initiation Rate**: (Audit Starts / Landing Page UVs) — Targets 15-20%.
- **Step Completion Velocity**: The average time spent on each stage of the audit wizard. (Target: < 20s per step).
- **Executive Summary Retention**: Time spent reading the AI-generated synthesis on the result page.
- **Lead Capture Efficiency**: (Email Opt-ins / Completed Audits) — Target: > 25%.

## 3. Product-Market Fit (PMF) Proxies
- **Share Coefficient**: The ratio of public report views generated per unique audit. A coefficient > 1.2 indicates strong professional utility and viral potential.
- **Repeat Audit Rate**: Percentage of users who return to recalibrate their stack within 30 days.
- **Audit "Lean" Rate**: Percentage of audits that result in a "Fully Optimized" (Grade A) result. High rates suggest a more mature user base or a need for tighter rule thresholds.

## 4. Infrastructure & Reliability (OpEx)
- **Engine Execution Time**: Client-side logic execution latency (Target: < 100ms).
- **Gemini Synthesis Latency**: Time to generate the executive summary via API (Target: < 2.5s).
- **Report Hydration Speed**: Time to load a public report from Supabase (Target: < 800ms).

## 5. Downstream Sales (Credex Internal)
- **Lead Quality Score**: Automated scoring based on identified savings ($) and team size.
- **Consultation Conversion**: Percentage of captured leads that book a Credex strategy session.

## 6. Pivot Decision Thresholds
We define the following "Early Warning" signals that would trigger a strategic pivot or operational recalibration:
- **Low Engagement**: If the **Audit Initiation Rate** remains below 5% after 2,000 unique visitors, we will pivot from a "Self-Reported Form" to a "Direct File Upload (CSV)" model to further reduce friction.
- **Poor Lead Quality**: If **High-Value Leads** account for less than 3% of total audits, we will recalibrate the rule engine to target more aggressive enterprise-grade overlaps.
- **Negative Unit Economics**: If the **CAC** exceeds $200 for paid channels without a corresponding 20% increase in lead value, we will hibernate paid distribution and pivot back to 100% organic/viral distribution.

---
"We don't just audit spend; we measure the velocity of organizational optimization."
