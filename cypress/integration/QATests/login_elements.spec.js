/// <reference types="Cypress" />

context('Navigate to site', () => {
    beforeEach(() => {
      cy.visit('https://app.sysdigcloud.com/#/login')
    })

    describe('Login Page Elements Tests', () => {

        it('login page elements are present', () => {
          cy.get('div[class="login_kraken"]').should('be.visible')
          cy.get('div[class="reactsel__indicator reactsel__dropdown-indicator css-1x0oi0e-indicatorContainer"]').click()
          cy.get('input[type="email"]').should('be.visible')
          cy.get('input[type="password"]').should('be.visible')
          cy.get('button[type="submit"]').should('have.text', 'Log in\n')
          cy.get('a[data-test="link-forgot-password"]').should('be.visible').and('have.text', '        Forgot your password?\n')
          cy.get('div[class="block-login__separator"]').should('be.visible').and('have.text', '\n    Log in with:\n')
          cy.get('a[class="block-login__third-party-button"]').should('be.visible')
          cy.get('a[href="#/samlAuthentication"]').should('be.visible')
          cy.get('a[href="#/openIdAuthentication"]').should('be.visible')
          cy.get('div[class="login__notes"]').should('be.visible').and('have.text', '\nNot a customer?\n    \n        Sign up for a free trial!\n    \n')
          cy.get('a[class="login__link"]').should('be.visible').and('have.text', '\n        Sign up for a free trial!\n    ')
        })
    })
  })