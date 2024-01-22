import elements from '../../../fixtures/elements.json'

class HomePage {

    navigateToURL(){
        cy.visit("https://www.djaksport.com/")
    }

    validateHomePage(){
        cy.title().should('eq', elements.HomePageTitle)
        cy.title().then((pageTitle) => {
            // Using Cypress log to print to the Cypress Command Log
            cy.log('Page Title:', pageTitle)
          
            // Alternatively, you can use console.log to print to the browser console
            console.log('Page Title:', pageTitle)
          })
        return this
    }

    clickOnLoginLink(){
        cy.get(elements.LoginLinkPath).click()
        return this
    }
}
const homePage = new HomePage()
export default homePage