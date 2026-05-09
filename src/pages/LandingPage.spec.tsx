import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import { describe, it, expect } from 'vitest';

describe('LandingPage', () => {
  it('renders the hero section with the main value proposition', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/Optimize AI Expenditure/i)).toBeInTheDocument();
    expect(screen.getByText(/Initiate Free Audit/i)).toBeInTheDocument();
  });

  it('renders the problem section', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/The AI Spending Paradox/i)).toBeInTheDocument();
  });
});
