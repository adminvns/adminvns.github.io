require('cypress-xpath')
//site-avaialblity testing


// describe('Website Availibilty ', function () {
//   it('Should test API response', function () {
//     // Make an HTTP request to the API
//     cy.request({
//       method: 'GET',
//       url: 'https://adminvns.github.io/', // Replace with your API URL
//     }).then((response) => {
//       // Assertions on the response
//       expect(response.status).to.eq(200);
      
//       // Add more assertions as needed based on the API response structure
//     });
//   });
// });

//Checking Title of the website

describe('Website Component Check', () => {
  it('Site availability Test', async function () {
    try {
      // Make an HTTP request to the API using await
      const response = await cy.request({
        method: 'GET',
        url: 'https://adminvns.github.io/', // Replace with your API URL
      });

      // Assertions on the response
      expect(response.status).to.eq(200);
     // expect(response.body).to.have.property('data');
      // Add more assertions as needed based on the API response structure
    } catch (error) {
      // Handle any errors that may occur during the request
      throw new Error(`Failed to fetch API: ${error.message}`);
    }
      
      // Add more assertions as needed based on the API response structure
    })


  it('Title Check', () => {
    cy.visit('https://adminvns.github.io/')
    cy.title().should('include', 'Resume')
  })
  

})



//Side-menu link testing
describe('SideMenu Check', () => {
  beforeEach(() => {
    cy.visit('https://adminvns.github.io/')
    // Perform any common setup tasks needed before each test
  })

  it('LinkedIn link Check', () => {
    cy.xpath(`//header[@id="header"]//a[@class='linkedin']`).should('have.attr', 'href', 'https://www.linkedin.com/in/adminvns/')
  })

  it('Github link Check', () => {
    cy.xpath(`//header[@id="header"]//a[@class='twitter']`).should('have.attr', 'href', 'https://github.com/adminvns')
  })

})



