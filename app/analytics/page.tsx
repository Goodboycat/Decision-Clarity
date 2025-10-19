'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { DashboardStats } from '@/components/analytics/DashboardStats';
import { useStore } from '@/lib/store';
import { calculateAnalytics, getMotivationalMessage, calculateDecisionScore } from '@/lib/utils';
import { TrendingUp, Award, Lightbulb } from 'lucide-react';

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
          {/* Motivational Message */}
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
                    <p className="text-lg text-gray-700">{motivationalMessage}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
          
          {/* Detailed Stats */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Simplicity Trend */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Simplicity Trend
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Recent 10 decisions
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    {analytics.simplicityTrend.map((score, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 w-8">
                          #{analytics.simplicityTrend.length - index}
                        </span>
                        <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all"
                            style={{ width: `${score}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-12">
                          {score}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            
            {/* Decisions by Month */}
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
                    {analytics.decisionsByMonth.map((item) => (
                      <div key={item.month} className="flex items-center justify-between">
                        <span className="text-gray-700">{item.month}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-32 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-purple-600 h-full rounded-full"
                              style={{
                                width: `${(item.count / Math.max(...analytics.decisionsByMonth.map((d) => d.count))) * 100}%`,
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
          </div>
          
          {/* Insights */}
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
                          style={{
                            width: `${analytics.totalDecisions > 0 ? (analytics.completedDecisions / analytics.totalDecisions) * 100 : 0}%`,
                          }}
                        />
                      </div>
                      <span className="font-bold text-gray-900">
                        {analytics.totalDecisions > 0
                          ? Math.round((analytics.completedDecisions / analytics.totalDecisions) * 100)
                          : 0}%
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
        </>
      )}
    </div>
  );
}
