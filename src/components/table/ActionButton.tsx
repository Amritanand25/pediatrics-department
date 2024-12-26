import React from 'react';
import { Syringe, Calendar, TestTube } from 'lucide-react'; // Changed Flask to TestTube
import { ActionType } from '../../types/patient';

interface ActionButtonProps {
  type: ActionType;
  onClick: () => void;
}

const icons = {
  vaccine: Syringe,
  followup: Calendar,
  lab: TestTube // Updated to use TestTube instead of Flask
};

const labels = {
  vaccine: 'Vaccines',
  followup: 'Follow-up',
  lab: 'Lab Tests'
};

export const ActionButton: React.FC<ActionButtonProps> = ({ type, onClick }) => {
  const Icon = icons[type];

  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 transition-colors mr-2 last:mr-0"
    >
      <Icon className="w-4 h-4 mr-1.5" />
      {labels[type]}
    </button>
  );
};