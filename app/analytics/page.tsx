'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { calculateAnalytics, getMotivationalMessage, calculateDecisionScore } from '@/lib/utils';
import { DashboardStats } from '@/components/analytics/DashboardStats';
import { MotivationalCard } from '@/components/analytics/MotivationalCard';
import { SimplicityTrend } from '@/components/analytics/SimplicitTrend';
import { DecisionActivity } from '@/components/analytics/DecisionActivity';
import { KeyInsights } from '@/components/analytics/KeyInsights';

export default function Analytics() {
  const decisions = useStore((state) => state.decisions);
  const analytics = calculateAnalytics(decisions);
  
  const averageOverallScore = decisions.length
    ? Math.round(
        decisions.reduce((sum, d) => sum + calculateDecisionScore(d.emotionalState), 0) / decisions.length
      )
    : 0;
  
  const motivationalMessage = getMotivationalMessage(averageOverallScore);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600 text-lg">
          Insights into your decision-making journey
        </p>
      </motion.div>
      
      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <DashboardStats analytics={analytics} />
      </motion.div>
      
      {decisions.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            No Analytics Yet
          </h3>
          <p className="text-gray-600">
            Start making decisions to see your analytics
          </p>
        </motion.div>
      ) : (
        <>
          <MotivationalCard message={motivationalMessage} />
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <SimplicityTrend scores={analytics.simplicityTrend} />
            <DecisionActivity data={analytics.decisionsByMonth} />
          </div>
          
          <KeyInsights analytics={analytics} />
        </>
      )}
    </div>
  );
}
