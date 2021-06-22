describe("NavHome", () => {
    it("tests the navbar for broken links", () => {
        cy.visit("http://localhost:3000")

        cy.get('[data-cy=navSiteTitle]').click()

        cy.url().should('eq', 'http://localhost:3000/')
    })
})

describe("NavAllRecipes", () => {
    it("tests the navbar for broken links", () => {
        cy.visit("http://localhost:3000")

        cy.get('[data-cy=navViewAll]').click()

        cy.url().should('eq', 'http://localhost:3000/')
    })
})

describe("NavFavorites", () => {
    it("tests the navbar for broken links", () => {
        cy.visit("http://localhost:3000")

        cy.get('[data-cy=navFavorites]').click()

        cy.url().should('include', '/favorites')
    })
})

describe("NavAddRecipe", () => {
    it("tests the navbar for broken links", () => {
        cy.visit("http://localhost:3000")

        cy.get('[data-cy=navAddRecipe]').click()

        cy.url().should('include', '/addrecipe')
    })
})

describe("NavAbout", () => {
    it("tests the navbar for broken links", () => {
        cy.visit("http://localhost:3000")

        cy.get('[data-cy=navAbout]').click()

        cy.url().should('include', '/about')
    })
})

describe("NavLogIn", () => {
    it("tests the navbar for broken links", () => {
        cy.visit("http://localhost:3000")

        cy.get('[data-cy=navLogIn]').click()

        cy.url().should('include', '/login')
    })
})

describe("NavSignUp", () => {
    it("tests the navbar for broken links", () => {
        cy.visit("http://localhost:3000")

        cy.get('[data-cy=navSignUp]').click()

        cy.url().should('include', '/register')
    })
})