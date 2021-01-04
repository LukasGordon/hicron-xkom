class Helpers {
  constructor() {
    /* Locators */
    /* URLs */
  }

  // add stable wait in ms and wait for page to load
  guard(waitTime) {
    cy.wait(waitTime)
    cy.document().its('readyState').should('eq', 'complete')
  }
}

export default new Helpers()
