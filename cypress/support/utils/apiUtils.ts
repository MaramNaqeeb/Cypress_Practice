import { EmployeeResponse } from "../api/employee-response/employeeResponse";

import { UserResponse } from "../api/employee-response/userResponse";

declare global {
  namespace Cypress {
    interface Chainable {
      employee: (
        method: string,
        requestUrl: string,
        employeePayload: string
      ) => Chainable<EmployeeResponse>;
      user: (
        method: string,
        requestUrl: string,
        userPayload: string
      ) => Chainable<UserResponse>;
 
    }
  }
}


Cypress.Commands.add(
  "employee",
  (method: string, requestUrl: string, employeePayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: employeePayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);

Cypress.Commands.add(
  "user",
  (method: string, requestUrl: string, userPayload: string) => {
    return cy
      .api({
        method: method,
        url: requestUrl,
        body: userPayload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).eq(200);
      })
      .its("body");
  }
);




