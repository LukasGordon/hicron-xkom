![HICRON](https://bulldogjob.pl/system/companies/logos/000/000/236/original/Hicron_Primary_Logotype_RGB.jpg)

# e2e tests

### What is this repository for?

- Test Suite to cover end to end tests of the x-kom project. Executing tests and asserting results in order to reveal any existing issues.
- Tests are based on Cypress.io `node.js`. Write tests in Java Script or TypeScript, run them and view results. The ability for cross-browser testing.

### How do I get set up?

- Installation
  `npm install`
- How to run tests
  - Using command `npx cypress open` - open UI and you can select any browser and test spec file
  - Using command `npx cypress run --browser: yourBrowser --spec '/integration/yourTest.spec'` - run specific test in headless mode and selected browser
- Documentation
  https://docs.cypress.io/
