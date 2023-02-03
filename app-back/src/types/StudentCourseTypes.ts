export interface IStudentCourse {
    id: number;
    studentId: number;
    courseId: number;
    createdAt: string;
    updatedAt: string;
}

export type TypeStudentCourse = Omit<IStudentCourse, "id" | "createdAt" | "updatedAt">;