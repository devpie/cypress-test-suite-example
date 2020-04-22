import {Then, When} from 'cypress-cucumber-preprocessor/steps';
import {getSubMenuButton, getTabButton} from '../../common/common';
import {changeSetting} from './functions';

When('(he )goes to his account settings', () => {
  getSubMenuButton('AppTabBar_More_Menu')
    .should('be.visible')
    .click();
  getSubMenuButton('settings')
    .should('be.visible')
    .click();
  getTabButton('Account')
    .should('be.visible')
    .click();
});

Then('(he )changes his settings successfully to the following:', (dataTable: any) => {
  dataTable
    .rows()
    .forEach(changeSetting);
});

