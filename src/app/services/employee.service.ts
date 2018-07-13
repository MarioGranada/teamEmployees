import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppStore } from '../app.store';
import * as employeeState from '../store/employee/employee.state';

export const LOAD_EMPLOYEES = '[Employee] Load employees';
export const ADD_EMPLOYEE = '[Employee] Add Employee';
export const GET_EMPLOYEE = '[Employee] Get Employee';
export const SAVE_EMPLOYEE = '[Employee] Save Employee';
export const DELETE_EMPLOYEE = '[Employee] Delete Employee';
export const RESET_EMPLOYEES_STATE = '[Employee] Reset Employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private store: Store<AppStore>) {}

  getEmployees(): Observable<any> {
    // return this.store.select('employees');
    return this.store.select('employees');
  }

  getEmployee(id: number): Observable<any> {
    // const url = `${this.employeesUrl}/${id}`;
    // return this.http.get<Employee>(url);

    this.store.dispatch({
      type: employeeState.GET_EMPLOYEE,
      payload: { id: id }
    });
    return this.store.select('employees');
  }

  // /** PUT: update the employee on the server */
  // updateEmployee(employee: Employee): any {
  //   return this.http.put(this.employeesUrl, employee, httpOptions);
  // }

  /** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<any> {
    // return this.http.post<Employee>(this.employeesUrl, employee, httpOptions);
    this.store.dispatch({
      type: employeeState.ADD_EMPLOYEE,
      payload: employee
    });
    return this.store.select('employees');
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(employee: Employee | number): Observable<any> {
    const id = typeof employee === 'number' ? employee : employee.id;
    // const url = `${this.employeesUrl}/${id}`;

    // return this.http.delete<Employee>(url, httpOptions);
    this.store.dispatch({
      type: employeeState.DELETE_EMPLOYEE,
      payload: { id: id }
    });
    console.log('in here!!!');
    return this.store.select('employees');
  }

  // /* GET Employees whose name contains search term */
  // searchEmployees(term: string): any {
  //   if (!term.trim()) {
  //     return of([]);
  //   }
  //   return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`);
  // }
}
