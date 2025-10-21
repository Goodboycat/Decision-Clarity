'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Lightbulb } from 'lucide-react';
import type { Analytics } from '@/lib/types';

interface KeyInsightsProps {
  analytics: Analytics;
}

export const KeyInsights: React.FC<KeyInsightsProps> = ({ analytics }) => {
  const completionRate = analytics.totalDecisions > 0
    ? Math.round((analytics.completedDecisions / analytics.totalDecisions) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="text-yellow-600" size={24} />
            <h3 className="text-xl font-semibold text-gray-900">
              Key Insights
            </h3>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Completion Rate
              </h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
                <span className="font-bold text-gray-900">
                  {completionRate}%
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {analytics.completedDecisions} of {analytics.totalDecisions} decisions completed
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Intuition Accuracy
              </h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-purple-600 h-full rounded-full"
                    style={{ width: `${analytics.intuitionAccuracy}%` }}
                  />
                </div>
                <span className="font-bold text-gray-900">
                  {analytics.intuitionAccuracy}%
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                How well your intuition aligns with outcomes
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
