/// <reference types="Cypress" />

context('Navigate to site', () => {
    beforeEach(() => {
      cy.visit('https://app.sysdigcloud.com/#/login')
    })

    describe('Navigation Tests', () => {
        
        it('should validate links navigation to expected pathname', () => {
          cy.get('a[data-test="link-forgot-password"]').click()
          cy.url().should('eq', 'https://app.sysdigcloud.com/#/forgotPassword')
          cy.go('back')
          cy.url().should('eq', 'https://app.sysdigcloud.com/#/login')

          cy.get('a[href="#/samlAuthentication"]').click()
          cy.url().should('eq', 'https://app.sysdigcloud.com/#/samlAuthentication')
          cy.go('back')
          cy.url().should('eq', 'https://app.sysdigcloud.com/#/login')

          cy.get('a[href="#/openIdAuthentication"]').click()
          cy.url().should('eq', 'https://app.sysdigcloud.com/#/openIdAuthentication')
          cy.go('back')
          cy.url().should('eq', 'https://app.sysdigcloud.com/#/login')

          cy.get('a[class="login__link"]').click()
          cy.url().should('eq', 'https://sysdig.com/company/start-free/')
          cy.go('back')
          cy.url().should('eq', 'https://app.sysdigcloud.com/#/login')
        
        })

        it('should validate links redirect to expected url', () => {
            cy.get('a[class="block-login__third-party-button"]').click()
            cy.url().should('include', 'https://accounts.google.com/')
            cy.go('back')
            cy.url().should('eq', 'https://app.sysdigcloud.com/#/login')
          })
    })
  })