# Decision Clarity - Component Guide

## 📁 Component Organization

This guide provides a comprehensive overview of the component structure after refactoring.

---

## 🏠 Home Page Components (`components/home/`)

### HeroSection.tsx
**Purpose**: Main landing hero with headline and CTAs  
**Props**:
- `onViewPricing: () => void` - Scroll to pricing section

**Features**:
- Gradient text headline
- Dual CTA buttons (Start Journey + View Pricing)
- Responsive layout
- Fade-in animation

---

### GuidingPrinciples.tsx
**Purpose**: Display 4 core philosophy cards  
**Props**: None (uses GUIDING_PRINCIPLES constant)

**Features**:
- Grid layout (4 cards)
- Icon + title + description
- Hover effects
- Staggered animations

---

### FeaturesSection.tsx
**Purpose**: Showcase 4 main app features  
**Props**: None

**Features**:
- 2x2 grid layout
- Icon badges with color coding
- Alternating slide animations
- Feature descriptions

---

### HowItWorks.tsx
**Purpose**: 3-step process explanation  
**Props**: None

**Features**:
- Numbered circles with gradient
- Step-by-step flow
- Clean, minimal design
- Sequential animations

---

### CTASection.tsx
**Purpose**: Final call-to-action with gradient card  
**Props**: None

**Features**:
- Gradient background card
- Primary CTA button
- Scale animation
- High contrast design

---

## 📊 Dashboard Components (`components/dashboard/`)

### DashboardHeader.tsx
**Purpose**: Page title and new decision button  
**Props**:
- `onNewDecision: () => void` - Open modal

**Features**:
- Responsive flex layout
- Large "New Decision" CTA
- Subtitle text
- Slide-in animation

---

### DashboardFilters.tsx
**Purpose**: Search and status filtering  
**Props**:
- `searchQuery: string`
- `onSearchChange: (query: string) => void`
- `statusFilter: DecisionStatus | 'all'`
- `onStatusChange: (status) => void`

**Features**:
- Search input with icon
- Status badge filters (All, Evaluating, Completed)
- Active state highlighting
- Responsive layout

---

### EmptyState.tsx
**Purpose**: No decisions placeholder  
**Props**:
- `hasFilters: boolean` - Show different message
- `onNewDecision: () => void` - Create first decision

**Features**:
- Emoji illustration
- Contextual messaging
- Optional CTA button
- Fade-in animation

---

### DecisionGrid.tsx
**Purpose**: Grid of decision cards  
**Props**:
- `decisions: Decision[]`
- `onView: (decision) => void`
- `onEdit: (decision) => void`
- `onDelete: (decision) => void`

**Features**:
- Responsive grid (1/2/3 columns)
- Card hover effects
- Staggered animations
- Action callbacks

---

## 🧘 Meditation Components (`components/meditation/`)

### MeditationStats.tsx
**Purpose**: Display session statistics  
**Props**:
- `totalSessions: number`
- `totalMinutes: number`

**Features**:
- 2-card grid
- Color-coded metrics
- Clean number display
- Slide-in animation

---

### MeditationTypeSelector.tsx
**Purpose**: Choose meditation practice  
**Props**:
- `onSelect: (type) => void`

**Features**:
- 3 practice cards (Breathing, Reflection, Visualization)
- Circle color indicators
- Duration display
- Click to select

---

### RecentSessions.tsx
**Purpose**: Show session history  
**Props**:
- `sessions: MeditationSession[]`

**Features**:
- Last 5 sessions
- Icon badges by type
- Date and duration
- Reverse chronological order

---

### MeditationTips.tsx
**Purpose**: Display meditation guidance  
**Props**: None

**Features**:
- Gradient background card
- Bullet list tips
- Light bulb icon
- Helpful reminders

---

## 📈 Analytics Components (`components/analytics/`)

### DashboardStats.tsx (existing)
**Purpose**: 4 key metric cards  
**Props**:
- `analytics: Analytics`

**Features**:
- Grid layout
- Icon + value cards
- Color-coded metrics
- Staggered animations

---

### MotivationalCard.tsx
**Purpose**: Journey feedback message  
**Props**:
- `message: string`

**Features**:
- Gradient background
- Award icon
- Encouraging message
- Prominent display

---

### SimplicityTrend.tsx
**Purpose**: Simplicity score chart  
**Props**:
- `scores: number[]` (last 10)

**Features**:
- Horizontal bar chart
- Green gradient bars
- Decision numbering
- Percentage values

---

### DecisionActivity.tsx
**Purpose**: Monthly activity chart  
**Props**:
- `data: { month: string; count: number }[]`

**Features**:
- Last 6 months
- Gradient bars
- Month labels
- Count display

---

### KeyInsights.tsx
**Purpose**: Completion and intuition metrics  
**Props**:
- `analytics: Analytics`

**Features**:
- 2-column layout
- Progress bars
- Percentage displays
- Descriptive text

---

## 🎯 Decision Components (`components/decisions/`)

### DecisionCard.tsx (existing)
**Purpose**: Display decision overview  
**Props**:
- `decision: Decision`
- `onView, onEdit, onDelete: () => void`

**Features**:
- Emotional state indicators
- Tags display
- Status badge
- Action buttons
- Hover effects

---

### EmotionalStateIndicator.tsx (existing)
**Purpose**: Show peace/joy/clarity metrics  
**Props**:
- `emotionalState: EmotionalState`
- `size?: 'sm' | 'md' | 'lg'`
- `showLabels?: boolean`

**Features**:
- 3 metric cards
- Color-coded icons
- Animated values
- Responsive sizing

---

