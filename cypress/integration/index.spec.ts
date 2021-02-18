describe("Home page", () => {
  it("Should visit the home page", () => {
    cy.visit("/");
    cy.dataCy("logo");
  });
});
