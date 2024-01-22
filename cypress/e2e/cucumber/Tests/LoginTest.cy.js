import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import user from '../../../fixtures/user.json'
import homePage from "../Pages/HomePage.cy"
import loginPage from "../Pages/LoginPage.cy"

Given('the User is on the home page', () => {
    homePage.navigateToURL()
})

When('the User is on the home page', () => {
    homePage.navigateToURL()
})

Then('validate that the user is on the home page', () => {
    homePage.validateHomePage()
})

When('the User is on the login page', () => {
    homePage.navigateToURL()
    homePage.clickOnLoginLink()
})

Then('validate that the user is on the login page', () => {
    loginPage.validateLoginPage()
})

And('the User inserts the UserName', () => {
    loginPage.enterUsername()
})

And('the User inserts the Password', () => {
    loginPage.enterPassword()
})

And('the User clicks on the login button', () => {
    loginPage.clickOnLoginButton()
})

Then('the User logged in', () => {
    loginPage.validateUserFullNameIsLoggedIn()
})

And('the User inserts {string}', (invalidUserName) => {
    loginPage.enterUsername(invalidUserName)
})

And('the User inserts {string}', (invalidPassword) => {
    loginPage.enterPassword(invalidPassword)
})

Then('the password error message is visible', () => {
    loginPage.passwordErrorMassageIsVisible()
})
