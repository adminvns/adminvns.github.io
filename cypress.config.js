const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1of8yz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
