import * as actionTypes from './employee.action-types';

export function employeeAction(payload: any): actionTypes.EmployeeActionType {
  return {
    type: actionTypes.EMPLOYEE_ACTION,
    payload
  };
}

// // export function LoadEmployees(): actionTypes.LoadEmployees {
// //   return {
// //     type: actionTypes.LOAD_EMPLOYEES
// //   };
// // }

// // export function AddEmployee(newEmployee): actionTypes.AddNewEmployee {
// //   return {
// //     type: actionTypes.ADD_EMPLOYEE,
// //     payload: newEmployee
// //   };
// // }

// // export function GetEmployee(id): actionTypes.GetEmployeeById {
// //   return {
// //     type: actionTypes.GET_EMPLOYEE,
// //     payload: { id: id }
// //   };
// // }

// // export function UpdateEmployee(employee): actionTypes.SaveEmployee {
// //   return {
// //     type: actionTypes.SAVE_EMPLOYEE,
// //     payload: employee
// //   };
// // }

// // export function RemoveEmployee(id): actionTypes.DeleteEmployee {
// //   return {
// //     type: actionTypes.DELETE_EMPLOYEE,
// //     payload: { id: id }
// //   };
// // }
