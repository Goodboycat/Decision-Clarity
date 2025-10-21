'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search } from 'lucide-react';
import type { DecisionStatus } from '@/lib/types';

interface DashboardFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: DecisionStatus | 'all';
  onStatusChange: (status: DecisionStatus | 'all') => void;
}

export const DashboardFilters: React.FC<DashboardFiltersProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-6 flex flex-col md:flex-row gap-4"
    >
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search decisions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Badge
          variant={statusFilter === 'all' ? 'primary' : 'secondary'}
          className="cursor-pointer px-4 py-2"
          onClick={() => onStatusChange('all')}
        >
          All
        </Badge>
        <Badge
          variant={statusFilter === 'evaluating' ? 'warning' : 'secondary'}
          className="cursor-pointer px-4 py-2"
          onClick={() => onStatusChange('evaluating')}
        >
          Evaluating
        </Badge>
        <Badge
          variant={statusFilter === 'completed' ? 'success' : 'secondary'}
          className="cursor-pointer px-4 py-2"
          onClick={() => onStatusChange('completed')}
        >
          Completed
        </Badge>
      </div>
    </motion.div>
  );
};
