const courseName = Math.random();

describe("Create Course", () => {
    it("should choice and create course", () => {
      cy.visit("http://localhost:5173/");
      cy.get(".course").click();
      cy.contains("Adicionar Curso").click();
      cy.get("input[type=text]").type(`${courseName}`);
      cy.get("textarea").type(`${courseName}`);
      cy.contains("Cadastrar Curso").click();
  
      cy.url().should("equal", "http://localhost:5173/");
    });
  });
  