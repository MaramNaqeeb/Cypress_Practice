import apiHelpers from "../../support/helpers/employee-helpers/employee-api-helpers";
import Employee from "../../support/page-objects/employee-page-object/employee";
import {
  password,
  username,
} from "../../support/helpers/employee-helpers/employee-payLoadFunctions";
import * as path from "path";
import Login from "../../support/page-objects/login-logout-page-object/login";
import Logout from "../../support/page-objects/login-logout-page-object/logout";
import ApiHelpers from "../../support/helpers/employee-helpers/employee-api-helpers";
import GenericFunctions from "../../support/helpers/genericFunctions";
import { leaveID } from "../../support/helpers/employee-helpers/employee-payLoadFunctions";


const employeeObj: Employee = new Employee();
const Login_Obj: Login = new Login();
const Logout_obj: Logout = new Logout();
const APIHELPERS:ApiHelpers=new ApiHelpers()

export let id: any;
export let empId: any;
export let vacancyID: any;
export let jobId: any;
let entitle:any;

before(function () {
  Login_Obj.loginAdmin("Admin", "admin123");
  cy.fixture("leave.json").as("leave")
  cy.get("@leave").then((leave:any)=>{
     entitle = {
      empNumber: empId,
      entitlement: leave.entitlement,
      fromDate:GenericFunctions.nextDayDate() ,
      leaveTypeId: leaveID,
      toDate: GenericFunctions.nextFifteenDaysDate(),
    };
  })
  
  APIHELPERS.addEmployee().then((resolve) => {
    empId = `${resolve}`;
    APIHELPERS.addUser();
    APIHELPERS.addEntitlement(entitle);
  });
  Logout_obj.logout();
});
describe("OrangeHRM-addEmployee and Entitlement-prerequisite", () => {
  beforeEach(function () {
    Login_Obj.loginAdmin(username, password);
    APIHELPERS.addLeave().then((resolve) => {
      id = `${resolve}`;
    });
    Logout_obj.logout();
  });

  it("TCs1: Check leave in the leave grid ", () => {
    Login_Obj.loginAdmin("Admin", "admin123");
  
    APIHELPERS.approveLeave(id);
    Logout_obj.logout();

    Login_Obj.loginAdmin(username, password);
    employeeObj.assertLeave("Scheduled");
  });
});

describe("OrangeHRM-addEmployee and addVacancy-prerequisite", () => {
  beforeEach(function () {
    Login_Obj.loginAdmin("Admin", "admin123");
    APIHELPERS.addJobTitle().then((resolve) => {
      jobId = `${resolve}`;
      APIHELPERS.addVacancy().then((resolve) => {
        vacancyID = `${resolve}`;
      });
    });
  });

  it("TCs1: upload vacancy file", () => {
    let filePath: string = "cypress/fixtures/task.xlsx";
    employeeObj.uploadVacancyFile(filePath);
    let xlsxPath: string = "cypress/downloads/task.xlsx";
    const jsonName: string = path.basename(xlsxPath).replace("xlsx", "json");
    employeeObj.downloadFile(xlsxPath, jsonName);
  });
});
