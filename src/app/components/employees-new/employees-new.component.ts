import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { CountryService } from '../../services/country.service';
import { KITCHEN_POSITIONS } from '../../mocks/mock-kitchen-pos';
import { SERVICES_POSITIONS } from '../../mocks/mock-services-pos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees-new',
  templateUrl: './employees-new.component.html',
  styleUrls: ['./employees-new.component.css']
})
export class EmployeesNewComponent implements OnInit {
  countries = [];
  jobTitles = [];
  hasTipRate = false;
  selectedArea = '';
  selectedJobTitle = '';
  selectedCountry = '';
  newEmployee: Employee;

  // employeeForm = new FormGroup({
  //   name: new FormControl(),
  //   age: new FormControl(),
  //   username: new FormControl(),
  //   hireDate: new FormControl(),
  //   jobTitle: new FormControl(),
  //   dateOfBirthday: new FormControl(),
  //   country: new FormControl(),
  //   status: new FormControl(),
  //   area: new FormControl(),
  //   tipRate: new FormControl()
  // });

  employeeForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private countryService: CountryService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getCountries();
    this.toggleJobTitleSelectBox('');
  }

  getCountries(): void {
    this.countryService
      .getAllCountries()
      .subscribe(cts => (this.countries = cts));
  }

  goBack(): void {
    this.revert();
    this.location.back();
  }

  saveEmployee(): void {
    this.prepareEmployee();
    this.employeeService.addEmployee(this.newEmployee).subscribe(emp => {
      console.log('new employee saved', emp);
      this.rebuildForm();
      this.goBack();
    });
  }

  private prepareEmployee(): void {
    this.newEmployee = Object.assign({}, this.employeeForm.value);
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

  createForm(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      username: ['', Validators.required],
      hireDate: ['', Validators.required],
      jobTitle: ['', Validators.required],
      dateOfBirthday: ['', Validators.required],
      country: ['', Validators.required],
      status: ['', Validators.required],
      area: ['', Validators.required],
      tipRate: ['', Validators.required]
    });
  }
}
