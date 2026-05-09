import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuditInput, AuditResult } from '../types';

interface AuditState {
  // Current step in the multi-step form
  step: number;
  
  // User Input
  input: AuditInput;
  
  // Results from the audit engine
  result: AuditResult | null;
  
  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  
  updateInput: (input: Partial<AuditInput>) => void;
  setResult: (result: AuditResult) => void;
  resetAudit: () => void;
}

const initialInput: AuditInput = {
  teamSize: 1,
  tools: [],
};

export const useAuditStore = create<AuditState>()(
  persist(
    (set) => ({
      step: 1,
      input: initialInput,
      result: null,
      
      setStep: (step) => set({ step }),
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
      
      updateInput: (newInput) => set((state) => ({ 
        input: { ...state.input, ...newInput } 
      })),
      
      setResult: (result) => set({ result }),
      
      resetAudit: () => set({ 
        step: 1, 
        input: initialInput, 
        result: null 
      }),
    }),
    {
      name: 'vyay-audit-storage',
    }
  )
);
