'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MeditationTimer } from '@/components/meditation/MeditationTimer';
import { MeditationStats } from '@/components/meditation/MeditationStats';
import { MeditationTypeSelector } from '@/components/meditation/MeditationTypeSelector';
import { RecentSessions } from '@/components/meditation/RecentSessions';
import { MeditationTips } from '@/components/meditation/MeditationTips';
import { MEDITATION_TYPES } from '@/lib/constants';
import { useStore } from '@/lib/store';
import { generateId } from '@/lib/utils';
import type { MeditationSession } from '@/lib/types';

export default function Meditation() {
  const addMeditationSession = useStore((state) => state.addMeditationSession);
  const meditationSessions = useStore((state) => state.meditationSessions);
  
  const [selectedType, setSelectedType] = useState<'breathing' | 'reflection' | 'visualization' | null>(null);
  const [customDuration, setCustomDuration] = useState<number | null>(null);
  
  const handleComplete = () => {
    if (!selectedType) return;
    
    const session: MeditationSession = {
      id: generateId(),
      duration: customDuration || MEDITATION_TYPES.find((m) => m.type === selectedType)?.duration || 300,
      type: selectedType,
      completedAt: new Date(),
    };
    
    addMeditationSession(session);
    setSelectedType(null);
    setCustomDuration(null);
  };
  
  const totalMeditationTime = meditationSessions.reduce((sum, session) => sum + session.duration, 0);
  const totalSessions = meditationSessions.length;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Mindful Meditation
        </h1>
        <p className="text-gray-600 text-lg">
          Take a moment to breathe, reflect, and connect with your inner wisdom
        </p>
      </motion.div>
      
      {/* Stats */}
      <MeditationStats
        totalSessions={totalSessions}
        totalMinutes={Math.floor(totalMeditationTime / 60)}
      />
      
      {/* Active Meditation Timer */}
      {selectedType && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <MeditationTimer
            type={selectedType}
            duration={customDuration || MEDITATION_TYPES.find((m) => m.type === selectedType)?.duration || 300}
            onComplete={handleComplete}
          />
          <div className="text-center mt-4">
            <Button
              variant="ghost"
              onClick={() => {
                setSelectedType(null);
                setCustomDuration(null);
              }}
            >
              Cancel Session
            </Button>
          </div>
        </motion.div>
      )}
      
      {/* Meditation Type Selection */}
      {!selectedType && (
        <>
          <MeditationTypeSelector onSelect={setSelectedType} />
          <RecentSessions sessions={meditationSessions} />
          <MeditationTips />
        </>
      )}
    </div>
  );
}
