import filterLaptops from '../../pages/categories/laptops'

describe('Test filter feature', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  it('Test filter by manufacturer', () => {
    filterLaptops.selectRandomManufacturer()
  })
  it('Test filter by price', () => {
    filterLaptops.filterByPrice()
  })
})
