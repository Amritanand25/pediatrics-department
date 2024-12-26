import React, { useState } from "react";
import { X } from "lucide-react";
import { ActionType } from "../types/patient";
import { usePatients } from "../context/PatientContext";

interface ActionModalProps {
  type: ActionType;
  patientId: string;
  onClose: () => void;
}

export const ActionModal: React.FC<ActionModalProps> = ({
  type,
  patientId,
  onClose,
}) => {
  const { updatePatientAction } = usePatients();
  const [formData, setFormData] = useState({
    vaccineType: "MMR",
    date: "",
    notes: "",
    appointmentDate: "",
    reason: "",
    testType: "Blood Test",
    priority: "Normal",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const action = {
      type,
      dueDate: type === "followup" ? formData.appointmentDate : formData.date,
      description: getDescription(),
    };

    // FIX: Add `type` as the second parameter
    updatePatientAction(patientId, type, action);
    onClose();
  };

  const getDescription = () => {
    switch (type) {
      case "vaccine":
        return `${formData.vaccineType} Vaccine - ${formData.notes}`;
      case "followup":
        return formData.reason;
      case "lab":
        return `${formData.testType} - ${formData.priority} Priority`;
      default:
        return "";
    }
  };

  const renderContent = () => {
    switch (type) {
      case "vaccine":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Vaccine Type
              </label>
              <select
                value={formData.vaccineType}
                onChange={(e) =>
                  setFormData({ ...formData, vaccineType: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>MMR</option>
                <option>DPT</option>
                <option>Polio</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
              />
            </div>
          </form>
        );
      case "followup":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Appointment Date
              </label>
              <input
                type="datetime-local"
                value={formData.appointmentDate}
                onChange={(e) =>
                  setFormData({ ...formData, appointmentDate: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Reason
              </label>
              <input
                type="text"
                value={formData.reason}
                onChange={(e) =>
                  setFormData({ ...formData, reason: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        );
      case "lab":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Test Type
              </label>
              <select
                value={formData.testType}
                onChange={(e) =>
                  setFormData({ ...formData, testType: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>Blood Test</option>
                <option>Urine Test</option>
                <option>X-Ray</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>Normal</option>
                <option>Urgent</option>
                <option>Emergency</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Instructions
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
              />
            </div>
          </form>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {type.charAt(0).toUpperCase() + type.slice(1)} Details
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {renderContent()}

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
