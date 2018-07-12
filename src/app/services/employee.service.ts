import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppStore } from '../app.store';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private store: Store<AppStore>) {}

  getEmployees(): Observable<Employee[]> {
    return this.store.select('employees');
  }

  private employeesUrl = 'api/employees';

  // getEmployees(): void {
  //   return this.http.get<Employee[]>(this.employeesUrl);
  // }

  getEmployee(id: number): any {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  /** PUT: update the employee on the server */
  updateEmployee(employee: Employee): any {
    return this.http.put(this.employeesUrl, employee, httpOptions);
  }

  /** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, httpOptions);
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(employee: Employee | number): any {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions);
  }

  /* GET Employees whose name contains search term */
  searchEmployees(term: string): any {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`);
  }
}
