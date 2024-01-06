import generatingFunctions from "../genericFunctions";
import { EmployeePayload } from "../../api/employee-payload/employeePayload";
import { UserPayload } from "../../api/employee-payload/userPayload";
import { empId } from "../../../e2e/OrangeHRM/employee-actions.spec.cy";
import { EntitlementPayload } from "../../api/employee-payload/entitlementPayload";
import { LeavePayload } from "../../api/employee-payload/leavePayload";
import { ApproveLeavePayload } from "../../api/employee-payload/approveLeavePayload";
import { VacancyPayload } from "../../api/employee-payload/vacancyPayload";
import { JobTitlePayload } from "../../api/employee-payload/jobTitlePayload";
import { jobId } from "../../../e2e/OrangeHRM/employee-actions.spec.cy";


export const employeeFirstName: string = `Ann`;
export const employeeLastName: string = `Hathaway ${generatingFunctions.randomNumber()}`;
const employeeId: any = `${generatingFunctions.randomNumber()}`;
export const username: string = `Roadr${generatingFunctions.randomNumber()}`;
export const password: string = `123qwe,./${generatingFunctions.randomNumber()}`;
export const leaveID: number = Math.floor(Math.random() * 10);



export const newEmployeeData = (e?: EmployeePayload): any => {
  let employee: any = {
    empPicture: null,
    employeeId: employeeId,
    firstName: employeeFirstName,
    lastName: employeeLastName,
    middleName: "",
  };
  return employee;
};



export const newUserData = (u?: UserPayload): any => {
  let user: any = {
    empNumber: empId,
    password: password,
    status: true,
    userRoleId: 2,
    username: username,
  };
  return user;
};



export const entitlementData = (e?: EntitlementPayload): any => {
  let entitle: any = {
    empNumber: empId,
    entitlement: "30",
    fromDate: e?.fromDate,
    leaveTypeId: leaveID,
    toDate: e?.toDate,
  };
  return entitle;
};


export const leaveData = (l?: LeavePayload): any => {
  let leave: any = {
    comment: null,
    duration: {
      type: "half_day_morning",
    },
    fromDate: generatingFunctions.nextDayDate(),
    leaveTypeId: leaveID,
    partialOption: "start",
    toDate: generatingFunctions.nextThreeDaysDate(),
  };
  return leave;
};


export const approveLeaveData = (a?: ApproveLeavePayload): any => {
  let approve: any = {
    action: "APPROVE",
  };
  return approve;
};


export const jobTitleData = (j?: JobTitlePayload): any => {
  let job: any = {
    description: "",
    note: "",
    specification: null,
    title: `QA${generatingFunctions.randomNumber()}`,
  };
  return job;
};


export const addVacancyData = (v?: VacancyPayload): any => {
  let vacancy: any = {
    description: "",
    employeeId: empId,
    isPublished: true,
    jobTitleId: jobId,
    name: "Testing" || v?.name,
    numOfPositions: 2,
    status: true,
  };
  return vacancy;
  
  
};


