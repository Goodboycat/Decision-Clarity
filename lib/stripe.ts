import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
    );
  }
  return stripePromise;
};

export const STRIPE_PRICE_IDS = {
  clarity: process.env.NEXT_PUBLIC_STRIPE_CLARITY_PRICE_ID || 'price_clarity',
  wisdom: process.env.NEXT_PUBLIC_STRIPE_WISDOM_PRICE_ID || 'price_wisdom',
};

export type CheckoutSessionData = {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  customerEmail?: string;
};

export async function createCheckoutSession(data: CheckoutSessionData) {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create checkout session');
  }
  
  return response.json();
}

export async function createPortalSession(customerId: string) {
  const response = await fetch('/api/portal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customerId }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create portal session');
  }
  
  return response.json();
}
