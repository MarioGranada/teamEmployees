import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employeeList: Employee[];
  constructor() {}

  ngOnInit() {}

  removeEmployee(employee): void {
    return employee.id;
  }
}
