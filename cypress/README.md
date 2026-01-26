# Cypress Testing Documentation

## Overview
This project uses Cypress for end-to-end testing of the portfolio website. The tests verify functionality, UI components, navigation, and user interactions.

## Test Structure

### Test Suites
1. **Website Availability Check** - Verifies site is accessible and loads correctly
2. **Header and Navigation Check** - Tests navigation menu, social links, and profile display
3. **Theme Toggle Functionality** - Validates dark/light mode switching
4. **Skills Section Check** - Tests skill tabs and content switching
5. **Hero Section Check** - Verifies hero content and call-to-action buttons
6. **Facts Section Check** - Tests counter displays
7. **Resume Section Check** - Validates resume content and download functionality
8. **Testimonials Section Check** - Tests testimonial slider
9. **Footer Check** - Verifies footer content and links

## Running Tests

### Local Testing

#### Interactive Mode (Recommended for Development)
```bash
npm run test:open
```
Opens the Cypress Test Runner for interactive test execution and debugging.

#### Headless Mode
```bash
npm run test:headless
```
Runs all tests in headless mode with mochawesome reporting.

#### Headed Mode
```bash
npm run test:headed
```
Runs tests with the browser visible (useful for debugging).

### CI/CD Testing
Tests automatically run in GitHub Actions after successful page deployment:
```bash
npm test
```
This command includes Cypress Dashboard recording for test analytics.

## Test Configuration

### Cypress Config (`cypress.config.js`)
- **Base URL**: https://adminvns.github.io
- **Viewport**: 1280x720 (Desktop)
- **Video Recording**: Enabled
- **Screenshots**: Enabled on failure
- **Command Timeout**: 10 seconds
- **Page Load Timeout**: 30 seconds

### Reporter
- **Reporter**: Mochawesome
- **Report Directory**: `mochawesome-report/`
- **Features**: Charts, embedded screenshots, inline assets

## Test Coverage

### Current Coverage
- ✅ Site availability (HTTP 200 response)
- ✅ Page title and meta information
- ✅ Main section rendering (Hero, About, Resume, Testimonials)
- ✅ Navigation menu functionality
- ✅ Social media links validation
- ✅ Theme toggle (dark/light mode)
- ✅ Skills section tabs and content
- ✅ Resume download functionality
- ✅ Testimonials slider
- ✅ Footer content and links

### Future Enhancements
- [ ] Mobile viewport testing
- [ ] Accessibility (a11y) testing
- [ ] Performance metrics
- [ ] Form validation (if contact form is added)
- [ ] Cross-browser testing (Firefox, Edge)
- [ ] Visual regression testing

## Writing New Tests

### Best Practices
1. Use descriptive test names that explain what is being tested
2. Group related tests in `describe` blocks
3. Use `beforeEach` for common setup
4. Prefer data attributes or IDs over CSS classes for selectors
5. Keep tests independent and isolated
6. Use custom commands for repeated actions

### Example Test
```javascript
describe('New Feature Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display the new feature', () => {
    cy.get('#new-feature').should('be.visible')
    cy.get('#new-feature').should('contain', 'Expected Text')
  })
})
```

## Debugging Tests

### Using Cypress Test Runner
1. Run `npm run test:open`
2. Click on the test file to run
3. Use the time-travel feature to inspect each step
4. Check the browser console for errors

### Screenshots and Videos
- Screenshots are automatically captured on test failures
- Videos are recorded for all test runs
- Find them in `cypress/screenshots/` and `cypress/videos/`

## CI/CD Integration

### GitHub Actions Workflow
The Cypress tests run automatically after successful GitHub Pages deployment:
- Triggered by: `pages-build-deployment` workflow completion
- Runner: Windows Latest
- Browser: Chrome
- Reporting: Mochawesome + Cypress Dashboard

### Viewing Test Results
1. **GitHub Actions**: Check the workflow run for test status
2. **Cypress Dashboard**: View detailed test analytics (requires Cypress Cloud)
3. **Artifacts**: Download mochawesome reports from GitHub Actions artifacts

## Troubleshooting

### Common Issues

#### Tests timing out
- Increase timeout in `cypress.config.js`
- Check network connectivity
- Verify site is accessible

#### Element not found
- Verify selector is correct
- Check if element is hidden or not rendered
- Use `cy.wait()` if element loads asynchronously

#### Flaky tests
- Add explicit waits for dynamic content
- Use `cy.intercept()` to stub network requests
- Ensure tests are independent

## Dependencies
- `cypress`: ^13.10.0
- `cypress-xpath`: ^1.8.0
- `mochawesome`: ^7.1.3

## Support
For issues or questions about the tests, please open an issue on GitHub.
