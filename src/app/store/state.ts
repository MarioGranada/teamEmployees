import {
  initialState as employee,
  EmployeeState
} from './employee/employee.state';

export interface AppState {
  employee: EmployeeState;
}

export const initialState: AppState = {
  employee
};
