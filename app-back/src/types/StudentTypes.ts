export interface IStudent {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export type TypeStudent = Omit<IStudent, "id" | "createdAt" | "updatedAt">;