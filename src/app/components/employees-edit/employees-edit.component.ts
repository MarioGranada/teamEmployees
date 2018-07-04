import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
  isViewEmployee = false;
  currentEmployee: Employee = null;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('employeeId');
    const isViewEmployee = this.route.snapshot.queryParamMap.get('view');

    this.isViewEmployee = isViewEmployee && isViewEmployee === 'true';
    if (!this.isViewEmployee) {
      this.employeeService
        .getEmployee(id)
        .subscribe(employee => (this.currentEmployee = employee));
    } else {
      this.currentEmployee = null;
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.employeeService
      .updateEmployee(this.currentEmployee)
      .subscribe(() => this.goBack());
  }
}
