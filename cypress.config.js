const { defineConfig } = require("cypress")
const cucumber = require("cypress-cucumber-preprocessor").default
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
// import allureWriter from "@shelex/cypress-allure-plugin/writer"

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    videosFolder: 'cypress/videos', // Specify the folder for video storage
    screenshotsFolder: 'cypress/screenshots', // Specify the folder for screenshots storage
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
      allureWriter(on, config)
      // Cypress 13 configuration options
      config.defaultCommandTimeout = 45000
      config.pageLoadTimeout = 45000
      config.responseTimeout = 45000
      config.baseUrl = "https://www.djaksport.com/"
      config.chromeWebSecurity = false
      config.viewportWidth = 1920
      config.viewportHeight = 1080

      // Enable screenshot on run failure and video recording
      config.screenshotOnRunFailure = true
      config.video = true

      // Disable watching for file changes
      config.watchForFileChanges = false
      return config
    },
  },
})