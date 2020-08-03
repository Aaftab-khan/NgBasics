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
  employees: IEmployee[];;
  selectedEmployeeCountRadioButton: string = 'All';
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private _employeeService: EmployeeService) {
  
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
}

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(employeesData => this.employees = employeesData,
        error => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime';
        }
        );
  }

}
