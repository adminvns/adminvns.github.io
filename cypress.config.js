const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1of8yz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://adminvns.github.io',
    // baseUrl: 'http://localhost:5500',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
  },
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": false,
    "charts": true,
    "reportPageTitle": "Shubham Portfolio - Cypress Test Report",
    "embeddedScreenshots": true,
    "inlineAssets": true
  }
});
