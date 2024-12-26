import { Patient } from '../types/patient';

export const exportToCSV = (patients: Patient[]) => {
  const headers = ['Patient Name', 'Contact', 'Parent', 'Immediate Actions', 'Due Date'];
  const csvContent = [
    headers.join(','),
    ...patients.map(patient => [
      patient.patientName,
      patient.contact,
      patient.parent,
      patient.immediateActions.map(a => a.type).join(';'),
      patient.immediateActions[0]?.dueDate || ''
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'patients.csv';
  link.click();
};