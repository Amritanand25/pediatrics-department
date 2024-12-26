import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePatients } from '../context/PatientContext';
import { Patient, ActionType } from '../types/patient';
import { PatientDetailsModal } from './PatientDetailsModal';
import { ActionModal } from './ActionModal';
import { ActionButton } from './table/ActionButton';

export const PatientTable: React.FC = () => {
  const { patients, sortConfig, setSortConfig, searchTerm, currentPage } = usePatients();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [actionModalConfig, setActionModalConfig] = useState<{
    isOpen: boolean;
    type: ActionType | null;
    patientId: string | null;
  }>({ isOpen: false, type: null, patientId: null });

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;

  const filteredPatients = patients.filter(patient =>
    patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.parent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPatients = [...filteredPatients].sort((a, b) => {
    if (!sortConfig) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    return sortConfig.direction === 'asc' ? 
      aValue > bValue ? 1 : -1 :
      aValue < bValue ? 1 : -1;
  });

  const paginatedPatients = sortedPatients.slice(startIndex, startIndex + itemsPerPage);

  // const handleSort = (key: keyof Patient) => {
  //   setSortConfig(current => ({
  //     key,
  //     direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
  //   }));
  // };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const formatActionType = (type: string) => {
    switch (type) {
      case 'vaccine':
        return 'Vaccine';
      case 'followup':
        return 'Follow-up';
      case 'lab':
        return 'Lab Test';
      default:
        return type;
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Patient Name', 'Contact', 'Parent', 'Immediate Actions', 'Due Dates', 'Actions'].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    //onClick={() => handleSort(header.toLowerCase().replace(' ', '') as keyof Patient)}
                  >
                    <div className="flex items-center gap-2">
                      {header}
                      {sortConfig?.key === header.toLowerCase().replace(' ', '') && (
                        sortConfig.direction === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="text-blue-600 hover:text-blue-800 font-medium"
                      onClick={() => setSelectedPatient(patient)}
                    >
                      {patient.patientName}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{patient.parent}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {patient.immediateActions.map(action => (
                        <span
                          key={action.id}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(action.status)}`}
                        >
                          {formatActionType(action.type)}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      {patient.immediateActions.map(action => (
                        <div key={action.id} className="text-sm text-gray-600">
                          {new Date(action.dueDate).toLocaleDateString()}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {(['vaccine', 'followup', 'lab'] as ActionType[]).map(type => (
                        <ActionButton
                          key={type}
                          type={type}
                          onClick={() => setActionModalConfig({ isOpen: true, type, patientId: patient.id })}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}

      {actionModalConfig.isOpen && actionModalConfig.type && (
        <ActionModal
          type={actionModalConfig.type}
          patientId={actionModalConfig.patientId!}
          onClose={() => setActionModalConfig({ isOpen: false, type: null, patientId: null })}
        />
      )}
    </>
  );
};