import { Action } from '@ngrx/store';

export const EMPLOYEE_ACTION = '[Employee] someEmployeeAction';

export interface EmployeeActionType extends Action {
  readonly type: string;
  payload: any;
}

// export type EmployeeActionType = EmployeeAction;

// export const LOAD_EMPLOYEES = '[Employee] Load employees';
// export const ADD_EMPLOYEE = '[Employee] Add Employee';
// export const GET_EMPLOYEE = '[Employee] Get Employee';
// export const SAVE_EMPLOYEE = '[Employee] Save Employee';
// export const DELETE_EMPLOYEE = '[Employee] Delete Employee';

// // export interface LoadAllEmployees extends Action {
// //   readonly type: typeof LOAD_EMPLOYEES;
// // }

// // export interface AddNewEmployee extends Action {
// //   readonly type: typeof ADD_EMPLOYEE;
// //   payload: {};
// // }

// // export interface GetEmployeeById extends Action {
// //   readonly type: typeof GET_EMPLOYEE;
// //   payload: {};
// // }

// // export interface SaveEmployee extends Action {
// //   readonly type: typeof SAVE_EMPLOYEE;
// //   payload: {};
// // }

// // export interface DeleteEmployee extends Action {
// //   readonly type: typeof DELETE_EMPLOYEE;
// //   payload: {};
// // }

// // export type LoadEmployees = LoadAllEmployees;
// // export type AddEmployee = AddNewEmployee;
// // export type GetEmployee = GetEmployeeById;
// // export type UpdateEmployee = SaveEmployee;
// // export type RemoveEmployee = DeleteEmployee;
