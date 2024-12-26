import { Patient } from '../types/patient';

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'overdue':
      return 'bg-red-100 text-red-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-green-100 text-green-800';
  }
};

export const sortPatients = (
  patients: Patient[],
  sortConfig: { key: keyof Patient; direction: 'asc' | 'desc' } | null
) => {
  if (!sortConfig) return patients;

  return [...patients].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    return sortConfig.direction === 'asc' ? 
      aValue > bValue ? 1 : -1 :
      aValue < bValue ? 1 : -1;
  });
};