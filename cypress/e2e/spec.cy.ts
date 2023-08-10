const url: string = 'https://front.miraden.test'

describe('Home page', () => {
  it('passes', () => {
    cy.visit(url)
  })
})

describe('Leads page', () => {
  it('passes', () => {
    cy.visit(url + '/leads')
    cy.get('.LeadsList > li')
  })
})

describe('My leads', () => {
  it('passes', () => {
    cy.visit(url + '/leads/my')
    cy.contains('Session expired or invalid token')
  })
})
