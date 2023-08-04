
require('cypress-xpath')
import '../support/commands'


it('Verify Login',()=>{
    cy.fixture("example").then((data)=>{
    cy.loginUser(data.username,data.password)
    cy.url().should('include','logged-in-successfully')
    })
})

