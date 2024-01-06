

import './commands';
import 'cypress-plugin-api';
import '../support/utils/apiUtils'
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  