import { AuditInput } from '../types';

export interface BenchmarkResult {
  percentile: number;
  averageSpend: number;
  insight: string;
}

export const calculateBenchmarks = (input: AuditInput): BenchmarkResult => {
  const totalSpend = input.tools.reduce((sum, t) => sum + t.monthlySpend, 0);
  const spendPerSeat = input.teamSize > 0 ? totalSpend / input.teamSize : 0;

  // Real-world engineering benchmarks (approximate ranges for 2026)
  // Startup Early Stage: $20-$50 per seat
  // Mid-Market: $40-$80 per seat
  // Enterprise: $100+ per seat

  let benchmarkSpend = 50; // Default benchmark
  if (input.teamSize <= 10) benchmarkSpend = 35;
  else if (input.teamSize <= 50) benchmarkSpend = 60;
  else benchmarkSpend = 100;

  const percentageDiff = benchmarkSpend > 0 ? ((spendPerSeat - benchmarkSpend) / benchmarkSpend) * 100 : 0;
  
  let insight = '';
  if (percentageDiff > 20) {
    insight = `Your AI spend per developer is ${Math.abs(Math.round(percentageDiff))}% above similar ${getRange(input.teamSize)} person engineering teams.`;
  } else if (percentageDiff < -20) {
    insight = `Your stack is highly efficient, spending ${Math.abs(Math.round(percentageDiff))}% less than the industry average for your team size.`;
  } else {
    insight = `Your AI infrastructure spend is exactly in line with benchmarks for ${getRange(input.teamSize)} person teams.`;
  }

  return {
    percentile: Math.max(5, Math.min(95, 50 - percentageDiff / 2)), // Higher spend = lower percentile efficiency
    averageSpend: benchmarkSpend,
    insight
  };
};

const getRange = (size: number): string => {
  if (size <= 5) return '1-5';
  if (size <= 15) return '5-15';
  if (size <= 50) return '15-50';
  return '50+';
};
