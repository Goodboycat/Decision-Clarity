'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@/components/ui/Card';
import { Award } from 'lucide-react';

interface MotivationalCardProps {
  message: string;
}

export const MotivationalCard: React.FC<MotivationalCardProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <CardBody>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Award className="text-purple-600" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Your Decision-Making Journey
              </h3>
              <p className="text-lg text-gray-700">{message}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
