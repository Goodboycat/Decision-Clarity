import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Decision, JournalEntry, User, MeditationSession } from './types';

interface DecisionStore {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Decisions
  decisions: Decision[];
  addDecision: (decision: Decision) => void;
  updateDecision: (id: string, updates: Partial<Decision>) => void;
  deleteDecision: (id: string) => void;
  getDecision: (id: string) => Decision | undefined;
  
  // Journal entries
  journalEntries: JournalEntry[];
  addJournalEntry: (entry: JournalEntry) => void;
  getEntriesForDecision: (decisionId: string) => JournalEntry[];
  
  // Meditation sessions
  meditationSessions: MeditationSession[];
  addMeditationSession: (session: MeditationSession) => void;
  
  // UI state
  currentDecisionId: string | null;
  setCurrentDecisionId: (id: string | null) => void;
  showPaymentModal: boolean;
  setShowPaymentModal: (show: boolean) => void;
}

export const useStore = create<DecisionStore>()(
  persist(
    (set, get) => ({
      // User state
      user: null,
      setUser: (user) => set({ user }),
      
      // Decisions
      decisions: [],
      addDecision: (decision) =>
        set((state) => ({
          decisions: [...state.decisions, decision],
        })),
      updateDecision: (id, updates) =>
        set((state) => ({
          decisions: state.decisions.map((d) =>
            d.id === id ? { ...d, ...updates, updatedAt: new Date() } : d
          ),
        })),
      deleteDecision: (id) =>
        set((state) => ({
          decisions: state.decisions.filter((d) => d.id !== id),
        })),
      getDecision: (id) => get().decisions.find((d) => d.id === id),
      
      // Journal entries
      journalEntries: [],
      addJournalEntry: (entry) =>
        set((state) => ({
          journalEntries: [...state.journalEntries, entry],
        })),
      getEntriesForDecision: (decisionId) =>
        get().journalEntries.filter((e) => e.decisionId === decisionId),
      
      // Meditation sessions
      meditationSessions: [],
      addMeditationSession: (session) =>
        set((state) => ({
          meditationSessions: [...state.meditationSessions, session],
        })),
      
      // UI state
      currentDecisionId: null,
      setCurrentDecisionId: (id) => set({ currentDecisionId: id }),
      showPaymentModal: false,
      setShowPaymentModal: (show) => set({ showPaymentModal: show }),
    }),
    {
      name: 'decision-clarity-storage',
    }
  )
);
