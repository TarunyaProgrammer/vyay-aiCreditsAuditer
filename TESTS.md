<img src="public/logo_light.png" alt="Vyay Logo" width="200" />

# Quality Assurance and Testing Strategy — Vyay

Vyay emphasizes system reliability and accuracy within its deterministic audit engine. This document specifies the comprehensive testing methodology and architectural framework.

## Testing Framework and Tools
- **Core Framework**: Vitest
- **Interface Testing**: React Testing Library
- **Service Virtualization**: Mock Service Worker (MSW) for Supabase and Gemini API simulations.

## Quality Assurance Objectives
- **Audit Engine**: Maintain 100% code coverage for core business logic within `src/rules/*.ts`.
- **Interface Logic**: Validate multi-stage navigation sequences and data validation protocols.
- **Critical Business Paths**:
  - Null-input audit submissions.
  - Multi-service redundancy identification.
  - Public reporting retrieval and resolution.

## Test Repository Structure
```text
tests/
├── unit/
│   ├── rules/          # Business logic validation
│   └── utils/          # Utility function validation
├── components/         # User interface component validation
└── integration/        # End-to-end workflow validation
```

## Execution Protocol
```bash
npm run test
```

## Technical Specification Example (Draft)
```typescript
it('should identify redundancy between Cursor and GitHub Copilot subscriptions', () => {
  const input = [
    { toolId: 'cursor', tier: 'pro', userCount: 1 },
    { toolId: 'github-copilot', tier: 'individual', userCount: 1 }
  ];
  const results = runAudit(input);
  expect(results.recommendations).toContainEqual(
    expect.objectContaining({ type: 'redundant', toolId: 'github-copilot' })
  );
});
```
