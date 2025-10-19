'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { Heart, Smile, Compass, Leaf, ArrowRight, Check } from 'lucide-react';
import { GUIDING_PRINCIPLES } from '@/lib/constants';
import { PricingSection } from '@/components/payment/PricingCard';
import { useStore } from '@/lib/store';

export default function Home() {
  const setShowPaymentModal = useStore((state) => state.setShowPaymentModal);
  
  const features = [
    {
      icon: Heart,
      title: 'Peace & Joy Metrics',
      description: 'Track how each decision makes you feel with intuitive emotional indicators',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Compass,
      title: 'Intuition Tracking',
      description: 'Align decisions with your deeper wisdom, not just reactive instincts',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: Leaf,
      title: 'Simplicity Analysis',
      description: 'Evaluate complexity levels to find the simplest, most elegant path',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: Smile,
      title: 'Decision Journal',
      description: 'Reflect on past decisions and learn from your journey',
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
              onClick={() => setShowPaymentModal(true)}
              className="w-full sm:w-auto"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </section>
      
      {/* Guiding Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Guiding Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUIDING_PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card hover>
                  <CardBody>
                    <div className="text-4xl mb-4">{principle.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card hover>
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${feature.bg}`}>
                        <feature.icon className={feature.color} size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Simple 3-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Define Your Decision',
                description: 'Describe the choice you\'re facing and the options you\'re considering',
              },
              {
                step: '2',
                title: 'Evaluate Mindfully',
                description: 'Rate how each option makes you feel: peace, joy, and clarity',
              },
              {
                step: '3',
                title: 'Choose with Confidence',
                description: 'Let the metrics guide you to the decision that truly resonates',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PricingSection
          onSelectPlan={(tierId) => {
            if (tierId !== 'free') {
              setShowPaymentModal(true);
            }
          }}
          currentTier="free"
        />
      </section>
      
      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 border-none">
            <CardBody className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Make Better Decisions?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Start your journey to mindful decision-making today
              </p>
              <Link href="/dashboard">
                <Button
                  variant="accent"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl"
                >
                  Get Started Free <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </CardBody>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
