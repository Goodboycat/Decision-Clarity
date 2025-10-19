import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Decision, EmotionalState, Analytics } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Calculate overall decision score (peace + joy + clarity)
export function calculateDecisionScore(emotionalState: EmotionalState): number {
  return (emotionalState.peace + emotionalState.joy + emotionalState.clarity) / 3;
}

// Determine if a decision is aligned (high peace, joy, simplicity, intuition)
export function isDecisionAligned(decision: Decision): boolean {
  const emotionalScore = calculateDecisionScore(decision.emotionalState);
  const simplicityScore = 100 - decision.complexity; // Invert complexity
  const intuitionScore = decision.intuitionScore;
  
  const overallScore = (emotionalScore + simplicityScore + intuitionScore) / 3;
  return overallScore >= 70; // 70% threshold for alignment
}

// Get color based on score
export function getScoreColor(score: number): string {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-yellow-600';
  if (score >= 40) return 'text-orange-600';
  return 'text-red-600';
}

// Get background color based on score
export function getScoreBgColor(score: number): string {
  if (score >= 80) return 'bg-green-100';
  if (score >= 60) return 'bg-yellow-100';
  if (score >= 40) return 'bg-orange-100';
  return 'bg-red-100';
}

// Format date
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

// Format relative time
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return formatDate(date);
}

// Calculate analytics from decisions
export function calculateAnalytics(decisions: Decision[]): Analytics {
  const completed = decisions.filter((d) => d.status === 'completed');
  
  const avgPeace = completed.length
    ? completed.reduce((sum, d) => sum + d.emotionalState.peace, 0) / completed.length
    : 0;
  
  const avgJoy = completed.length
    ? completed.reduce((sum, d) => sum + d.emotionalState.joy, 0) / completed.length
    : 0;
  
  const avgClarity = completed.length
    ? completed.reduce((sum, d) => sum + d.emotionalState.clarity, 0) / completed.length
    : 0;
  
  const avgIntuition = completed.length
    ? completed.reduce((sum, d) => sum + d.intuitionScore, 0) / completed.length
    : 0;
  
  // Simplicity trend (last 10 decisions)
  const recentDecisions = [...decisions]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 10);
  
  const simplicityTrend = recentDecisions.map((d) => 100 - d.complexity);
  
  // Decisions by month
  const decisionsByMonth = decisions.reduce((acc, decision) => {
    const monthKey = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
    }).format(new Date(decision.createdAt));
    
    const existing = acc.find((item) => item.month === monthKey);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ month: monthKey, count: 1 });
    }
    return acc;
  }, [] as { month: string; count: number }[]);
  
  return {
    totalDecisions: decisions.length,
    completedDecisions: completed.length,
    averagePeace: Math.round(avgPeace),
    averageJoy: Math.round(avgJoy),
    averageClarity: Math.round(avgClarity),
    intuitionAccuracy: Math.round(avgIntuition),
    simplicityTrend,
    decisionsByMonth: decisionsByMonth.slice(-6), // Last 6 months
  };
}

// Generate a unique ID
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Check if user can create more decisions
export function canCreateDecision(
  currentCount: number,
  subscriptionTier: 'free' | 'clarity' | 'wisdom'
): boolean {
  if (subscriptionTier === 'free') {
    return currentCount < 5;
  }
  return true; // Unlimited for paid tiers
}

// Get motivational message based on score
export function getMotivationalMessage(score: number): string {
  if (score >= 90) return '✨ Excellent! This decision resonates with your inner wisdom.';
  if (score >= 75) return '🌟 Great alignment! You\'re on the right path.';
  if (score >= 60) return '🌱 Good start. Take time to reflect further.';
  if (score >= 40) return '🤔 Consider exploring this decision more deeply.';
  return '🧘 Take a moment to meditate and reconnect with your intuition.';
}

// Breathing exercise patterns
export function getBreathingPattern(duration: number): {
  inhale: number;
  hold: number;
  exhale: number;
  rest: number;
} {
  // Box breathing: 4-4-4-4
  if (duration <= 300) {
    return { inhale: 4, hold: 4, exhale: 4, rest: 4 };
  }
  // Extended breathing: 4-7-8
  return { inhale: 4, hold: 7, exhale: 8, rest: 2 };
}
