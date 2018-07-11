// import {
//   initialState as employee,
//   EmployeeState
// } from './employee/employee.state';

// export interface AppState {
//   employee: EmployeeState;
// }

// export const initialState: AppState = {
//   employee
// };
import { Employee } from '../models/employee';

export interface AppState {
  readonly employee: Employee[];
}
