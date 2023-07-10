import { User, Session } from 'next-auth'

export type FormState = {
    name: string;
    age: number;
    appointment: string;
    bloodOxygen:number;
    bloodPressure:number;
    bmi:number;
    department:string;
    email:string;
    emergencyContact:string;
    generalCondition:string;
    height:number;
    medication:Array<string>;
    phone:number;
    pulse:number;
    status:string;
    temperature:number;
    weight:number;
    doctorId:number;
};

export interface PatientInterface {
    name:string;
    image: string;
    status: string;
    id: string;
    createdBy: {
      name: string;
      email: string;
      avatarUrl: string;
      id: string;
    };
}

export interface UserProfile {
    // doctors, nurses and management
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    patients: {
      edges: { node: PatientInterface }[];
      pageInfo: {
        hasPreviousAppointment: boolean;
        hasNextAppointment: boolean;
      };
    };
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface ConsultationForm {
  name: string;
  observation: string;
  image: string;
  lab: string;
  imaging: string;
  medication: string;
}