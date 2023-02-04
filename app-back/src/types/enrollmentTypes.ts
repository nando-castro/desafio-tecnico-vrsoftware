export interface IEnrollment {
    id: number;
    studentId: number;
    courseId: number;
    createdAt: string;
    updatedAt: string;
}

export type TypeEnrollment = Omit<IEnrollment, "id" | "createdAt" | "updatedAt">;