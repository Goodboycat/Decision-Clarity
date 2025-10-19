'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { MEDITATION_TYPES } from '@/lib/constants';
import { getBreathingPattern } from '@/lib/utils';

interface MeditationTimerProps {
  type: 'breathing' | 'reflection' | 'visualization';
  duration: number;
  onComplete: () => void;
}

export const MeditationTimer: React.FC<MeditationTimerProps> = ({
  type,
  duration,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [breathCount, setBreathCount] = useState(0);
  
  const meditationType = MEDITATION_TYPES.find((m) => m.type === type);
  const pattern = type === 'breathing' ? getBreathingPattern(duration) : null;
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsActive(false);
            onComplete();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);
  
  useEffect(() => {
    if (type === 'breathing' && isActive && pattern) {
      const cycleTime = pattern.inhale + pattern.hold + pattern.exhale + pattern.rest;
      const position = (duration - timeLeft) % cycleTime;
      
      if (position < pattern.inhale) {
        setBreathPhase('inhale');
      } else if (position < pattern.inhale + pattern.hold) {
        setBreathPhase('hold');
      } else if (position < pattern.inhale + pattern.hold + pattern.exhale) {
        setBreathPhase('exhale');
      } else {
        setBreathPhase('rest');
      }
      
      if (position === 0) {
        setBreathCount((c) => c + 1);
      }
    }
  }, [type, isActive, timeLeft, duration, pattern]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleReset = () => {
    setTimeLeft(duration);
    setIsActive(false);
    setBreathPhase('inhale');
    setBreathCount(0);
  };
  
  const getBreathInstruction = () => {
    switch (breathPhase) {
      case 'inhale':
        return 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Breathe Out';
      case 'rest':
        return 'Rest';
    }
  };
  
  const circleSize = breathPhase === 'inhale' ? 200 : breathPhase === 'exhale' ? 100 : 150;
  
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            {meditationType?.name}
          </h3>
          <p className="text-gray-600 mt-1">
            {meditationType?.description}
          </p>
        </div>
      </CardHeader>
      
      <CardBody>
        <div className="flex flex-col items-center justify-center py-8">
          {type === 'breathing' && (
            <div className="mb-8 h-64 flex items-center justify-center">
              <motion.div
                animate={{ width: circleSize, height: circleSize }}
                transition={{ duration: pattern?.inhale || 4, ease: 'easeInOut' }}
                className="rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={breathPhase}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-white font-bold text-xl"
                  >
                    {getBreathInstruction()}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </div>
          )}
          
          <div className="text-6xl font-bold text-gray-900 mb-6">
            {formatTime(timeLeft)}
          </div>
          
          {type === 'breathing' && (
            <div className="text-gray-600 mb-6">
              Breath Cycle: {breathCount}
            </div>
          )}
          
          <div className="flex gap-4">
            <Button
              variant={isActive ? 'secondary' : 'primary'}
              size="lg"
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? (
                <>
                  <Pause size={20} className="mr-2" /> Pause
                </>
              ) : (
                <>
                  <Play size={20} className="mr-2" /> Start
                </>
              )}
            </Button>
            <Button variant="outline" size="lg" onClick={handleReset}>
              <RotateCcw size={20} />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
