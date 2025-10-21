'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { MEDITATION_TYPES } from '@/lib/constants';

interface MeditationTypeSelectorProps {
  onSelect: (type: 'breathing' | 'reflection' | 'visualization') => void;
}

export const MeditationTypeSelector: React.FC<MeditationTypeSelectorProps> = ({
  onSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Choose Your Practice
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {MEDITATION_TYPES.map((meditation, index) => (
          <motion.div
            key={meditation.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card hover onClick={() => onSelect(meditation.type)}>
              <CardHeader>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: meditation.color + '20' }}
                >
                  <div
                    className="w-12 h-12 rounded-full"
                    style={{ backgroundColor: meditation.color }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {meditation.name}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 text-center mb-4">
                  {meditation.description}
                </p>
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {meditation.duration / 60} min
                  </span>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
