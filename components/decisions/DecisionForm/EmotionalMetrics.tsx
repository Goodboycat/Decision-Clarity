'use client';

import React from 'react';
import { Slider } from '@/components/ui/Slider';

interface EmotionalMetricsProps {
  peace: number;
  joy: number;
  clarity: number;
  onPeaceChange: (value: number) => void;
  onJoyChange: (value: number) => void;
  onClarityChange: (value: number) => void;
}

export const EmotionalMetrics: React.FC<EmotionalMetricsProps> = ({
  peace,
  joy,
  clarity,
  onPeaceChange,
  onJoyChange,
  onClarityChange,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        How does this decision feel?
      </h3>
      
      <Slider
        label="Peace"
        value={peace}
        onChange={onPeaceChange}
        color="blue"
        helperText="Does this decision bring peace to your mind?"
      />
      
      <Slider
        label="Joy"
        value={joy}
        onChange={onJoyChange}
        color="yellow"
        helperText="Does this decision spark joy in your heart?"
      />
      
      <Slider
        label="Clarity"
        value={clarity}
        onChange={onClarityChange}
        color="green"
        helperText="How clear are you about this decision?"
      />
    </div>
  );
};
