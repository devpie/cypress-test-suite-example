// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import addContext from 'mochawesome/addContext';
// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('test:after:run', (test, runnable) => {
  console.log('Adding imageurl');
  if (test.state === 'failed') {
    console.log('Really adding imageUrl')
    let item = runnable;
    const nameParts = [runnable.title];

    while (item.parent) {
      nameParts.unshift(item.parent.title);
      item = item.parent;
    }

    if (runnable.hookName) {
      nameParts.push(`${runnable.hookName} hook`);
    }

    const fullTestName = nameParts
      .filter(Boolean)
      .join(' -- ');

    const imageUrl = `screenshots/${
      Cypress.spec.name
    }/${fullTestName} (failed).png`;

    addContext({test}, imageUrl);
  }
});
