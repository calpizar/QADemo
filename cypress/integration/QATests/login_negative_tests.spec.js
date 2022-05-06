/// <reference types="Cypress" /> 

context('Navigate to site', () => {
    beforeEach(() => {
      cy.visit('https://app.sysdigcloud.com/#/login')
    })

    describe('Login Negative Tests', () => {
      it('should display an error if username and password fields are blank', () => {
        cy.get('input[type="email"]').type(' ')
        cy.get('input[type="password"]').type(' ')
        cy.get('button[type="submit"]').click()
        expect($el).to.have.text('Please fill out this field.')
      })
      it('should display an error if username field is blank', () => {
        cy.get('input[type="email"]').type(' ')
        cy.get('input[type="password"]').type('test')
        cy.get('button[type="submit"]').click()
        expect($el).to.have.text('Please fill out this field.')
      })

      it('should display an error if password field is blank', () => {
      cy.get('input[type="email"]').type('fake@email.com')
      cy.get('input[type="password"]').type(' ')
      cy.get('button[type="submit"]').click()
      expect($el).to.have.text('Please fill out this field.')
    })

    it('should display an error if credentials are invalid', () => {
      cy.get('input[type="email"]').type('fake@email.com')
      cy.get('input[type="password"]').type(' ')
      cy.get('button[type="submit"]').click()
      expect($el).to.have.text('Credentials are not valid')
    })

    it('should display an error if username is not an email address', () => {
      cy.get('input[type="email"]').type('test')
      cy.get('input[type="password"]').type(' ')
      cy.get('button[type="submit"]').click()
      expect($el).to.have.text('Please include an')
    })
  })
})
