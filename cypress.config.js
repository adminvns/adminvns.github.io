const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '${{ secrets.CYPRESS_PROJECT_KEY }}',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
