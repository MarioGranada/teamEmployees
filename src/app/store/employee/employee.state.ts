import { Employee } from '../../models/employee';
import { Action, ActionReducer, State } from '@ngrx/store';
import { EMPLOYEES } from '../../mocks/mock-employees';
import { EmployeeActionType } from './employee.action-types';
import * as _ from 'lodash';

export const LOAD_EMPLOYEES = '[Employee] Load employees';
export const ADD_EMPLOYEE = '[Employee] Add Employee';
export const GET_EMPLOYEE = '[Employee] Get Employee';
export const SAVE_EMPLOYEE = '[Employee] Save Employee';
export const DELETE_EMPLOYEE = '[Employee] Delete Employee';
export const RESET_EMPLOYEES_STATE = '[Employee] Reset Employees';

export const initialEmployees: Employee[] = EMPLOYEES;
export const initialEmployeesState = {
  employees: initialEmployees,
  selectedEmployee: null
};

export const employees: ActionReducer<Employee[]> = (
  state: any = initialEmployeesState,
  action: EmployeeActionType
) => {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      return loadAllEmployees(state);
    case ADD_EMPLOYEE:
      return addNewEmployee(state, action.payload);
    case GET_EMPLOYEE:
      return getEmployee(state, action.payload);
    case SAVE_EMPLOYEE:
      return saveEmployee(state, action.payload);
    case DELETE_EMPLOYEE:
      return deleteEmployee(state, action.payload);
    case RESET_EMPLOYEES_STATE:
      return resetEmployees(initialEmployeesState);
    default:
      return state;
  }
};

function loadAllEmployees(state): any {
  return { ...state };
}

function addNewEmployee(state, payload): any {
  return { employees: [...state.employees, payload], selectedEmployee: null };
}

function getEmployee(state, payload): any {
  // return _.find(state, emp => {
  //   return emp.id === payload.id;
  // });

  return {
    employees: [...state.employees],
    selectedEmployee: _.find(state.employees, emp => {
      return emp.id === payload.id;
    })
  };
}

function saveEmployee(state, payload): any {
  var oldEmployeeIndex = _.indexOf(state.employees, payload);
  return {
    employees: [
      ...state.employees.slice(0, oldEmployeeIndex),
      payload,
      ...state.employees.slice(oldEmployeeIndex + 1)
    ],
    selectedEmployee: null
  };
}

function deleteEmployee(state, payload): any {
  return {
    employees: _.filter(state.employees, emp => {
      return emp.id !== payload.id;
    }),
    selectedEmployee: null
  };
}

function resetEmployees(initialState): any {
  return initialState;
}
