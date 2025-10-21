'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@/components/ui/Card';

interface MeditationStatsProps {
  totalSessions: number;
  totalMinutes: number;
}

export const MeditationStats: React.FC<MeditationStatsProps> = ({
  totalSessions,
  totalMinutes,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="grid md:grid-cols-2 gap-6 mb-8"
    >
      <Card>
        <CardBody>
          <div className="text-center">
            <p className="text-gray-600 mb-2">Total Sessions</p>
            <p className="text-4xl font-bold text-blue-600">{totalSessions}</p>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="text-center">
            <p className="text-gray-600 mb-2">Total Time</p>
            <p className="text-4xl font-bold text-purple-600">{totalMinutes} min</p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
