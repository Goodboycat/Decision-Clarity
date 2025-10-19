'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { DecisionCard } from '@/components/decisions/DecisionCard';
import { NewDecisionModal } from '@/components/decisions/NewDecisionModal';
import { Plus, Filter, Search } from 'lucide-react';
import { useStore } from '@/lib/store';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import type { Decision, DecisionStatus } from '@/lib/types';

export default function Dashboard() {
  const decisions = useStore((state) => state.decisions);
  const deleteDecision = useStore((state) => state.deleteDecision);
  const setCurrentDecisionId = useStore((state) => state.setCurrentDecisionId);
  
  const [isNewDecisionOpen, setIsNewDecisionOpen] = useState(false);
  const [editingDecision, setEditingDecision] = useState<Decision | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<DecisionStatus | 'all'>('all');
  
  const filteredDecisions = decisions.filter((decision) => {
    const matchesSearch = decision.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      decision.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || decision.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  const handleEdit = (decision: Decision) => {
    setEditingDecision(decision);
    setIsNewDecisionOpen(true);
  };
  
  const handleView = (decision: Decision) => {
    setCurrentDecisionId(decision.id);
    // Navigate to detail view (can be implemented later)
  };
  
  const handleDelete = (decision: Decision) => {
    if (confirm('Are you sure you want to delete this decision?')) {
      deleteDecision(decision.id);
    }
  };
  
  const handleModalClose = () => {
    setIsNewDecisionOpen(false);
    setEditingDecision(undefined);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
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
            onClick={() => setIsNewDecisionOpen(true)}
          >
            <Plus size={20} className="mr-2" /> New Decision
          </Button>
        </motion.div>
      </div>
      
      {/* Filters */}
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
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Badge
            variant={statusFilter === 'all' ? 'primary' : 'secondary'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setStatusFilter('all')}
          >
            All
          </Badge>
          <Badge
            variant={statusFilter === 'evaluating' ? 'warning' : 'secondary'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setStatusFilter('evaluating')}
          >
            Evaluating
          </Badge>
          <Badge
            variant={statusFilter === 'completed' ? 'success' : 'secondary'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setStatusFilter('completed')}
          >
            Completed
          </Badge>
        </div>
      </motion.div>
      
      {/* Decision Grid */}
      {filteredDecisions.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🧘</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            {searchQuery || statusFilter !== 'all'
              ? 'No decisions found'
              : 'No decisions yet'}
          </h3>
          <p className="text-gray-600 mb-6">
            {searchQuery || statusFilter !== 'all'
              ? 'Try adjusting your filters'
              : 'Start your mindful decision-making journey'}
          </p>
          {!searchQuery && statusFilter === 'all' && (
            <Button
              variant="primary"
              onClick={() => setIsNewDecisionOpen(true)}
            >
              <Plus size={20} className="mr-2" /> Create Your First Decision
            </Button>
          )}
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDecisions.map((decision, index) => (
            <motion.div
              key={decision.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <DecisionCard
                decision={decision}
                onView={() => handleView(decision)}
                onEdit={() => handleEdit(decision)}
                onDelete={() => handleDelete(decision)}
              />
            </motion.div>
          ))}
        </div>
      )}
      
      {/* New Decision Modal */}
      <NewDecisionModal
        isOpen={isNewDecisionOpen}
        onClose={handleModalClose}
        editingDecision={editingDecision}
      />
    </div>
  );
}
