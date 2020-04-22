import {Email, Inbox} from 'mailslurp-client/dist/generated';

const {
  When,
  Then
} = require('cypress-cucumber-preprocessor/steps');

const DEFAULT_PASSWORD = 'test1234';

const inboxes: any[] = [];

const registerWithEmail = (inbox: Inbox) => {
  inboxes.push(inbox);
  cy.log('Generated email address', inbox.emailAddress);
  cy.get('[role="button"]').contains('Use email instead').click();
  cy.wait(1000);
  cy.get('[name="email"]').type(
    inbox.emailAddress as string,
    {force: true}
  );
  cy.wait(1000);
  cy.get('[role="button"]').contains('Next').click();
  cy.get('[role="button"]').contains('Next').click();
  cy.wait(1000);
  cy.get('[role="button"]').contains('Sign up').click();
  cy.wrap((cy as any).waitForLatestEmail(inbox.id).then(supplyVerificationCodeAndPassword));
};

const supplyVerificationCodeAndPassword = (email: Email) => {
  const code = email.subject?.substr(0,6);
  cy.log('Validation code', code);
  cy.get('[name="verfication_code"]').type(
    code as string,
    {force: true}
  );
  cy.wait(1000);
  cy.get('[role="button"]').contains('Next').click();
  cy.get('[name="password"]').type(
    DEFAULT_PASSWORD,
    {force: true}
  );
  cy.wait(1000);
  cy.get('[role="button"]').contains('Next').click();
  cy.contains('Skip for now').click();
  cy.contains('Skip for now').click();
};

When('(he )opens the account registration form', () => {
  cy.get('[role="button"]').contains('Sign up').click();
});

Then('(he )enters his full name {string}', (fullName: string) => {
  cy.get('[name="name"]').type(fullName);
});

Then('(he )completes the registration with his email address', () => {
  cy.wrap((cy as any).newEmailAddress().then(registerWithEmail));
});

