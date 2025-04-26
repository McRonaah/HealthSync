
export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  email?: string;
  address: string;
  enrollmentDate: string;
  programs: Program[];
  medicalHistory?: MedicalRecord[];
}

export interface Program {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  status: 'active' | 'completed' | 'pending';
}

export interface MedicalRecord {
  id: string;
  date: string;
  type: string;
  notes: string;
  provider: string;
}
