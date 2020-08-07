import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../services/IEmployee';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.css']
  //providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  filteredEmployees: IEmployee[];

  private _searchTerm: string;
  // We are binding to this property in the view template, so this
  // getter is called when the binding needs to read the value
  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  selectedEmployeeCountRadioButton: string = 'All';
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private _employeeService: EmployeeService) {
  
   }

   filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
trackByEmpCode(index: number, employee: any): string {
  return employee.code;
}

getTotalEmployeesCount(): number {
    return this.employees.length;
}

getMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
}

getFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
}

onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    console.log(selectedRadioButtonValue);
}

  ngOnInit(): void {
  /* this._employeeService.getEmployees()
    .subscribe(employeesData => this.employees = employeesData,
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime';
        }
        );
        */
       this.employees = this._employeeService.getEmployeesList();
  }

}
