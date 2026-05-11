import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ResultPage from '../src/pages/ResultPage';

// Mock the audit store
vi.mock('../src/store/auditStore', () => ({
  useAuditStore: vi.fn(() => ({
    result: null,
    resetAudit: vi.fn(),
    input: { teamSize: 5, useCase: 'growth', tools: [] }
  }))
}));

// Mock the audit service
vi.mock('../src/services/auditService', () => ({
  auditService: {
    getAuditByPublicId: vi.fn(() => Promise.resolve(null))
  }
}));

describe('ResultPage Routing & Error Handling', () => {
  it('should display error message when audit is not found', async () => {
    render(
      <MemoryRouter initialEntries={['/result/invalid-id']}>
        <Routes>
          <Route path="/result/:id" element={<ResultPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Should show loading initially
    expect(screen.getByRole('status')).toBeDefined();

    // After async mock resolves (null), it should show error
    const errorHeading = await screen.findByText(/Audit Not Found/i);
    expect(errorHeading).toBeDefined();
    
    const retryButton = screen.getByText(/Initiate New Audit/i);
    expect(retryButton).toBeDefined();
  });

  it('should show loading state initially', () => {
    render(
      <MemoryRouter initialEntries={['/result/some-id']}>
        <Routes>
          <Route path="/result/:id" element={<ResultPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('status')).toBeDefined();
    expect(screen.getByText(/Decrypting strategic audit data/i)).toBeDefined();
  });
});
