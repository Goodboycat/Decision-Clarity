'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@/components/ui/Card';
import { Heart, Smile, Compass, Leaf } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
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
  );
};
