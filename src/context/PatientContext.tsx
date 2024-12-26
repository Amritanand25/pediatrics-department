import React, { createContext, useContext, useState } from "react";
import { Patient, ActionType } from "../types/patient";
import { patientsData } from "../utils/data";

interface PatientContextType {
  patients: Patient[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortConfig: { key: keyof Patient; direction: "asc" | "desc" } | null;
  setSortConfig: (
    config: { key: keyof Patient; direction: "asc" | "desc" } | null
  ) => void;
  updatePatientAction: (
    patientId: string,
    actionType: ActionType,
    action: any
  ) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export const PatientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [patients, setPatients] = useState<Patient[]>([...patientsData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Patient;
    direction: "asc" | "desc";
  } | null>(null);

  const updatePatientAction = (
    patientId: string,
    actionType: ActionType,
    action: any
  ) => {
    setPatients((prevPatients) => {
      return prevPatients.map((patient) => {
        if (patient.id === patientId) {
          const updatedActions = [...patient.immediateActions];
          const actionIndex = updatedActions.findIndex(
            (a) => a.type === actionType
          );

          if (actionIndex !== -1) {
            updatedActions[actionIndex] = {
              ...updatedActions[actionIndex],
              ...action,
              id: updatedActions[actionIndex].id,
            };
          } else {
            updatedActions.push({
              id: Date.now().toString(),
              type: actionType,
              ...action,
            });
          }

          return {
            ...patient,
            immediateActions: updatedActions,
          };
        }
        return patient;
      });
    });
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        currentPage,
        setCurrentPage,
        searchTerm,
        setSearchTerm,
        sortConfig,
        setSortConfig,
        updatePatientAction,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

// Export the hook
export const usePatients = () => {
  const context = useContext(PatientContext);
  if (context === undefined) {
    throw new Error("usePatients must be used within a PatientProvider");
  }
  return context;
};
