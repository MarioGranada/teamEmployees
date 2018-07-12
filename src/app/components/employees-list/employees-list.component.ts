import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    // this.employeeService
    //   .getEmployees()
    //   .subscribe(employees => (this.employeeList = employees));
    this.employeeService
      .getEmployees()
      .subscribe(employees => (this.employeeList = employees));
  }

  removeEmployee(employee: Employee): void {
    this.employeeList = this.employeeList.filter(emp => emp !== employee);
    // this.employeeService.deleteEmployee(employee).subscribe();
  }
}
