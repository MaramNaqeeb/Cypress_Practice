import ApiHelpers from "../../support/helpers/timeSheet-helpers/timeSheet-api-helpers"
import Employee from "../../support/page-objects/employee-page-object/employee";
import {
  password,
  username,
  employeeLastName,
} from "../../support/helpers/timeSheet-helpers/timeSheet-payload-functions";
import Login from "../../support/page-objects/login-logout-page-object/login";
import Logout from "../../support/page-objects/login-logout-page-object/logout";

// const employeeObj: Employee = new Employee();
const LOGIN_OBJ: Login = new Login();
const LOGOUT_OBJ: Logout= new Logout();
const APIHELPERS:ApiHelpers=new ApiHelpers()

let searchMap: any = {
  "Employee Name": employeeLastName,
  "Timesheet Period": "2023-10-23 - 2023-10-29",
  "Actions": "View",
};

describe("OrangeHRM-loginAdmin prerequisite", () => {
  beforeEach(function () {
    cy.fixture("employee.json").as("employee");
    cy.get("@employee").then((emp: any) => {
      cy.visit("/");
      LOGIN_OBJ.loginAdmin(emp.admin, emp.password);
      APIHELPERS.addEmployee().then(() => {
        APIHELPERS.addUser();
      });
    });
  });
  it("TCs1: OrangeHRM-addTimeSheet", () => {
    cy.get("@employee").then((emp: any) => {
        LOGOUT_OBJ.logout();
        LOGIN_OBJ.loginAdmin(username, password);

      APIHELPERS.getRequest().then((id:any) => {
        APIHELPERS.newTimesheet(id);
        APIHELPERS.submitTimeSheetAction(id);
      });

      LOGOUT_OBJ.logout();
      cy.visit("/");
      LOGIN_OBJ.loginAdmin(emp.admin, emp.password);

    //   employeeObj.GridAssertionGenericFunction(searchMap["Employee Name"]);
    });
    
  });
});
