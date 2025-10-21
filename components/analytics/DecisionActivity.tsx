'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';

interface DecisionActivityProps {
  data: { month: string; count: number }[];
}

export const DecisionActivity: React.FC<DecisionActivityProps> = ({ data }) => {
  const maxCount = Math.max(...data.map((d) => d.count));

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Decision Activity
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Last 6 months
          </p>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {data.map((item) => (
              <div key={item.month} className="flex items-center justify-between">
                <span className="text-gray-700">{item.month}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-600 h-full rounded-full"
                      style={{
                        width: `${(item.count / maxCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="font-semibold text-gray-900 w-8">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
