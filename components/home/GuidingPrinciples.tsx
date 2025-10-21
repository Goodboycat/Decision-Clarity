'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@/components/ui/Card';
import { GUIDING_PRINCIPLES } from '@/lib/constants';

export const GuidingPrinciples: React.FC = () => {
  return (
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
  );
};
