'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onViewPricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewPricing }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Make Decisions with
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Peace, Joy & Clarity
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A mindful approach to decision-making. Follow simplicity over complexity, 
          intuition over instinct. Find decisions that truly resonate with your soul.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/dashboard">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={onViewPricing}
            className="w-full sm:w-auto"
          >
            View Pricing
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
