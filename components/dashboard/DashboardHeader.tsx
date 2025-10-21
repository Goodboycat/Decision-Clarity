'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

interface DashboardHeaderProps {
  onNewDecision: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onNewDecision }) => {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Your Decisions</h1>
          <p className="text-gray-600 mt-2">
            Track and evaluate your decisions with mindfulness
          </p>
        </div>
        <Button
          variant="primary"
          size="lg"
          onClick={onNewDecision}
        >
          <Plus size={20} className="mr-2" /> New Decision
        </Button>
      </motion.div>
    </div>
  );
};
