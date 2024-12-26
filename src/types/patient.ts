export type ActionType = 'vaccine' | 'followup' | 'lab';
export type ActionStatus = 'overdue' | 'pending' | 'completed';

export interface ImmediateAction {
  id: string;
  type: ActionType;
  status: ActionStatus;
  dueDate: string;
  description: string;
}

export interface Patient {
  id: string;
  patientName: string;
  contact: string;
  parent: string;
  immediateActions: ImmediateAction[];
}