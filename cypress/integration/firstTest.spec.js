/// <reference types="cypress" />

describe('our first suite', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by tag name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        // by class name
        cy.get('.input-full-width')

        // by attribute name
        cy.get('[placeholder]')

        //by attribute name and value
        cy.get('[placeholder="Email"]')

        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by tag name and attribute with value
        cy.get('input [placeholder="Email"]')

        //the most recommended way by cypress
        cy.get('[data-cy="imputEmail1"]')



    })
})