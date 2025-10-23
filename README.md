# Decision Clarity

A mindful decision-making web application that helps you make choices aligned with peace, joy, simplicity, and intuition.

https://goodboycat.github.io/Decision-Clarity

## Philosophy

**"When a thought doesn't give peace and joy, it's the wrong decision."**

Decision Clarity follows these core principles:
- ✨ **Peace Over Chaos**: If a decision doesn't bring peace, reconsider it
- 🌟 **Joy as a Compass**: True decisions align with inner joy and fulfillment
- 🌱 **Simplicity Over Complexity**: The simplest path is often the wisest
- 🧭 **Intuition Over Instinct**: Trust deeper knowing, not reactive impulses

## Features

### Core Features
- 📊 **Decision Tracking**: Create and manage decisions with detailed evaluation
- 💙 **Emotional Metrics**: Track peace, joy, and clarity for each decision
- 🎯 **Simplicity Analysis**: Evaluate complexity levels to find elegant solutions
- 🔮 **Intuition Alignment**: Measure how decisions align with your inner wisdom
- 📝 **Decision Journal**: Reflect on past decisions and learn from your journey

### Premium Features
- 🧘 **Meditation Timer**: Guided breathing, reflection, and visualization sessions
- 📈 **Advanced Analytics**: Deep insights into your decision-making patterns
- 💾 **Export Capabilities**: Export decisions and journal entries (PDF/CSV)
- 🎨 **Custom Themes**: Personalized color schemes based on psychological principles

### Payment Integration
- 💳 **Stripe Integration**: Secure payment processing
- 🎁 **Free Tier**: Up to 5 decisions per month
- ⭐ **Clarity Tier ($9.99/mo)**: Unlimited decisions + full features
- 👑 **Wisdom Tier ($19.99/mo)**: Everything + AI suggestions + coaching

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom psychological color palette
- **State Management**: Zustand with persistence
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Payments**: Stripe
- **Charts**: Recharts (for analytics)

## Color Psychology

The app uses a carefully designed color palette based on psychological principles:

- **Blue (Primary)**: Trust, peace, clarity, calmness
- **Green (Secondary)**: Growth, harmony, balance, nature
- **Yellow (Accent)**: Joy, optimism, energy, clarity
- **Purple (Wisdom)**: Intuition, spirituality, insight, creativity
- **Gray (Neutral)**: Balance, sophistication, grounding

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Stripe account (for payment features)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd webapp
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Stripe keys:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_CLARITY_PRICE_ID=price_...
NEXT_PUBLIC_STRIPE_WISDOM_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Setting up Stripe

1. Create products in Stripe Dashboard:
   - Clarity Tier: $9.99/month recurring
   - Wisdom Tier: $19.99/month recurring

2. Copy the Price IDs to your `.env.local`

3. Set up webhook endpoint:
   - URL: `https://yourdomain.com/api/webhook`
   - Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`

4. Copy webhook secret to `.env.local`

## Project Structure

```
webapp/
├── app/
│   ├── api/              # API routes
│   │   ├── checkout/     # Stripe checkout
│   │   ├── portal/       # Customer portal
│   │   └── webhook/      # Stripe webhooks
│   ├── dashboard/        # Main dashboard page
│   ├── meditation/       # Meditation page
│   ├── analytics/        # Analytics page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # Base UI components
│   ├── decisions/        # Decision-related components
│   ├── meditation/       # Meditation components
│   ├── analytics/        # Analytics components
│   ├── payment/          # Payment components
│   └── Header.tsx        # Main header
├── lib/
│   ├── types.ts          # TypeScript types
│   ├── constants.ts      # App constants
│   ├── store.ts          # Zustand store
│   ├── utils.ts          # Utility functions
│   └── stripe.ts         # Stripe configuration
└── public/               # Static assets
```

## Key Components

### UI Components
- `Button`: Multi-variant button with psychological colors
- `Card`: Flexible card component with hover effects
- `Input/TextArea`: Form inputs with validation
- `Modal`: Animated modal with backdrop
- `Slider`: Custom slider for metrics (0-100)
- `Badge`: Status and category badges

### Decision Components
- `DecisionCard`: Display decision overview
- `NewDecisionModal`: Create/edit decisions
- `EmotionalStateIndicator`: Visual emotion metrics

### Meditation
- `MeditationTimer`: Breathing exercises with animations

### Analytics
- `DashboardStats`: Key metrics overview
- Charts and trend visualizations

## Usage Guide

### Creating a Decision

1. Click "New Decision" button
2. Enter title and description
3. Select relevant tags
4. Rate emotional state (Peace, Joy, Clarity)
5. Evaluate complexity and intuition alignment
6. (Optional) Add decision options
7. Save and track over time

### Meditation Practice

1. Go to Meditation page
2. Choose practice type:
   - Breathing Exercise (5 min)
   - Reflective Meditation (10 min)
   - Visualization (8 min)
3. Follow guided timer
4. Complete session for tracking

### Analytics

View insights including:
- Total decisions and completion rate
- Average peace, joy, clarity scores
- Simplicity trends over time
- Monthly decision activity
- Intuition accuracy

## Development

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Testing Stripe Integration
Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Requires authentication: `4000 0025 0000 3155`
- Declined: `4000 0000 0000 9995`

## Deployment

The app can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

Remember to:
1. Set environment variables in production
2. Configure Stripe webhook URL
3. Update `NEXT_PUBLIC_APP_URL` to production domain

## Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

See LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.

---

**Made with 💙 for mindful decision-making**
