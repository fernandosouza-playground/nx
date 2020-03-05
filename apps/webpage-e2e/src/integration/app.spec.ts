import { getGreeting, getEmail } from '../support/app.po';

describe('webpage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to webpage!');
  });

  it('should display email', () => {
    getEmail().type("ABC").should("have.value", "ABC");
  });

  it('should hide email', () => {
    getEmail().should("exist");
    cy.get('button').click();
    getEmail().should("not.exist");
  });
});
