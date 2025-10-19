// Core types for Decision Clarity app

export type DecisionStatus = 'evaluating' | 'completed' | 'archived';

export type EmotionalState = {
  peace: number; // 0-100
  joy: number; // 0-100
  clarity: number; // 0-100
};

export type Decision = {
  id: string;
  title: string;
  description: string;
  options: DecisionOption[];
  emotionalState: EmotionalState;
  complexity: number; // 0-100, lower is better (simplicity)
  intuitionScore: number; // 0-100, how much it aligns with intuition
  status: DecisionStatus;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  reflection?: string;
  tags: string[];
};

export type DecisionOption = {
  id: string;
  title: string;
  description: string;
  prosSimple: string[]; // Simple pros
  consSimple: string[]; // Simple cons
  emotionalResponse: EmotionalState;
  intuitionAlignment: number; // 0-100
  simplicityScore: number; // 0-100
  selected?: boolean;
};

export type JournalEntry = {
  id: string;
  decisionId: string;
  content: string;
  mood: EmotionalState;
  insights: string[];
  createdAt: Date;
};

export type User = {
  id: string;
  email: string;
  name: string;
  subscriptionTier: 'free' | 'clarity' | 'wisdom';
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  createdAt: Date;
};

export type SubscriptionTier = {
  id: 'free' | 'clarity' | 'wisdom';
  name: string;
  price: number;
  features: string[];
  maxDecisions: number;
  maxJournalEntries: number;
};

export type MeditationSession = {
  id: string;
  decisionId?: string;
  duration: number; // in seconds
  type: 'breathing' | 'reflection' | 'visualization';
  completedAt: Date;
  insights?: string;
};

export type Analytics = {
  totalDecisions: number;
  completedDecisions: number;
  averagePeace: number;
  averageJoy: number;
  averageClarity: number;
  intuitionAccuracy: number;
  simplicityTrend: number[];
  decisionsByMonth: { month: string; count: number }[];
};