### NewDecisionModal.tsx (refactored)
**Purpose**: Create/edit decision form  
**Props**:
- `isOpen: boolean`
- `onClose: () => void`
- `editingDecision?: Decision`

**Features**:
- Multi-section form
- Modal overlay
- Create/Update modes
- Form validation

---

## 📝 Decision Form Components (`components/decisions/DecisionForm/`)

### BasicInfo.tsx
**Purpose**: Title, description, tags input  
**Props**:
- `title, description: string`
- `selectedTags: string[]`
- `onTitleChange, onDescriptionChange, onTagToggle`

**Features**:
- Text inputs
- Tag selection badges
- Active state highlighting

---

### EmotionalMetrics.tsx
**Purpose**: Peace, joy, clarity sliders  
**Props**:
- `peace, joy, clarity: number`
- `onPeaceChange, onJoyChange, onClarityChange`

**Features**:
- 3 color-coded sliders
- Helper text per metric
- Real-time value updates

---

### DecisionQualities.tsx
**Purpose**: Complexity, intuition sliders  
**Props**:
- `complexity, intuitionScore: number`
- `onComplexityChange, onIntuitionChange`

**Features**:
- 2 purple sliders
- Explanatory text
- Value tracking

---

### OptionsManager.tsx
**Purpose**: Manage decision options  
**Props**:
- `options: DecisionOption[]`
- `onOptionsChange: (options) => void`

**Features**:
- Add/remove options
- Option title input
- Numbered options
- Dynamic list

---

## 🎨 UI Components (`components/ui/`)

### Button.tsx
**Purpose**: Reusable button component  
**Variants**: primary, secondary, accent, wisdom, outline, ghost  
**Sizes**: sm, md, lg

### Card.tsx
**Purpose**: Container with consistent styling  
**Sub-components**: CardHeader, CardBody, CardFooter  
**Features**: Hover effects, rounded corners

### Input.tsx
**Purpose**: Text input with label  
**Features**: Error states, helper text, validation

### TextArea.tsx
**Purpose**: Multi-line text input  
**Features**: Resizable, validation, helper text

### Modal.tsx
**Purpose**: Overlay dialog  
**Sizes**: sm, md, lg, xl  
**Features**: Backdrop, animations, close button

### Slider.tsx
**Purpose**: Range input for metrics  
**Colors**: blue, green, yellow, purple  
**Features**: Custom styling, value display

### Badge.tsx
**Purpose**: Small label/tag  
**Variants**: primary, secondary, success, warning, error, info  
**Sizes**: sm, md, lg

---

## 🔄 Data Flow

### State Management (Zustand)
```typescript
useStore((state) => ({
  decisions: state.decisions,
  addDecision: state.addDecision,
  updateDecision: state.updateDecision,
  deleteDecision: state.deleteDecision,
}));
```

### Component Communication
```
Page Component
  ├─→ Section Component (receives props)
  │    ├─→ UI Component (receives props)
  │    └─→ Calls parent callbacks
  └─→ Updates store via actions
```

---

## 🧪 Testing Strategy

### Unit Tests (Recommended)
```typescript
// Test individual components
describe('HeroSection', () => {
  it('renders headline', () => {});
  it('calls onViewPricing', () => {});
});
```

### Integration Tests
```typescript
// Test page composition
describe('HomePage', () => {
  it('renders all sections', () => {});
  it('navigates correctly', () => {});
});
```

---

## 📏 Component Standards

### File Structure
```typescript
'use client';  // If uses hooks/state

import React from 'react';
import { /* dependencies */ } from '...';

interface ComponentProps {
  // Props definition
}

export const Component: React.FC<ComponentProps> = ({
  props
}) => {
  // Component logic
  return (
    // JSX
  );
};
```

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection`)
- Props interfaces: `ComponentNameProps`
- Files: PascalCase matching component name
- Directories: lowercase, hyphen-separated

### Best Practices
1. Keep components under 150 lines
2. Single responsibility principle
3. Props over state when possible
4. Descriptive prop names
5. Always type with TypeScript
6. Use semantic HTML
7. Include accessibility attributes

---

## 🚀 Usage Examples

### Creating a New Page
```typescript
'use client';

import { Section1 } from '@/components/feature/Section1';
import { Section2 } from '@/components/feature/Section2';

export default function NewPage() {
  const handleAction = () => {
    // Logic
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Section1 onAction={handleAction} />
      <Section2 />
    </div>
  );
}
```

### Adding a New Feature Component
```typescript
// components/feature/NewFeature.tsx
'use client';

import React from 'react';
import { Card, CardBody } from '@/components/ui/Card';

interface NewFeatureProps {
  title: string;
  onAction: () => void;
}

export const NewFeature: React.FC<NewFeatureProps> = ({
  title,
  onAction,
}) => {
  return (
    <Card>
      <CardBody>
        <h3>{title}</h3>
        <button onClick={onAction}>Action</button>
      </CardBody>
    </Card>
  );
};
```

---

## 📚 Resources

- **TypeScript Types**: `lib/types.ts`
- **Constants**: `lib/constants.ts`
- **Utilities**: `lib/utils.ts`
- **Store**: `lib/store.ts`
- **Styles**: `app/globals.css`
- **Config**: `tailwind.config.ts`

---

## 🤝 Contributing

When adding new components:

1. Follow the file structure conventions
2. Keep components focused and small
3. Add proper TypeScript types
4. Use existing UI components
5. Include prop documentation
6. Test thoroughly
7. Update this guide

---

**Last Updated**: After refactoring commit  
**Component Count**: 29 focused components  
**Average Size**: ~75 lines per component
