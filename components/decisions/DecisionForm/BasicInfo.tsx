'use client';

import React from 'react';
import { Input, TextArea } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { DECISION_TAGS } from '@/lib/constants';

interface BasicInfoProps {
  title: string;
  description: string;
  selectedTags: string[];
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
  onTagToggle: (tag: string) => void;
}

export const BasicInfo: React.FC<BasicInfoProps> = ({
  title,
  description,
  selectedTags,
  onTitleChange,
  onDescriptionChange,
  onTagToggle,
}) => {
  return (
    <div className="space-y-6">
      <Input
        label="Decision Title"
        placeholder="What decision are you considering?"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      
      <TextArea
        label="Description"
        placeholder="Describe the decision in detail..."
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        rows={3}
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>
        <div className="flex flex-wrap gap-2">
          {DECISION_TAGS.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? 'primary' : 'secondary'}
              className="cursor-pointer"
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
