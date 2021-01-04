class filterLaptops {
  constructor() {
    /* Locators */
    /* Manufacturers */
    this.manufacturerTable = '.sc-1n7ydz7-3 >'
    this.checkbox = '[type="checkbox"]'
    this.tag = '.sc-9bei5y-2 > :nth-child(1) > .sc-14xgdc2-0 > .sc-1oodwne-0 > .sc-1oodwne-1'
    this.listingContainer = '#listing-container >'
    this.title = '.sc-1x6crnh-5'
    /* Price */
    this.minPrice = '.sc-1omhi64-1 > .sc-1c6me8i-0 > :nth-child(1) > .sc-1c6me8i-3 > .sc-13rzjau-2'
    this.price = '.u7xnnm-4'
  }

  selectRandomManufacturer() {
    //check if whole content is visible
    cy.get(this.manufacturerTable)
      .its('length')
      .then((len) => {
        cy.get(`.sc-1n7ydz7-3 > :nth-child(${len})`).then((lastElement) => {
          if (lastElement.prop('localName') === 'button') {
            cy.get(lastElement).click()
          }
        })
        // select random
        cy.get(this.manufacturerTable)
          .find(this.checkbox)
          .its('length')
          .then((len) => {
            const random = Math.floor(Math.random() * len)
            cy.get(`.sc-1n7ydz7-3 > :nth-child(${random + 2}) > .cs8ibv-2 > .sc-1sjec7y-3 > .sc-3qnozx-3 > .sc-1sjec7y-0 > .sc-1sjec7y-1`)
              .invoke('text')
              .then((manufacturer) => {
                Cypress.env('selectedManufacturer', manufacturer)
              })
            cy.get(this.manufacturerTable).find(this.checkbox).eq(random).click({ force: true })
            //check tag
            cy.get(this.tag)
              .invoke('text')
              .then((text) => {
                expect(text).to.be.eq(Cypress.env('selectedManufacturer').trim())
              })
              //check if a random laptop from container has correct name
              .then(() => {
                cy.reload()
                this.selectRandomLaptop()
                cy.get(this.title).should('include.text', Cypress.env('selectedManufacturer').trim())
              })
          })
      })
  }

  filterByPrice() {
    const randomMinPrice = Math.floor(Math.random() * 10000 + 10000)
    cy.visit(`${Cypress.env('baseUrl')}?f[price][from]=${randomMinPrice}`)
    this.selectRandomLaptop()
    cy.get(this.price)
      .invoke('text')
      .then((price) => {
        const convertPrice = parseInt(price.replace(/\s/g, ''))
        expect(convertPrice).not.to.be.lessThan(parseInt(randomMinPrice))
      })
  }

  selectRandomLaptop() {
    cy.get(this.listingContainer)
      .its('length')
      .then((listLen) => {
        const randomList = Math.floor(Math.random() * listLen)
        cy.get(this.listingContainer).eq(randomList).click()
      })
  }
}

export default new filterLaptops()
