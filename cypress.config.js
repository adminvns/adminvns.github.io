const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c1bc6f85',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
