'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DecisionCard } from '@/components/decisions/DecisionCard';
import type { Decision } from '@/lib/types';

interface DecisionGridProps {
  decisions: Decision[];
  onView: (decision: Decision) => void;
  onEdit: (decision: Decision) => void;
  onDelete: (decision: Decision) => void;
}

export const DecisionGrid: React.FC<DecisionGridProps> = ({
  decisions,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {decisions.map((decision, index) => (
        <motion.div
          key={decision.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index }}
        >
          <DecisionCard
            decision={decision}
            onView={() => onView(decision)}
            onEdit={() => onEdit(decision)}
            onDelete={() => onDelete(decision)}
          />
        </motion.div>
      ))}
    </div>
  );
};
