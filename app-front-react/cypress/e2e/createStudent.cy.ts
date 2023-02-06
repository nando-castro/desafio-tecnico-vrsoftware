const studentName = Math.random();

describe("Create Student", () => {
  it("should choice and create student", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".student").click();
    cy.contains("Adicionar Aluno").click();
    cy.get("input[type=text]").type(`${studentName}`);
    cy.contains("Cadastrar Aluno").click();

    cy.url().should("equal", "http://localhost:5173/");
  });
});
