'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@/components/ui/Card';
import { Check } from 'lucide-react';
import { MEDITATION_TYPES } from '@/lib/constants';
import type { MeditationSession } from '@/lib/types';

interface RecentSessionsProps {
  sessions: MeditationSession[];
}

export const RecentSessions: React.FC<RecentSessionsProps> = ({ sessions }) => {
  if (sessions.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Recent Sessions
      </h2>
      <Card>
        <CardBody>
          <div className="space-y-4">
            {sessions.slice(-5).reverse().map((session) => {
              const meditationType = MEDITATION_TYPES.find((m) => m.type === session.type);
              return (
                <div
                  key={session.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: meditationType?.color }}
                    >
                      <Check size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {meditationType?.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {new Date(session.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {Math.floor(session.duration / 60)} min
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
