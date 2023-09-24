import { mount } from 'cypress/react' // DONT REMOVE

declare global {
  namespace Cypress {
    interface InterceptProps {
      uri: string,
      method: string
      alias: string
    }
    interface Chainable {
      loginUI(email: string, password: string): Chainable<JQuery<HTMLElement>>
      loginApi(email: string, password: string): Chainable<JQuery<HTMLElement>>
      badToken(token: string) : Chainable<JQuery<HTMLElement>>
      waitApiServer(props: Cypress.InterceptProps): Chainable<JQuery<HTMLElement>>
    }
  }
}
