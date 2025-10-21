'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Plus, X } from 'lucide-react';
import type { DecisionOption } from '@/lib/types';
import { generateId } from '@/lib/utils';

interface OptionsManagerProps {
  options: DecisionOption[];
  onOptionsChange: (options: DecisionOption[]) => void;
}

export const OptionsManager: React.FC<OptionsManagerProps> = ({
  options,
  onOptionsChange,
}) => {
  const addOption = () => {
    const newOption: DecisionOption = {
      id: generateId(),
      title: '',
      description: '',
      prosSimple: [],
      consSimple: [],
      emotionalResponse: { peace: 50, joy: 50, clarity: 50 },
      intuitionAlignment: 50,
      simplicityScore: 50,
    };
    onOptionsChange([...options, newOption]);
  };
  
  const removeOption = (id: string) => {
    onOptionsChange(options.filter((opt) => opt.id !== id));
  };
  
  const updateOption = (index: number, title: string) => {
    const newOptions = [...options];
    newOptions[index].title = title;
    onOptionsChange(newOptions);
  };
  
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Options (Optional)
        </h3>
        <Button variant="outline" size="sm" onClick={addOption}>
          <Plus size={16} className="mr-1" /> Add Option
        </Button>
      </div>
      
      {options.map((option, index) => (
        <div key={option.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
          <div className="flex items-start justify-between mb-2">
            <span className="font-medium text-gray-700">Option {index + 1}</span>
            <button
              onClick={() => removeOption(option.id)}
              className="text-red-600 hover:text-red-800"
            >
              <X size={16} />
            </button>
          </div>
          <Input
            placeholder="Option title"
            value={option.title}
            onChange={(e) => updateOption(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};
