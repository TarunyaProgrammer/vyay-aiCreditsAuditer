# Testing Strategy — Vyay

Vyay prioritizes reliability in its deterministic audit engine. This document outlines our testing philosophy and structure.

## 🧪 Testing Stack
- **Framework**: Vitest
- **DOM Testing**: React Testing Library
- **Mocks**: MSW (Mock Service Worker) for Supabase/Gemini API calls

## 🎯 Coverage Goals
- **Audit Engine**: 100% coverage on core rules (`src/rules/*.ts`).
- **Form Logic**: Coverage for multi-step navigation and validation.
- **Critical Paths**:
  - Empty audit submission.
  - Multi-tool overlap detection.
  - Public result retrieval.

## 📂 Test Structure
```text
tests/
├── unit/
│   ├── rules/          # Audit logic tests
│   └── utils/          # Helper function tests
├── components/         # UI component tests
└── integration/        # End-to-end flows
```

## 🛠 Running Tests
```bash
npm run test
```

## 📝 Test Case Example (Draft)
```typescript
it('should identify overlap between Cursor and GitHub Copilot', () => {
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
