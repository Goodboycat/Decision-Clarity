# Decision Clarity - Deployment Guide

## 🎉 Application Successfully Created and Deployed!

### Live Application
**URL**: https://3000-imvzhsjqvn4avi9xko6zf-de59bda9.sandbox.novita.ai

### GitHub Repository
**Repository**: https://github.com/Goodboycat/Decision-Clarity
**Latest Commit**: Successfully pushed to main branch

---

## 📋 What's Been Built

### Core Application
A comprehensive mindful decision-making web application based on the principle: **"When a thought doesn't give peace and joy, it's the wrong decision."**

### Key Features Implemented

#### 1. **Decision Management** ✅
- Create and track decisions with detailed information
- Evaluate decisions based on emotional metrics:
  - Peace (0-100)
  - Joy (0-100)
  - Clarity (0-100)
- Complexity scoring (lower is better - simplicity over complexity)
- Intuition alignment scoring
- Decision status tracking (Evaluating, Completed, Archived)
- Tagging system for categorization

#### 2. **Meditation & Mindfulness** 🧘
- Guided breathing exercises (5 minutes)
- Reflective meditation (10 minutes)
- Visualization practices (8 minutes)
- Animated breathing guide with circle visualization
- Session tracking and history

#### 3. **Analytics Dashboard** 📊
- Total decisions and completion rate
- Average peace, joy, and clarity scores
- Simplicity trend analysis
- Monthly decision activity charts
- Intuition accuracy tracking
- Motivational feedback based on progress

#### 4. **Payment Integration** 💳
- **Free Tier**: Up to 5 decisions per month
- **Clarity Tier ($9.99/mo)**: Unlimited decisions + full features
- **Wisdom Tier ($19.99/mo)**: Everything + AI suggestions + coaching
- Stripe integration for secure payments
- Customer portal for subscription management

#### 5. **Beautiful UI/UX** 🎨
- Psychological color design:
  - Blue: Peace, trust, clarity
  - Green: Growth, harmony, balance
  - Yellow: Joy, optimism, energy
  - Purple: Intuition, wisdom, spirituality
- Smooth animations with Framer Motion
- Responsive mobile-first design
- Intuitive navigation and user flow

---

## 🛠 Technical Architecture

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color system
- **State Management**: Zustand with local persistence
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **API Routes**: Next.js API routes
- **Payment Processing**: Stripe
- **Data Storage**: Browser localStorage (via Zustand persist)

### Components Structure
```
components/
├── ui/                    # Base components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Slider.tsx
│   └── Badge.tsx
├── decisions/             # Decision features
│   ├── DecisionCard.tsx
│   ├── EmotionalStateIndicator.tsx
│   └── NewDecisionModal.tsx
├── meditation/            # Meditation features
│   └── MeditationTimer.tsx
├── analytics/             # Analytics features
│   └── DashboardStats.tsx
├── payment/               # Payment features
│   └── PricingCard.tsx
└── Header.tsx             # Main navigation
```

---

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Goodboycat/Decision-Clarity.git
cd Decision-Clarity
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
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

4. **Run the development server**
```bash
npm run dev
```

5. **Open** [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

---

## 💳 Stripe Setup

### 1. Create Products
In your Stripe Dashboard, create two products:
- **Clarity Tier**: $9.99/month recurring subscription
- **Wisdom Tier**: $19.99/month recurring subscription

### 2. Configure Webhooks
Set up a webhook endpoint:
- **URL**: `https://yourdomain.com/api/webhook`
- **Events to listen to**:
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`

### 3. Test Mode
Use Stripe test cards for development:
- Success: `4242 4242 4242 4242`
- Requires authentication: `4000 0025 0000 3155`
- Declined: `4000 0000 0000 9995`

---

## 📱 Pages & Routes

### Public Pages
- `/` - Landing page with features and pricing
- `/dashboard` - Main dashboard (requires user)
- `/meditation` - Meditation practices
- `/analytics` - Analytics and insights

### API Routes
- `/api/checkout` - Create Stripe checkout session
- `/api/portal` - Access customer portal
- `/api/webhook` - Handle Stripe webhooks

---

## 🎨 Design Philosophy

### Color Psychology
Every color in the app is intentionally chosen:
- **Blue (#0073E6)**: Primary color representing peace and clarity
- **Green (#4CAF50)**: Secondary color for growth and harmony
- **Yellow (#FFEB3B)**: Accent color symbolizing joy and optimism
- **Purple (#9C27B0)**: Wisdom color for intuition and insight

### User Experience Principles
1. **Simplicity First**: Clean, uncluttered interfaces
2. **Emotional Awareness**: Visual feedback for emotional states
3. **Mindful Interactions**: Smooth animations and transitions
4. **Progressive Disclosure**: Information revealed as needed

---

## 📊 Future Enhancements

### Potential Features
- [ ] User authentication (Auth0/Supabase)
- [ ] Cloud data sync across devices
- [ ] AI-powered decision suggestions (GPT-4 integration)
- [ ] Collaborative decision-making with teams
- [ ] Export decisions to PDF/CSV
- [ ] Email notifications and reminders
- [ ] Mobile app (React Native)
- [ ] Voice journaling integration
- [ ] Social sharing features
- [ ] Decision templates library

### Advanced Analytics
- [ ] Machine learning patterns recognition
- [ ] Predictive decision modeling
- [ ] Comparison with similar users (anonymized)
- [ ] Custom reports and insights

---

## 🐛 Known Issues / Notes

1. **Authentication**: Currently uses local storage. Implement proper auth for production.
2. **Database**: Uses browser storage. Consider PostgreSQL/MongoDB for production.
3. **Stripe Keys**: Using placeholder keys. Replace with real keys before deployment.
4. **Mobile**: Tested on desktop, needs thorough mobile testing.

---

## 📄 License

See LICENSE file in repository.

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check the README.md for detailed documentation

---

**Built with 💙 for mindful living and conscious decision-making**

*"The quality of our lives is determined by the quality of our decisions."*
