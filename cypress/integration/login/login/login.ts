import {Then, When} from 'cypress-cucumber-preprocessor/steps';
import {clickButton} from '../../common/common';
import {supplyUsernameAndPassword, isLoggedIn} from '../../common/login';

When('(he )clicks on the {string} button', clickButton);

When('supplies his email address and password', supplyUsernameAndPassword);

Then('(he )is logged in', isLoggedIn);
