import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    API_HOST: 'https://miraden-freelance.test/v1'
  },
  e2e: {
    baseUrl: 'https://front.miraden.test',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
