const baseUrl = Cypress.config().baseUrl;
import {
  newEmployeeData,
  newUserData,
  newTimeSheetData,
} from "../timeSheet-helpers/timeSheet-payload-functions";


export let empId: any;

export const URLs = {
  addEmployeeForm: `${baseUrl}/web/index.php/pim/addEmployee`,
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  user: `${baseUrl}/web/index.php/api/v2/admin/users`,
  delete: `${baseUrl}/web/index.php/api/v2/pim/employees`,
};

export default class ApiHelpers {
   addEmployee() {
    return cy.employee("POST", URLs.employee, newEmployeeData()).then((response) => {
      empId = response.data.empNumber;
      cy.log(empId);
    });
  }
   addUser() {
    cy.user("POST", URLs.user, newUserData());
  }

   getRequest(){
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet"
    );
    return cy
      .api("GET","/web/index.php/api/v2/time/timesheets/default?date=2024-01-07",)
      .then((res) => res.body.data.id);
  }
   newTimesheet(id: any) {

    return cy.API(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/time/timesheets/${id}/entries`,
      newTimeSheetData()
    );
  }
   submitTimeSheetAction(id: any) {
    return cy.API(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/time/timesheets/${id}`,
      { action: "SUBMIT" }
    );
  }
}
