'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Sparkles } from 'lucide-react';
import { SUBSCRIPTION_TIERS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { SubscriptionTier } from '@/lib/types';

interface PricingCardProps {
  tier: SubscriptionTier;
  currentTier?: string;
  onSelect: (tierId: string) => void;
  popular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  currentTier,
  onSelect,
  popular = false,
}) => {
  const isCurrentTier = currentTier === tier.id;
  
  return (
    <Card
      className={cn(
        'relative',
        popular && 'border-2 border-purple-500 shadow-xl',
        isCurrentTier && 'opacity-75'
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Sparkles size={14} /> Most Popular
          </div>
        </div>
      )}
      
      <CardHeader>
        <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">
            ${tier.price}
          </span>
          {tier.price > 0 && (
            <span className="ml-2 text-gray-500">/month</span>
          )}
        </div>
      </CardHeader>
      
      <CardBody>
        <ul className="space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardBody>
      
      <CardFooter>
        <Button
          variant={popular ? 'wisdom' : 'outline'}
          onClick={() => onSelect(tier.id)}
          disabled={isCurrentTier}
          className="w-full"
        >
          {isCurrentTier ? 'Current Plan' : 'Get Started'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export const PricingSection: React.FC<{
  onSelectPlan: (tierId: string) => void;
  currentTier?: string;
}> = ({ onSelectPlan, currentTier }) => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Path to Clarity
        </h2>
        <p className="text-xl text-gray-600">
          Start free, upgrade when you're ready
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          tier={SUBSCRIPTION_TIERS.free}
          currentTier={currentTier}
          onSelect={onSelectPlan}
        />
        <PricingCard
          tier={SUBSCRIPTION_TIERS.clarity}
          currentTier={currentTier}
          onSelect={onSelectPlan}
          popular
        />
        <PricingCard
          tier={SUBSCRIPTION_TIERS.wisdom}
          currentTier={currentTier}
          onSelect={onSelectPlan}
        />
      </div>
    </div>
  );
};
