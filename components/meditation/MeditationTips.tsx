'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@/components/ui/Card';

export const MeditationTips: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-8"
    >
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardBody>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            💡 Meditation Tips
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Find a quiet, comfortable space where you won't be disturbed</li>
            <li>• Sit in a comfortable position with your spine straight</li>
            <li>• Close your eyes or maintain a soft gaze</li>
            <li>• Let go of judgment - there's no "perfect" meditation</li>
            <li>• Be patient with yourself and your practice</li>
          </ul>
        </CardBody>
      </Card>
    </motion.div>
  );
};
