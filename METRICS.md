<img src="public/light_banner.png" alt="Vyay Logo" width="100%" />

# Key Performance Indicators (KPIs) — Project Vyay

## 1. The North Star Metric: Aggregate Identified Savings (AIS)
The definitive indicator of Vyay's value proposition is the **Aggregate Identified Savings (AIS)**. This metric tracks the total volume of capital identified as sub-optimally allocated across all completed audit cycles. 
- **Rationale**: While user volume and retention are important, AIS directly correlates with the "economic pain" we are addressing. A high AIS indicates that we are reaching organizations with significant optimization potential, which are the highest-value leads for the Credex consulting ecosystem.

## 2. Supporting Input Metrics
To drive the North Star metric, we monitor three critical input signals:
1. **Audit Completion Velocity (ACV)**: The mean duration from the first form interaction to the final report generation. Our target is < 60 seconds. A higher ACV indicates frictionless data ingestion, which directly increases the volume of completed audits.
2. **Report Distribution Rate (RDR)**: The percentage of completed audits where the unique report URL is accessed more than twice. This serves as a proxy for internal organizational sharing (e.g., an EM sharing the report with a CFO), indicating the "viral" institutional utility of the tool.
3. **Lead-to-Consultation Conversion (LCC)**: The percentage of users identifying >$500/mo in savings who subsequently engage with the "Book a Credex Consultation" CTA. This metric validates the quality of our lead-generation funnel.

## 3. Instrumentation and Data Strategy
Our instrumentation plan utilizes a "privacy-first, data-rich" approach:
- **Event Tracking**: We utilize lightweight event tracking to monitor stage-by-stage drop-off in the audit form.
- **Analytical Logging**: Every completed audit generates a metadata entry in Supabase (excluding PII) that captures the total savings, tool density, and organization size. This data is synthesized into a weekly "AI Spend State of the Union" report for internal strategy.
- **Performance Monitoring**: Vercel Analytics is employed to ensure the application maintains its high-performance profile (Lighthouse score targets).

## 4. Pivot and Intervention Triggers
We have established the following "Pivot Triggers" to indicate when a strategic shift is required:
- **Friction Trigger**: If the Audit Completion Rate drops below 60%, we will pivot from a multi-stage form to a single-page "Quick Audit" interface to reduce cognitive load.
- **Value Trigger**: If the mean AIS per audit remains below $100 for more than 14 consecutive days, we will shift our GTM targeting toward larger, Series B+ organizations where infrastructure complexity is higher.
- **Conversion Trigger**: If the LCC remains below 2% despite high AIS, we will iterate on the report's "Call to Action" design and the narrative summary generation to better communicate the urgency of the identified savings.
