require('cypress-xpath')

// Website Availability and Component Testing
describe('Website Availability Check', () => {
  it('Should return 200 status code', async function () {
    try {
      const response = await cy.request({
        method: 'GET',
        url: '/',
      });

      // Verify successful response
      expect(response.status).to.eq(200);
    } catch (error) {
      throw new Error(`Failed to fetch website: ${error.message}`);
    }
  })

  it('Should have correct page title', () => {
    cy.visit('/')
    cy.title().should('include', 'Shubham Singh')
    cy.title().should('include', 'Senior QA Automation')
  })

  it('Should load main sections', () => {
    cy.visit('/')
    cy.get('#hero').should('be.visible')
    cy.get('#about').should('exist')
    cy.get('#resume').should('exist')
    cy.get('#testimonials').should('exist')
  })
})

// Header and Navigation Testing
describe('Header and Navigation Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display profile information', () => {
    cy.get('#header .profile').should('be.visible')
    cy.get('#header .profile img').should('have.attr', 'src', 'assets/img/profile-pic.png')
    cy.get('#header .profile h1').should('contain', 'Shubham Singh')
  })

  it('Should have working social links', () => {
    // LinkedIn link
    cy.xpath(`//header[@id="header"]//a[@class='linkedin']`)
      .should('have.attr', 'href', 'https://www.linkedin.com/in/adminvns/')
      .should('have.attr', 'target', '_blank')

    // GitHub link
    cy.xpath(`//header[@id="header"]//a[@class='twitter']`)
      .should('have.attr', 'href', 'https://github.com/adminvns')
      .should('have.attr', 'target', '_blank')

    // Buy me a coffee link
    cy.get('#header .social-links a.coffee')
      .should('have.attr', 'href', 'https://buymeacoffee.com/adminvns')
      .should('have.attr', 'target', '_blank')
  })

  it('Should have all navigation menu items', () => {
    cy.get('#navbar .nav-link').should('have.length.at.least', 5)
    cy.get('#navbar').should('contain', 'Home')
    cy.get('#navbar').should('contain', 'About')
    cy.get('#navbar').should('contain', 'Live Resume')
    cy.get('#navbar').should('contain', 'Recommendations')
    cy.get('#navbar').should('contain', 'Download Resume')
  })

  it('Should have download resume link', () => {
    cy.get('#navbar a[href*="Shubham_Automation_QA.pdf"]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', 'Shubham_Automation_QA.pdf')
  })
})

// Theme Toggle Testing
describe('Theme Toggle Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should have theme toggle switch', () => {
    cy.get('.theme-switch-wrapper').should('be.visible')
    cy.get('.theme-switch input[type="checkbox"]').should('exist')
  })

  it('Should toggle dark mode', () => {
    cy.get('body').then($body => {
      const initialHasDarkMode = $body.hasClass('dark-mode')

      // Click the toggle
      cy.get('.theme-switch input[type="checkbox"]').click({ force: true })

      // Verify the class changed
      cy.get('body').should($newBody => {
        const nowHasDarkMode = $newBody.hasClass('dark-mode')
        expect(nowHasDarkMode).to.not.equal(initialHasDarkMode)
      })
    })
  })
})

// Skills Section Testing
describe('Skills Section Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display skills tabs', () => {
    cy.get('#skills .tab-btn').should('have.length', 3)
    cy.get('#skills .tab-btn[data-tab="automation"]').should('contain', 'Automation')
    cy.get('#skills .tab-btn[data-tab="devops"]').should('contain', 'CI/CD')
    cy.get('#skills .tab-btn[data-tab="cloud"]').should('contain', 'Cloud')
  })

  it('Should switch between skill tabs', () => {
    // Click on DevOps tab
    cy.get('#skills .tab-btn[data-tab="devops"]').click()
    cy.get('#skills .tab-btn[data-tab="devops"]').should('have.class', 'active')
    cy.get('#devops').should('have.class', 'active')

    // Click on Cloud tab
    cy.get('#skills .tab-btn[data-tab="cloud"]').click()
    cy.get('#skills .tab-btn[data-tab="cloud"]').should('have.class', 'active')
    cy.get('#cloud').should('have.class', 'active')
  })

  it('Should display skill cards in automation tab', () => {
    cy.get('#automation .skill-card').should('have.length.at.least', 4)
    cy.get('#automation').should('contain', 'Cypress')
    cy.get('#automation').should('contain', 'Tosca')
    cy.get('#automation').should('contain', 'Playwright')
    cy.get('#automation').should('contain', 'Selenium')
  })
})

// Hero Section Testing
describe('Hero Section Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display hero content', () => {
    cy.get('#hero .hero-container').should('be.visible')
    cy.get('#hero h1').should('contain', 'Shubham')
  })

  it('Should have hero buttons with icons', () => {
    // LinkedIn icon button
    cy.get('#hero .btn-hero-icon').eq(0)
      .should('have.attr', 'href', 'https://www.linkedin.com/in/adminvns/')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'title', 'LinkedIn Profile')

    // GitHub icon button
    cy.get('#hero .btn-hero-icon').eq(1)
      .should('have.attr', 'href', 'https://github.com/adminvns')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'title', 'GitHub Profile')

    // View Resume button
    cy.get('#hero .btn-hero').should('contain', 'View Resume')
      .should('have.attr', 'href', '#resume')
  })
})

// Facts Section Testing
describe('Facts Section Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display fact counters', () => {
    cy.get('#facts .count-box').should('have.length', 4)
    cy.get('#facts').should('contain', 'Positive Reviews')
    cy.get('#facts').should('contain', 'Robust Projects')
    cy.get('#facts').should('contain', 'Frameworks Built')
    cy.get('#facts').should('contain', 'Expert Certifications')
  })
})

// Resume Section Testing
describe('Resume Section Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display resume sections', () => {
    cy.get('#resume .resume-title').should('have.length.at.least', 3)
    cy.get('#resume').should('contain', 'Summary')
    cy.get('#resume').should('contain', 'Education')
    cy.get('#resume').should('contain', 'Professional Experience')
  })

  it('Should have download resume button', () => {
    cy.get('#resume .btn-download-resume')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', 'Shubham_Automation_QA.pdf')
  })

  it('Should display work experience', () => {
    cy.get('#resume').should('contain', 'GlobalLogic')
    cy.get('#resume').should('contain', 'Cloud Analogy')
    cy.get('#resume').should('contain', 'Senior Automation Developer')
  })
})

// Testimonials Section Testing
describe('Testimonials Section Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display testimonials slider', () => {
    cy.get('#testimonials .testimonials-slider').should('exist')
    cy.get('#testimonials .swiper-slide').should('have.length.at.least', 3)
  })

  it('Should have testimonial content', () => {
    cy.get('#testimonials .testimonial-item').should('exist')
    cy.get('#testimonials .testimonial-img').should('exist')
  })
})

// Footer Testing
describe('Footer Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display footer content', () => {
    cy.get('#footer').should('be.visible')
    cy.get('#footer').should('contain', 'Github')
    cy.get('#footer a[href*="buymeacoffee"]').should('exist')
  })

  it('Should have back to top button', () => {
    cy.get('.back-to-top').should('exist')
  })
})



