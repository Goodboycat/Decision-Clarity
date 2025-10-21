'use client';

import React from 'react';
import { Slider } from '@/components/ui/Slider';

interface DecisionQualitiesProps {
  complexity: number;
  intuitionScore: number;
  onComplexityChange: (value: number) => void;
  onIntuitionChange: (value: number) => void;
}

export const DecisionQualities: React.FC<DecisionQualitiesProps> = ({
  complexity,
  intuitionScore,
  onComplexityChange,
  onIntuitionChange,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Decision Qualities
      </h3>
      
      <Slider
        label="Complexity"
        value={complexity}
        onChange={onComplexityChange}
        color="purple"
        helperText="Lower is better - simplicity over complexity"
      />
      
      <Slider
        label="Intuition Alignment"
        value={intuitionScore}
        onChange={onIntuitionChange}
        color="purple"
        helperText="How aligned is this with your intuition?"
      />
    </div>
  );
};
