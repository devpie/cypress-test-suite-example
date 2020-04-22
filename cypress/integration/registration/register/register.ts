import {Then, When} from 'cypress-cucumber-preprocessor/steps';
import {registerWithEmail} from './functions';

When('(he )opens the account registration form', () => {
  cy.get('[role="button"]').contains('Sign up').click();
});

Then('(he )enters his full name {string}', (fullName: string) => {
  cy.get('[name="name"]').type(fullName);
});

Then('(he )completes the registration with his email address', () => {
  cy.wrap((cy as any).newEmailAddress().then(registerWithEmail));
});

