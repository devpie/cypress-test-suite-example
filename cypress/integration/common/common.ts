/// <reference types="cypress"/>
const {
  Given
} = require('cypress-cucumber-preprocessor/steps');

beforeEach(() => {
  cy.server();
  cy.clearCookies();
});

Given('a user opens twitter.com registration page', () => {
  cy.visit('https://twitter.com/i/flow/signup');
  cy.wait(2000);
});
