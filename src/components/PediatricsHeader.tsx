import React from 'react';
import { Search, Download } from 'lucide-react';
import { usePatients } from '../context/PatientContext';
import { exportToCSV } from '../utils/exportUtils';

export const PediatricsHeader: React.FC = () => {
  const { setSearchTerm, patients } = usePatients();

  const handleExport = () => {
    exportToCSV(patients);
  };

  return (
    <div className="bg-white p-6 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Pediatrics Department</h1>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-initial">
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full md:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};