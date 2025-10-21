'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';

interface SimplicityTrendProps {
  scores: number[];
}

export const SimplicityTrend: React.FC<SimplicityTrendProps> = ({ scores }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Simplicity Trend
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Recent 10 decisions
          </p>
        </CardHeader>
        <CardBody>
          <div className="space-y-2">
            {scores.map((score, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-8">
                  #{scores.length - index}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all"
                    style={{ width: `${score}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-900 w-12">
                  {score}%
                </span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
