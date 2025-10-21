'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { BasicInfo } from './DecisionForm/BasicInfo';
import { EmotionalMetrics } from './DecisionForm/EmotionalMetrics';
import { DecisionQualities } from './DecisionForm/DecisionQualities';
import { OptionsManager } from './DecisionForm/OptionsManager';
import { useStore } from '@/lib/store';
import { generateId } from '@/lib/utils';
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
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={handleClose} 
      title={editingDecision ? 'Edit Decision' : 'New Decision'} 
      size="lg"
    >
      <div className="space-y-6">
        <BasicInfo
          title={title}
          description={description}
          selectedTags={selectedTags}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onTagToggle={toggleTag}
        />
        
        <EmotionalMetrics
          peace={peace}
          joy={joy}
          clarity={clarity}
          onPeaceChange={setPeace}
          onJoyChange={setJoy}
          onClarityChange={setClarity}
        />
        
        <DecisionQualities
          complexity={complexity}
          intuitionScore={intuitionScore}
          onComplexityChange={setComplexity}
          onIntuitionChange={setIntuitionScore}
        />
        
        <OptionsManager
          options={options}
          onOptionsChange={setOptions}
        />
        
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
