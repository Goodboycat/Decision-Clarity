'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { EmotionalStateIndicator } from './EmotionalStateIndicator';
import { ChevronRight, Edit, Trash2, CheckCircle } from 'lucide-react';
import type { Decision } from '@/lib/types';
import { formatRelativeTime, calculateDecisionScore, isDecisionAligned } from '@/lib/utils';

interface DecisionCardProps {
  decision: Decision;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const DecisionCard: React.FC<DecisionCardProps> = ({
  decision,
  onView,
  onEdit,
  onDelete,
}) => {
  const score = calculateDecisionScore(decision.emotionalState);
  const aligned = isDecisionAligned(decision);
  
  const statusColors = {
    evaluating: 'warning',
    completed: 'success',
    archived: 'secondary',
  } as const;
  
  return (
    <Card hover className="group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {decision.title}
              </h3>
              {aligned && (
                <CheckCircle className="text-green-600" size={20} />
              )}
            </div>
            <p className="text-gray-600 line-clamp-2">{decision.description}</p>
          </div>
          <Badge variant={statusColors[decision.status]}>
            {decision.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardBody>
        <EmotionalStateIndicator
          emotionalState={decision.emotionalState}
          size="sm"
        />
        
        <div className="mt-4 flex flex-wrap gap-2">
          {decision.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" size="sm">
              {tag}
            </Badge>
          ))}
          {decision.tags.length > 3 && (
            <Badge variant="secondary" size="sm">
              +{decision.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gray-500">Simplicity</span>
            <p className="font-semibold text-gray-900">
              {100 - decision.complexity}%
            </p>
          </div>
          <div>
            <span className="text-gray-500">Intuition</span>
            <p className="font-semibold text-gray-900">
              {decision.intuitionScore}%
            </p>
          </div>
        </div>
      </CardBody>
      
      <CardFooter>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {formatRelativeTime(decision.createdAt)}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onEdit}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Edit size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onDelete}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:bg-red-50"
            >
              <Trash2 size={16} />
            </Button>
            <Button variant="primary" size="sm" onClick={onView}>
              View <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
