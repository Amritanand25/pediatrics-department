import React from 'react';
import { X } from 'lucide-react';
import { Patient } from '../types/patient';

interface PatientDetailsModalProps {
  patient: Patient;
  onClose: () => void;
}

export const PatientDetailsModal: React.FC<PatientDetailsModalProps> = ({ patient, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Patient Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-gray-900">{patient.patientName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="text-gray-900">{patient.contact}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Parent/Guardian</p>
                  <p className="text-gray-900">{patient.parent}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Immediate Actions</h3>
              <div className="mt-2">
                {patient.immediateActions.map((action) => (
                  <div
                    key={action.id}
                    className="mb-2 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">{action.type}</p>
                        <p className="text-sm text-gray-500">{action.description}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          action.status === 'overdue' ? 'bg-red-100 text-red-800' :
                          action.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}
                      >
                        {action.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Due: {action.dueDate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};