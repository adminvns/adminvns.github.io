require('cypress-xpath')


//site-avaialblity testing

describe('Website Check', () => {



  it('Site Online Check', () => {
    cy.visit('https://adminvns.github.io/')
  })

  it('Title Check', () => {
    cy.title().should('include', 'Resume')
  })
  

})



//Side-menu link testing


describe('SideMenu Check', () => {



 
  it('LinkedIn link Check', () => {
    cy.xpath('//header[@id="header"]/div/div/div/a[1]').should('have.attr', 'href', 'https://www.linkedin.com/in/adminvns/')
  })

  it('Github linkCheck', () => {
    cy.xpath('//header[@id="header"]/div/div/div/a[2]').should('have.attr', 'href', 'https://github.com/adminvns')
  })

  it('Instagram link Check', () => {
    cy.xpath('//header[@id="header"]/div/div/div/a[3]').should('have.attr', 'href', 'https://www.instagram.com/shubham_admin/')
  })

  it('Github link Check', () => {
    cy.xpath('//header[@id="header"]/div/div/div/a[4]').should('have.attr', 'href', 'skype:live:shubham.editor?chat')
  })

})