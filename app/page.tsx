'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { HeroSection } from '@/components/home/HeroSection';
import { GuidingPrinciples } from '@/components/home/GuidingPrinciples';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { CTASection } from '@/components/home/CTASection';
import { PricingSection } from '@/components/payment/PricingCard';

export default function Home() {
  const setShowPaymentModal = useStore((state) => state.setShowPaymentModal);
  
  const handleViewPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSelectPlan = (tierId: string) => {
    if (tierId !== 'free') {
      setShowPaymentModal(true);
    }
  };
  
  return (
    <div className="min-h-screen">
      <HeroSection onViewPricing={handleViewPricing} />
      <GuidingPrinciples />
      <FeaturesSection />
      <HowItWorks />
      
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PricingSection
          onSelectPlan={handleSelectPlan}
          currentTier="free"
        />
      </section>
      
      <CTASection />
    </div>
  );
}
