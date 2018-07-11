import { EMPLOYEES } from '../../mocks/mock-employees';
export interface EmployeeState {
  // id: Number;
  // name: String;
  // age: Number;
  // username: String;
  // hireDate: Date;
  // jobTitle: String;
  // dateOfBirthday: Date;
  // country: String;
  // status: Boolean;
  // area: String;
  // tipRate: Number;
  employeesList: any[];
}

export const initialState: EmployeeState = {
  employeesList: EMPLOYEES
};
