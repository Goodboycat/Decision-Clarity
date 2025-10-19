'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Input, TextArea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Slider } from '@/components/ui/Slider';
import { Badge } from '@/components/ui/Badge';
import { Plus, X } from 'lucide-react';
import { useStore } from '@/lib/store';
import { generateId } from '@/lib/utils';
import { DECISION_TAGS } from '@/lib/constants';
import type { Decision, DecisionOption } from '@/lib/types';

interface NewDecisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingDecision?: Decision;
}

export const NewDecisionModal: React.FC<NewDecisionModalProps> = ({
  isOpen,
  onClose,
  editingDecision,
}) => {
  const addDecision = useStore((state) => state.addDecision);
  const updateDecision = useStore((state) => state.updateDecision);
  
  const [title, setTitle] = useState(editingDecision?.title || '');
  const [description, setDescription] = useState(editingDecision?.description || '');
  const [peace, setPeace] = useState(editingDecision?.emotionalState.peace || 50);
  const [joy, setJoy] = useState(editingDecision?.emotionalState.joy || 50);
  const [clarity, setClarity] = useState(editingDecision?.emotionalState.clarity || 50);
  const [complexity, setComplexity] = useState(editingDecision?.complexity || 50);
  const [intuitionScore, setIntuitionScore] = useState(editingDecision?.intuitionScore || 50);
  const [selectedTags, setSelectedTags] = useState<string[]>(editingDecision?.tags || []);
  const [options, setOptions] = useState<DecisionOption[]>(editingDecision?.options || []);
  
  const handleSubmit = () => {
    if (!title.trim()) return;
    
    const decision: Decision = {
      id: editingDecision?.id || generateId(),
      title,
      description,
      options,
      emotionalState: { peace, joy, clarity },
      complexity,
      intuitionScore,
      status: 'evaluating',
      createdAt: editingDecision?.createdAt || new Date(),
      updatedAt: new Date(),
      tags: selectedTags,
    };
    
    if (editingDecision) {
      updateDecision(editingDecision.id, decision);
    } else {
      addDecision(decision);
    }
    
    handleClose();
  };
  
  const handleClose = () => {
    setTitle('');
    setDescription('');
    setPeace(50);
    setJoy(50);
    setClarity(50);
    setComplexity(50);
    setIntuitionScore(50);
    setSelectedTags([]);
    setOptions([]);
    onClose();
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  
  const addOption = () => {
    setOptions([
      ...options,
      {
        id: generateId(),
        title: '',
        description: '',
        prosSimple: [],
        consSimple: [],
        emotionalResponse: { peace: 50, joy: 50, clarity: 50 },
        intuitionAlignment: 50,
        simplicityScore: 50,
      },
    ]);
  };
  
  const removeOption = (id: string) => {
    setOptions(options.filter((opt) => opt.id !== id));
  };
  
  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={editingDecision ? 'Edit Decision' : 'New Decision'} size="lg">
      <div className="space-y-6">
        <Input
          label="Decision Title"
          placeholder="What decision are you considering?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <TextArea
          label="Description"
          placeholder="Describe the decision in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            How does this decision feel?
          </h3>
          
          <Slider
            label="Peace"
            value={peace}
            onChange={setPeace}
            color="blue"
            helperText="Does this decision bring peace to your mind?"
          />
          
          <Slider
            label="Joy"
            value={joy}
            onChange={setJoy}
            color="yellow"
            helperText="Does this decision spark joy in your heart?"
          />
          
          <Slider
            label="Clarity"
            value={clarity}
            onChange={setClarity}
            color="green"
            helperText="How clear are you about this decision?"
          />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Decision Qualities
          </h3>
          
          <Slider
            label="Complexity"
            value={complexity}
            onChange={setComplexity}
            color="purple"
            helperText="Lower is better - simplicity over complexity"
          />
          
          <Slider
            label="Intuition Alignment"
            value={intuitionScore}
            onChange={setIntuitionScore}
            color="purple"
            helperText="How aligned is this with your intuition?"
          />
        </div>
        
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
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index].title = e.target.value;
                  setOptions(newOptions);
                }}
                className="mb-2"
              />
            </div>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleClose} className="flex-1">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} className="flex-1">
            {editingDecision ? 'Update' : 'Create'} Decision
          </Button>
        </div>
      </div>
    </Modal>
  );
};
