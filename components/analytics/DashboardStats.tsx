'use client';

import React from 'react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { TrendingUp, Heart, Smile, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Analytics } from '@/lib/types';

interface DashboardStatsProps {
  analytics: Analytics;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ analytics }) => {
  const stats = [
    {
      label: 'Total Decisions',
      value: analytics.totalDecisions,
      icon: Target,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      label: 'Average Peace',
      value: `${analytics.averagePeace}%`,
      icon: Heart,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      label: 'Average Joy',
      value: `${analytics.averageJoy}%`,
      icon: Smile,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
    {
      label: 'Average Clarity',
      value: `${analytics.averageClarity}%`,
      icon: Lightbulb,
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <stat.icon className={stat.color} size={28} />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
