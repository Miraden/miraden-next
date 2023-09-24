beforeEach(() => {
  cy.clearAllSessionStorage()
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
})

const checkLeadsList = () => {
  cy.visit('/')
  cy.intercept('GET', Cypress.env('API_HOST') + '/leads/last').as(
    'getLastLeads'
  )
  cy.wait('@getLastLeads')

  cy.get('.Applications__list').scrollIntoView().should('be.visible')
  cy.get('.Applications__list > .LeadsList')

  cy.get('.Applications__tabs').as('tabs')
  cy.get('@tabs').find('Button').not('.active').as('NotActiveTab')
  cy.get('@NotActiveTab').click()

  cy.get('.Applications__list > .LeadsList').should('be.visible')
}

describe('Leads list', () => {
  it('Bad token', () => {
    window.localStorage.setItem('token', 'bad_token')
    cy.setCookie('token', 'bad_token')

    checkLeadsList()
  })

  it('anon user', () => {
    checkLeadsList()
  })

  it('auth user', () => {
    cy.loginUI('test@email.com', '654321')
    cy.intercept('/').as('Home')
    cy.wait('@Home')
    checkLeadsList()
  })
})
