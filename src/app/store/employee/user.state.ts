import { Employee } from '../../models/employee';
import { Action, ActionReducer, State } from '@ngrx/store';
import { EMPLOYEES } from '../../mocks/mock-employees';
import { EmployeeActionType } from './employee.action-types';
import * as _ from 'lodash';

export const LOAD_EMPLOYEES = '[Employee] Load employees';

export const anyUsers = [
  {
    id: 1,
    name: 'Mario Granada',
    age: 28,
    username: 'mariograf1',
    hireDate: new Date(Date.now()),
    jobTitle: 'front end developer',
    dateOfBirthday: new Date(Date.now()),
    country: 'Colombia',
    status: true,
    area: 'Services',
    tipRate: 0
  },
  {
    id: 2,
    name: 'Jose Villareal',
    age: 28,
    username: 'josef1',
    hireDate: new Date(Date.now()),
    jobTitle: 'front end developer',
    dateOfBirthday: new Date(Date.now()),
    country: 'Alemania',
    status: true,
    area: 'Services',
    tipRate: 0
  }
];

export const users: ActionReducer<Employee[]> = (
  state: any[] = anyUsers,
  action: EmployeeActionType
) => {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      return loadAllEmployees(state);
    default:
      return state;
  }
};

function loadAllEmployees(state): any[] {
  return [...state];
}

function addNewEmployee(state, payload): any[] {
  return [...state, payload];
}

function getEmployee(state, payload): any {
  return _.find(state, emp => {
    return emp.id === payload.id;
  });
}

function saveEmployee(state, payload): any[] {
  var oldEmployeeIndex = _.indexOf(state, payload);
  return [
    ...state.slice(0, oldEmployeeIndex),
    payload,
    ...state.slice(oldEmployeeIndex + 1)
  ];
}

function deleteEmployee(state, payload): any[] {
  return _.filter(state, emp => {
    return emp.id !== payload.id;
  });
}

function resetEmployees(initialState): any[] {
  return initialState;
}
