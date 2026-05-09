# Engineering Reflection — Project Vyay

### The Credibility vs. "Wow Factor" Trap
Early in Day 3, I faced a strategic choice: use an LLM to generate "creative" savings recommendations or build a rigid deterministic engine. While the AI approach would have provided more "wow factor," I realized it would fail the **Founder Trust Test**. Technical founders and CFOs detect "AI hallucinations" in financial data instantly. 

**Decision**: I pivoted to a 100% deterministic, rule-based engine. This ensures that every recommendation is traceable to official market rates and verifiable logic.

### Conservative Reasoning as a Feature
I initially built rules that aggressively suggested downgrading every paid tool to a free tier. During testing, I realized this made the product feel like a "student assignment" rather than a professional tool. 

**Learning**: Professionalism in financial auditing comes from nuance. Recommending a 5-person team "Review their Enterprise mismatch" is far more credible than telling them to "Stop using ChatGPT Plus." Conservative savings claims actually increase the likelihood of the user taking action.

### The Power of "Already Optimized"
One of the most important discoveries on Day 3 was the implementation of the `optimized-stack` rule. In many lead-gen tools, the system *always* tries to find a problem. By building logic that honestly tells a user, "You are already operating efficiently," we establish massive credibility. This turns Vyay from a "nagging tool" into a "validated benchmark."

### Confidence Scoring
Introducing `high`, `medium`, and `low` confidence levels allowed me to include "softer" recommendations (like negotiating bulk rates) without diluting the impact of "hard" recommendations (like removing Cursor/Copilot overlap). This multi-tier approach reflects real-world operational complexity.

### Technical Debt & Future Scaling
By modularizing the rules into separate files (`oversized`, `overlap`, etc.), I've created an architecture that can scale as new AI tools enter the market. The engine is now decoupled from the UI, making it easily testable and maintainable.
