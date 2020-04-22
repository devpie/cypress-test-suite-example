import {Given} from 'cypress-cucumber-preprocessor/steps';
import {isLoggedIn, supplyUsernameAndPassword} from './login';

beforeEach(() => {
  cy.server();
  cy.clearCookies();
});

Given('a user opens twitter.com registration page', () => {
  cy.visit('https://twitter.com/i/flow/signup');
  cy.wait(2000);
});

Given('a user opens twitter.com', () => {
  cy.visit('https://twitter.com/explore');
  cy.wait(2000);
});

Given('a user is logged in', () => {
  cy.visit('https://twitter.com/login');
  supplyUsernameAndPassword();
  clickButton('Log in');
  isLoggedIn();
});

export const clickButton = (buttonText: string) => {
  cy.contains('[role="button"]', buttonText).click();
};

export const getTabButton = (tabText: string) => {
  return cy.contains('[role="tab"]', tabText);
};

export const getMenuButton = (ariaLabel: string) => {
  return cy.get(`a[aria-label="${ariaLabel}"]`);
};

export const getSubMenuButton = (dataTestId: string) => {
  return cy.get(`[data-testid="${dataTestId}"]`);
};
