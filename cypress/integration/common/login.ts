import {getMenuButton} from './common';

export const supplyUsernameAndPassword = () => {
  const loginUser = Cypress.env('LOGIN_USER');
  const loginPassword = Cypress.env('LOGIN_PASSWORD');
  cy.get('input[name="session[username_or_email]"]').first().type(loginUser, {force: true});
  cy.get('input[name="session[password]"]').first().type(loginPassword, {force: true});
};

export const isLoggedIn = () => {
  cy.reload();
  getMenuButton('Profile')
    .should('be.visible')
    .click();
  const fullName = Cypress.env('LOGIN_FULL_NAME');
  cy.get('main').should('contain', fullName);
};
