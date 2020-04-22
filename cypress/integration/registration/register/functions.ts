import {Email, Inbox} from 'mailslurp-client/dist/generated';
import {clickButton} from '../../common/common';

const DEFAULT_PASSWORD = 'test1234';

export const registerWithEmail = (inbox: Inbox) => {
  cy.log('Generated email address', inbox.emailAddress);
  clickButton('Use email instead');
  // it would be better to wait i.e. for a specific xhr, but we don't know the platform well enough
  cy.wait(1000);
  cy.get('[name="email"]').type(
    inbox.emailAddress as string,
    {force: true}
  );
  // it would be better to wait i.e. for a specific xhr, but we don't know the platform well enough
  cy.wait(1000);
  clickButton('Next');
  clickButton('Next');
  clickButton('Sign up');
  cy.wrap((cy as any).waitForLatestEmail(inbox.id).then(supplyVerificationCodeAndPassword));
};

const supplyVerificationCodeAndPassword = (email: Email) => {
  const code = email.subject?.substr(0,6);
  cy.log('Validation code', code);
  cy.get('[name="verfication_code"]').type(
    code as string,
    {force: true}
  );
  clickButton('Next');
  cy.get('[name="password"]').type(
    DEFAULT_PASSWORD,
    {force: true}
  );
  // it would be better to wait i.e. for a specific xhr, but we don't know the platform well enough
  cy.wait(1000);
  clickButton('Next');
  // it would be better to wait i.e. for a specific xhr, but we don't know the platform well enough
  cy.wait(1000);
  clickButton('Skip for now');
  // it would be better to wait i.e. for a specific xhr, but we don't know the platform well enough
  cy.wait(1000);
  clickButton('Skip for now');
};
