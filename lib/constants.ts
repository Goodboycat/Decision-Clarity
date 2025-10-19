// Psychological colors and theme constants for Decision Clarity

export const COLORS = {
  // Primary - Calming Blue (trust, peace, clarity)
  primary: {
    50: '#E6F2FF',
    100: '#B3DAFF',
    200: '#80C2FF',
    300: '#4DAAFF',
    400: '#1A92FF',
    500: '#0073E6', // Main blue
    600: '#005BB3',
    700: '#004380',
    800: '#002B4D',
    900: '#001A2E',
  },
  
  // Secondary - Peaceful Green (growth, harmony, balance)
  secondary: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50', // Main green
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
  },
  
  // Accent - Joyful Yellow (optimism, clarity, energy)
  accent: {
    50: '#FFFDE7',
    100: '#FFF9C4',
    200: '#FFF59D',
    300: '#FFF176',
    400: '#FFEE58',
    500: '#FFEB3B', // Main yellow
    600: '#FDD835',
    700: '#FBC02D',
    800: '#F9A825',
    900: '#F57F17',
  },
  
  // Wisdom - Deep Purple (intuition, spirituality, insight)
  wisdom: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0', // Main purple
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },
  
  // Neutral - Soft Grays (balance, sophistication)
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  
  // Semantic colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
};

export const SUBSCRIPTION_TIERS = {
  free: {
    id: 'free' as const,
    name: 'Free',
    price: 0,
    features: [
      'Up to 5 decisions per month',
      'Basic peace & joy metrics',
      'Simple decision tracking',
      'Community support',
    ],
    maxDecisions: 5,
    maxJournalEntries: 10,
  },
  clarity: {
    id: 'clarity' as const,
    name: 'Clarity',
    price: 9.99,
    features: [
      'Unlimited decisions',
      'Full emotional analytics',
      'Decision journal with export',
      'Meditation timer',
      'Intuition tracking',
      'Priority support',
    ],
    maxDecisions: -1, // unlimited
    maxJournalEntries: -1,
  },
  wisdom: {
    id: 'wisdom' as const,
    name: 'Wisdom',
    price: 19.99,
    features: [
      'Everything in Clarity',
      'Advanced analytics & insights',
      'AI-powered decision suggestions',
      'Collaborative decisions',
      'Custom meditation sessions',
      'Export to PDF/CSV',
      '1-on-1 coaching session (monthly)',
      'VIP support',
    ],
    maxDecisions: -1,
    maxJournalEntries: -1,
  },
};

export const MEDITATION_TYPES = [
  {
    type: 'breathing' as const,
    name: 'Breathing Exercise',
    description: 'Calm your mind with guided breathing',
    duration: 300, // 5 minutes
    color: COLORS.primary[500],
  },
  {
    type: 'reflection' as const,
    name: 'Reflective Meditation',
    description: 'Reflect deeply on your decision',
    duration: 600, // 10 minutes
    color: COLORS.wisdom[500],
  },
  {
    type: 'visualization' as const,
    name: 'Visualization',
    description: 'Visualize the outcomes of your choices',
    duration: 480, // 8 minutes
    color: COLORS.secondary[500],
  },
];

export const GUIDING_PRINCIPLES = [
  {
    title: 'Peace Over Chaos',
    description: 'If a thought doesn\'t give peace, it may be the wrong decision',
    icon: '🕊️',
  },
  {
    title: 'Joy as a Compass',
    description: 'True decisions align with inner joy and fulfillment',
    icon: '✨',
  },
  {
    title: 'Simplicity Over Complexity',
    description: 'The simplest path is often the wisest path',
    icon: '🌱',
  },
  {
    title: 'Intuition Over Instinct',
    description: 'Trust your deeper knowing, not reactive impulses',
    icon: '🧭',
  },
];

export const DECISION_TAGS = [
  'Career',
  'Relationships',
  'Health',
  'Finance',
  'Personal Growth',
  'Family',
  'Education',
  'Lifestyle',
  'Creativity',
  'Spirituality',
];
