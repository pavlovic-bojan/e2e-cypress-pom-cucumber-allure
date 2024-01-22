import elements from '../../../fixtures/elements.json'
import user from '../../../fixtures/user.json'

class LoginPage {

    validateLoginPage(){
        cy.title().should('eq', elements.LoginPageTitle)
        cy.title().then((pageTitle) => {
            // Using Cypress log to print to the Cypress Command Log
            cy.log('Page Title:', pageTitle)
          
            // Alternatively, you can use console.log to print to the browser console
            console.log('Page Title:', pageTitle)
          })
        return this
    }

    enterUsername(){
        cy.get(elements.LoginUsernamePath).clear().type(user.email)
        return this
    }

    enterPassword(){
        cy.get(elements.LoginPasswordPath).clear().type(user.password)
        return this
    }

    clickOnLoginButton(){
        cy.get(elements.LoginButtonPath).click()
        return this
    }

    validateUserFullNameIsLoggedIn(){
        cy.get(elements.UserFullNamePath).should('be.visible')
        cy.get(elements.UserFullNamePath).should('contain', user.name + ' ' + user.lastName)
        return this
    }

    emailErrorMassageIsVisible(){
        cy.get(elements.LoginEmailErrorPath).should('be.visible')
        return this
    }

    passwordErrorMassageIsVisible(){
        cy.get(elements.LoginPasswordErrorPath).should('be.visible')
        return this
    }
}
const loginPage = new LoginPage()
export default loginPage