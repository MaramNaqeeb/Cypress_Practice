const baseUrl = Cypress.config().baseUrl;

import {
  approveLeaveData,
  entitlementData,
  leaveData,
  newEmployeeData,
  newUserData,
  addVacancyData,
  jobTitleData,
} from "./employee-payLoadFunctions";

let empId: any;
export let userId: number;
export let vacancyId: any;
export let jobID: any;
let leaveId: number;
export var candidateId: any;
export let entitlementId: any;

export const URLs = {
  addEmployeeForm: `${baseUrl}/web/index.php/pim/addEmployee`,
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  user: `${baseUrl}/web/index.php/api/v2/admin/users`,
  entitlement: `${baseUrl}/web/index.php/api/v2/leave/leave-entitlements`,
  leave: `${baseUrl}/web/index.php/api/v2/leave/leave-requests`,
  jobTitle: `${baseUrl}/web/index.php/api/v2/admin/job-titles`,
  vacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`,
};

export default class ApiHelpers {
   addEmployee() {
    return new Cypress.Promise((resolve, reject) => {
      cy.employee("POST", URLs.employee, newEmployeeData()).then((response) => {
        empId = response.data.empNumber;
        resolve(empId);
      });
    });
  }
   addUser() {
    return cy.user("POST", URLs.user, newUserData()).then((response) => {
      userId = response.data.userRole.id;
    });
  }

   addEntitlement(data:any) {
    return cy.API("POST", URLs.entitlement, entitlementData(data));
  }

   addLeave() {
    return new Cypress.Promise((resolve, reject) => {
      cy.API("POST", URLs.leave, leaveData()).then((response) => {
        leaveId = response.body.data.id;
        resolve(leaveId);

        console.log(leaveId);
      });
    });
  }

   approveLeave(id: any) {
    cy.API(
      "PUT",
      `${baseUrl}/web/index.php/api/v2/leave/employees/leave-requests/${id}`,
      approveLeaveData()
    );
  }

   addJobTitle() {
    return new Cypress.Promise((resolve, reject) => {
      cy.API("POST", URLs.jobTitle, jobTitleData()).then((response) => {
        jobID = response.body.data.id;
        console.log(jobID);
        resolve(jobID);
      });
    });
  }

   addVacancy() {
    return new Cypress.Promise((resolve, reject) => {
      cy.API("POST", URLs.vacancy, addVacancyData()).then((response) => {
        vacancyId = response.body.data.id;
        resolve(vacancyId);
      });
    });
  }
}
