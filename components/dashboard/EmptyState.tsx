'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

interface EmptyStateProps {
  hasFilters: boolean;
  onNewDecision: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ hasFilters, onNewDecision }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center py-20"
    >
      <div className="text-6xl mb-4">🧘</div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        {hasFilters ? 'No decisions found' : 'No decisions yet'}
      </h3>
      <p className="text-gray-600 mb-6">
        {hasFilters
          ? 'Try adjusting your filters'
          : 'Start your mindful decision-making journey'}
      </p>
      {!hasFilters && (
        <Button
          variant="primary"
          onClick={onNewDecision}
        >
          <Plus size={20} className="mr-2" /> Create Your First Decision
        </Button>
      )}
    </motion.div>
  );
};
