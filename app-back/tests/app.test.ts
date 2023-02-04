import supertest from "supertest";
import app from "../src";
import client from "../src/databases/database"
import studentFactory from "./factories/studentFactory";

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "students" CASCADE`;
    await client.$executeRaw`TRUNCATE TABLE "courses" CASCADE`;
    await client.$executeRaw`TRUNCATE TABLE "enrollments" CASCADE`;
});

beforeAll(async () => {
    await client.$disconnect();
});

describe("Test the GET /students route", () => {
    it("Should return 200 and a list students.", async () => {
        const result = await supertest(app).get(`/students`);

        expect(result.status).toBe(200);
        expect(result.body).not.toBeNull();
    });
});

describe("Test the POST /student route", () => {
    it("Should return 201 if student is registered in the correct format.", async () => {
        const studentRegister = await studentFactory.createStudent();

        const result = await supertest(app).post(`/student`).send(studentRegister);

        const createStudent = await client.student.findFirst({
            where: { name: studentRegister.name }
        });

        expect(result.status).toBe(201);
        expect(createStudent).not.toBeNull();
    });
});

describe("Test the POST /student route", () => {
    it("Should return 409 if student is registered exists.", async () => {
        const studentRegister = await studentFactory.createStudent();

        await supertest(app).post(`/student`).send(studentRegister);
        const result = await supertest(app).post(`/student`).send(studentRegister);

        expect(result.status).toBe(409);
    });
});

describe("Test the DELETE /student/:id route", () => {
    it("Should return 404 if student not found.", async () => {
        const studentRegister = await studentFactory.createStudent();

        await supertest(app).post(`/student`).send(studentRegister);

        const result = await supertest(app).delete(`/student/${0}`);
        
        expect(result.status).toBe(404);
    });
});