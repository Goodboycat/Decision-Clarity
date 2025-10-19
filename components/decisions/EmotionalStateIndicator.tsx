'use client';

import React from 'react';
import { Heart, Smile, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import type { EmotionalState } from '@/lib/types';
import { cn, getScoreColor } from '@/lib/utils';

interface EmotionalStateIndicatorProps {
  emotionalState: EmotionalState;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export const EmotionalStateIndicator: React.FC<EmotionalStateIndicatorProps> = ({
  emotionalState,
  size = 'md',
  showLabels = true,
}) => {
  const indicators = [
    {
      icon: Heart,
      label: 'Peace',
      value: emotionalState.peace,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Smile,
      label: 'Joy',
      value: emotionalState.joy,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
    {
      icon: Lightbulb,
      label: 'Clarity',
      value: emotionalState.clarity,
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
  ];
  
  const sizes = {
    sm: { icon: 16, text: 'text-xs', padding: 'p-2', gap: 'gap-2' },
    md: { icon: 20, text: 'text-sm', padding: 'p-3', gap: 'gap-3' },
    lg: { icon: 24, text: 'text-base', padding: 'p-4', gap: 'gap-4' },
  };
  
  return (
    <div className={cn('flex', sizes[size].gap)}>
      {indicators.map(({ icon: Icon, label, value, color, bg }) => (
        <div key={label} className="flex-1">
          <div
            className={cn(
              'flex flex-col items-center justify-center rounded-lg',
              bg,
              sizes[size].padding
            )}
          >
            <Icon className={cn(color, 'mb-1')} size={sizes[size].icon} />
            {showLabels && (
              <span className={cn('font-medium text-gray-700', sizes[size].text)}>
                {label}
              </span>
            )}
            <motion.span
              key={value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={cn('font-bold mt-1', getScoreColor(value), sizes[size].text)}
            >
              {value}
            </motion.span>
          </div>
        </div>
      ))}
    </div>
  );
};
