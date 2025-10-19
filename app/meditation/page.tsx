'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MeditationTimer } from '@/components/meditation/MeditationTimer';
import { MEDITATION_TYPES } from '@/lib/constants';
import { useStore } from '@/lib/store';
import { generateId } from '@/lib/utils';
import { Check } from 'lucide-react';
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-2 gap-6 mb-8"
      >
        <Card>
          <CardBody>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Total Sessions</p>
              <p className="text-4xl font-bold text-blue-600">{totalSessions}</p>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Total Time</p>
              <p className="text-4xl font-bold text-purple-600">
                {Math.floor(totalMeditationTime / 60)} min
              </p>
            </div>
          </CardBody>
        </Card>
      </motion.div>
      
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Choose Your Practice
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {MEDITATION_TYPES.map((meditation, index) => (
              <motion.div
                key={meditation.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card hover className="cursor-pointer" onClick={() => setSelectedType(meditation.type)}>
                  <CardHeader>
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: meditation.color + '20' }}
                    >
                      <div
                        className="w-12 h-12 rounded-full"
                        style={{ backgroundColor: meditation.color }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 text-center">
                      {meditation.name}
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-600 text-center mb-4">
                      {meditation.description}
                    </p>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {meditation.duration / 60} min
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Recent Sessions */}
      {!selectedType && meditationSessions.length > 0 && (
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
                {meditationSessions.slice(-5).reverse().map((session) => {
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
      )}
      
      {/* Meditation Tips */}
      {!selectedType && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardBody>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                💡 Meditation Tips
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Find a quiet, comfortable space where you won't be disturbed</li>
                <li>• Sit in a comfortable position with your spine straight</li>
                <li>• Close your eyes or maintain a soft gaze</li>
                <li>• Let go of judgment - there's no "perfect" meditation</li>
                <li>• Be patient with yourself and your practice</li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
