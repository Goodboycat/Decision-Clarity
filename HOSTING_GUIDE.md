# Decision Clarity - Hosting Guide

## ⚠️ Important: GitHub Pages Limitations

**GitHub Pages cannot host this application** because:
1. It only serves static files (no Node.js server)
2. The app requires API routes for Stripe payments
3. Dynamic features need server-side rendering

## ✅ Recommended Hosting Solutions

### 1. **Vercel (Recommended - FREE)**

**Best for Next.js apps** - Made by the Next.js creators

#### Deployment Steps:
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy from the project directory
cd /home/user/webapp
vercel

# 4. Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? decision-clarity
# - Directory? ./
# - Override settings? No

# 5. For production deployment
vercel --prod
```

#### Environment Variables:
Add these in Vercel Dashboard (Settings → Environment Variables):
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
NEXT_PUBLIC_STRIPE_CLARITY_PRICE_ID=price_xxx
NEXT_PUBLIC_STRIPE_WISDOM_PRICE_ID=price_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

**Pros:**
- ✅ Free tier (generous limits)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Built-in analytics
- ✅ Perfect Next.js support

**Live in 2 minutes!**

---

### 2. **Netlify (FREE)**

Another excellent option for Next.js

#### Deployment Steps:
```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
cd /home/user/webapp
netlify init

# 4. Build command: npm run build
# 5. Publish directory: .next

# 6. Deploy
netlify deploy --prod
```

**Pros:**
- ✅ Free tier
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ✅ Built-in forms
- ✅ Easy environment variables

---

### 3. **Railway (FREE tier available)**

Great for full-stack apps with databases

#### Deployment Steps:
```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login
railway login

# 3. Initialize and deploy
cd /home/user/webapp
railway init
railway up
```

**Pros:**
- ✅ Free $5/month credit
- ✅ Database hosting
- ✅ Environment variables
- ✅ Auto-scaling

---

### 4. **Render (FREE)**

Good alternative with databases

#### Deployment:
1. Go to https://render.com
2. Connect GitHub repository
3. Select "Web Service"
4. Build command: `npm run build`
5. Start command: `npm start`

**Pros:**
- ✅ Free tier
- ✅ Auto-deploy from Git
- ✅ Database hosting
- ✅ Background workers

---

## 🚀 Quick Deploy: Vercel (Recommended)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Goodboycat/Decision-Clarity)

### Manual Deploy

```bash
# From project directory
npm install -g vercel
vercel login
vercel

# Add environment variables in Vercel dashboard
# Deploy to production
vercel --prod
```

---

## 🔧 Configuration for Each Platform

### Vercel Configuration (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Netlify Configuration (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 📝 Post-Deployment Checklist

After deploying to any platform:

1. **Update Stripe Webhook URL**
   - Go to Stripe Dashboard → Webhooks
   - Add endpoint: `https://your-app.com/api/webhook`
   - Select events: `checkout.session.completed`, `customer.subscription.*`
   - Copy webhook secret to environment variables

2. **Update Environment Variables**
   - Set all required environment variables in platform dashboard
   - Update `NEXT_PUBLIC_APP_URL` to your deployed URL

3. **Test Payment Flow**
   - Create a test decision
   - Try upgrading to paid tier
   - Verify webhook receives events

4. **Update DNS (Optional)**
   - Add custom domain in platform settings
   - Update DNS records as instructed
   - Enable HTTPS (usually automatic)

---

## 🌐 Why Not GitHub Pages?

GitHub Pages is designed for **static websites** only:
- ❌ No server-side code execution
- ❌ No API routes
- ❌ No environment variables
- ❌ No dynamic rendering
- ❌ No webhooks handling

**This app needs:**
- ✅ Server-side API routes (Stripe integration)
- ✅ Dynamic data processing
- ✅ Environment variables
- ✅ Webhook endpoints
- ✅ Server-side rendering

---

## 💡 Alternative: Static Version for GitHub Pages

If you want a **demo version** without payment features on GitHub Pages:

### 1. Create Static Branch
```bash
git checkout -b static-demo
```

### 2. Remove API Routes
```bash
rm -rf app/api
```

### 3. Disable Payment Features
Comment out payment-related code in:
- `components/payment/PricingCard.tsx`
- `components/Header.tsx`
- `app/page.tsx`

### 4. Build Static Export
```bash
npm run build
```

### 5. Deploy to GitHub Pages
```bash
# The 'out' directory contains static files
# Enable GitHub Pages in repo settings → Pages
# Select branch: gh-pages or main
# Directory: /out or /docs
```

**Note:** This will be a **limited demo** without:
- Payment processing
- Webhook handling
- Server-side features

---

## 🎯 Recommended: Deploy to Vercel NOW

**Fastest way to get your app live:**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy (from project root)
cd /home/user/webapp
vercel

# 3. Add environment variables in dashboard
# 4. Deploy to production
vercel --prod
```

**Your app will be live at:** `https://decision-clarity-xxx.vercel.app`

---

## 📞 Need Help?

### Vercel Support
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

### Netlify Support
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com

### Railway Support
- Docs: https://docs.railway.app
- Discord: https://discord.gg/railway

---

## 🔐 Security Reminders

1. **Never commit** `.env.local` file
2. **Always use** environment variables for secrets
3. **Rotate keys** if accidentally exposed
4. **Use test keys** for development
5. **Monitor** Stripe dashboard for unusual activity

---

## ✅ Success Checklist

After deployment:
- [ ] App loads correctly at deployed URL
- [ ] All pages render properly
- [ ] Decision creation works
- [ ] Meditation timer functions
- [ ] Analytics display correctly
- [ ] Payment modal opens
- [ ] Stripe test payment works
- [ ] Webhook receives events
- [ ] Mobile view looks good
- [ ] HTTPS is enabled

---

**Bottom Line:** Use Vercel for the easiest, fastest, and most reliable deployment of this Next.js application with full functionality including payments and API routes.
