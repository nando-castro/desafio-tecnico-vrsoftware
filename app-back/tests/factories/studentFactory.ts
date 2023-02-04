import { faker } from "@faker-js/faker";

async function createStudent() {
    return {
        name: faker.name.firstName()
    };
}

const studentFactory = {
    createStudent,
};

export default studentFactory;