'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardFilters } from '@/components/dashboard/DashboardFilters';
import { EmptyState } from '@/components/dashboard/EmptyState';
import { DecisionGrid } from '@/components/dashboard/DecisionGrid';
import { NewDecisionModal } from '@/components/decisions/NewDecisionModal';
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
  
  const hasFilters = searchQuery !== '' || statusFilter !== 'all';
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DashboardHeader onNewDecision={() => setIsNewDecisionOpen(true)} />
      
      <DashboardFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />
      
      {filteredDecisions.length === 0 ? (
        <EmptyState
          hasFilters={hasFilters}
          onNewDecision={() => setIsNewDecisionOpen(true)}
        />
      ) : (
        <DecisionGrid
          decisions={filteredDecisions}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      
      <NewDecisionModal
        isOpen={isNewDecisionOpen}
        onClose={handleModalClose}
        editingDecision={editingDecision}
      />
    </div>
  );
}
