import GenericFunctions from "../genericFunctions";
import { EmployeePayload } from "../../api/employee-payload/employeePayload";
import { UserPayload } from "../../api/employee-payload/userPayload";
import { TimeSheetPayload } from "../../api/timeSheet-payload/timeSheet-payload";
import { empId } from "./timeSheet-api-helpers";

export const employeeFirstName: string = `Ann`;
export const employeeLastName: string = `Hathaway ${GenericFunctions.randomNumber()}`;
const employeeId: any = `${GenericFunctions.randomNumber()}`;
export const username: string = `Johnj${GenericFunctions.randomNumber()}`;
export const password: string = `123qwe,./${GenericFunctions.randomNumber()}`;

export const newEmployeeData = (e?: EmployeePayload): any => {
  var employee: any = {
    empPicture: null,
    employeeId: employeeId,
    firstName: employeeFirstName,
    lastName: employeeLastName,
    middleName: "",
  };
  return employee;
};
export const newUserData = (u?: UserPayload): any => {
  var user: any = {
    empNumber: empId,
    password: password,
    status: true,
    userRoleId: 2,
    username: username,
  };
  return user;
};
export const newTimeSheetData = (t?: TimeSheetPayload): any => {
  let time: any = {
    entries: [
      {
        projectId: 2,
        activityId: 11,
        dates: { "2024-01-07": { duration: "09:00" } },
      },
    ],
    deletedEntries: [],
  };

  return time;
};
