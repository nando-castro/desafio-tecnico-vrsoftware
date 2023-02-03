export interface ICourse {
    id: number;
    description: string;
    course_content: string;
    createdAt: string;
    updatedAt: string;
}

export type TypeCourse = Omit<ICourse, "id" | "createdAt" | "updatedAt">;