Cypress.Commands.add('loginApi', (email: string, password: string): void => {
  const data: string = new URLSearchParams({
    email: email,
    password: password,
  }).toString()

  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  cy.request({
    url: '/user/login',
    method: 'POST',
    body: data,
    headers: headers,
  })
})

export const TestUser = {
  email: 'test@email.com',
  password: '654321',
}

Cypress.Commands.add('loginUI', (email: string, password: string): void => {
  cy.visit('/user/login')
  cy.get('input[name="Login_form[email]"]').type(email)
  cy.get('input[name="Login_form[password]"]').type(password)
  cy.get('Button[type=submit]').click()
})

Cypress.Commands.add('badToken', (token: string): void => {
  window.localStorage.setItem('token', token)
  cy.setCookie('token', token)
})

Cypress.Commands.add('waitApiServer', (props: Cypress.InterceptProps): void => {
  const url = Cypress.env('API_HOST') + props.uri
  cy.intercept(props.method, url).as(props.alias)
  cy.wait('@' + props.alias)
})
