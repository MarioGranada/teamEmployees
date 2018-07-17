import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KITCHEN_POSITIONS } from '../../mocks/mock-kitchen-pos';
import { SERVICES_POSITIONS } from '../../mocks/mock-services-pos';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { debug } from 'util';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
  isViewEmployee = false;
  currentEmployee: Employee = null;
  employeeForm: FormGroup;
  countries = [];
  jobTitles = [];
  hasTipRate = false;
  selectedArea = '';
  selectedJobTitle = '';
  selectedCountry = '';

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private formBuilder: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.getEmployee();
    this.getCountries();
    this.toggleJobTitleSelectBox(this.currentEmployee.area);
    this.toogleTipRate(this.currentEmployee.jobTitle);
    this.createForm();
  }

  getCountries(): void {
    this.countryService
      .getAllCountries()
      .subscribe(cts => (this.countries = cts));
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('employeeId');
    const isViewEmployee = this.route.snapshot.queryParamMap.get('view');
    this.isViewEmployee = isViewEmployee && isViewEmployee === 'true';

    this.employeeService.getEmployee(id).subscribe(employees => {
      this.currentEmployee = employees.selectedEmployee;
    });
  }

  goBack(): void {
    this.location.back();
  }

  prepareEmployee(): void {
    var tempEmployee = Object.assign({}, this.employeeForm.value);
  }

  revert() {
    this.rebuildForm();
  }

  rebuildForm(): void {
    this.employeeForm.reset({
      name: '',
      username: '',
      hireDate: '',
      jobTitle: '',
      dateOfBirthday: '',
      country: '',
      status: '',
      area: '',
      tipRate: ''
    });
  }

  createForm(): void {
    this.employeeForm = this.formBuilder.group({
      name: [
        {
          value: this.currentEmployee.name,
          disabled: this.isViewEmployee
        },
        [Validators.required, Validators.maxLength(15)]
      ],
      username: [
        { value: this.currentEmployee.username, disabled: this.isViewEmployee },
        Validators.required
      ],
      hireDate: [
        { value: this.currentEmployee.hireDate, disabled: this.isViewEmployee },
        Validators.required
      ],
      jobTitle: [
        { value: '', disabled: this.isViewEmployee },
        Validators.required
      ],
      dateOfBirthday: [
        {
          value: this.currentEmployee.dateOfBirthday,
          disabled: this.isViewEmployee
        },
        Validators.required
      ],
      country: [
        { value: '', disabled: this.isViewEmployee },
        Validators.required
      ],
      status: [
        { value: this.currentEmployee.status, disabled: this.isViewEmployee },
        Validators.required
      ],
      area: [
        { value: this.currentEmployee.area, disabled: this.isViewEmployee },
        Validators.required
      ],
      tipRate: [
        { value: this.currentEmployee.tipRate, disabled: this.isViewEmployee }
      ]
    });
    this.selectedCountry = this.currentEmployee.country;
    this.selectedJobTitle = this.currentEmployee.jobTitle;
  }

  toggleJobTitleSelectBox(area): void {
    switch (area) {
      case 'services':
        this.jobTitles = SERVICES_POSITIONS;
        break;
      case 'kitchen':
        this.jobTitles = KITCHEN_POSITIONS;
        break;
      default:
        area = 'services';
        this.jobTitles = SERVICES_POSITIONS;
    }
    this.selectedArea = area;
    this.selectedJobTitle = '';
  }

  toogleTipRate(jobTitle): void {
    switch (jobTitle) {
      case 'waitress':
      case 'dining_room_manager':
        this.hasTipRate = true;
        break;
      default:
        this.hasTipRate = false;
        break;
    }
  }

  getSelectedJobTitle(jobTitle): void {
    this.selectedJobTitle = jobTitle;
    this.toogleTipRate(jobTitle);
  }

  getSelectedCountry(country): void {
    this.selectedCountry = country;
  }

  // save(): void {
  //   this.employeeService
  //     .updateEmployee(this.currentEmployee)
  //     .subscribe(() => this.goBack());
  // }
}
