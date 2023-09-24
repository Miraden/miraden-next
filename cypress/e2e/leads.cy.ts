import { TestUser as User } from '../support/commands'
import * as querystring from 'querystring'

describe('List', () => {
  const checkList = () => {
    cy.visit('/leads')
    cy.intercept('GET', Cypress.env('API_HOST') + '/leads').as('Leads')

    cy.wait('@Leads')
    cy.get('.LeadsList > li')
  }

  it('Anon user', () => {
    checkList()
  })

  it('Auth user', () => {
    cy.loginUI(User.email, User.password)
    checkList()
  })

  it('Bad token', () => {
    cy.badToken('bad_token')
    checkList()
  })
})

describe('My', () => {
  const url = Cypress.env('API_HOST') + '/leads/my'

  beforeEach(() => {
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    cy.clearAllSessionStorage()

    cy.intercept(url + '*', { middleware: true }, req => {
      req.on('before:response', res => {
        // force all API responses to not be cached
        res.headers['cache-control'] = 'no-store'
      })
    })
  })
  const gotToNextLink = () => {
    cy.get('.TabsMenu__links-items').as('Links')
    cy.get('@Links').find('Button').not('.active').first().as('Button')
    cy.get('@Button').click()
  }

  it('Anon user', () => {
    cy.intercept('GET', Cypress.env('API_HOST') + '/leads/my').as('MyLeads')

    {
      // all
      cy.visit('/leads/my')
      cy.contains('Session expired or invalid token')
    }

    {
      // published
      gotToNextLink()
      cy.wait('@MyLeads').its('response.statusCode').should('eq', 401)
      cy.contains('Session expired or invalid token')
    }

    {
      // archived
      gotToNextLink()
      cy.wait('@MyLeads').its('response.statusCode').should('eq', 401)
      cy.contains('Session expired or invalid token')
    }
  })

  it('Auth user', () => {
    cy.loginUI('test@email.com', '654321')
    cy.intercept('/').as('Home').wait('@Home')

    cy.intercept('GET', Cypress.env('API_HOST') + '/leads/my').as('MyLeads')
    {
      // all
      cy.visit('/leads/my')
      cy.get('.LeadsList > li')
    }

    {
      // published
      gotToNextLink()
      cy.wait('@MyLeads').its('response.statusCode').should('eq', 200)
      cy.get('.LeadsList > li')
    }

    {
      // archived
      gotToNextLink()
      cy.wait('@MyLeads').its('response.statusCode').should('eq', 200)
      cy.get('.LeadsList > li')
    }
  })

  it('Bad token', () => {
    cy.badToken('bad_token')
    cy.intercept('GET', Cypress.env('API_HOST') + '/leads/my').as('MyLeads')

    {
      // all
      cy.visit('/leads/my')
      cy.contains('Session expired or invalid token')
    }

    {
      // published
      gotToNextLink()
      cy.wait('@MyLeads').its('response.statusCode').should('eq', 401)
      cy.contains('Session expired or invalid token')
    }

    {
      // archived
      gotToNextLink()
      cy.wait('@MyLeads').its('response.statusCode').should('eq', 401)
      cy.contains('Session expired or invalid token')
    }
  })
})
