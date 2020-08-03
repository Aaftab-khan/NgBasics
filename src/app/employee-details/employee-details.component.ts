import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../services/IEmployee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: IEmployee;
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private _employeeService: EmployeeService,
      private _activatedRoute: ActivatedRoute,private _router: Router) { }


  ngOnInit(): void {
    let empCode: string = this._activatedRoute.snapshot.params['code'];
    this._employeeService.getEmployeeByCode(empCode)
        .subscribe((employeeData) => {
            if (employeeData == null) {
                this.statusMessage =
                    'Employee with the specified Employee Code does not exist';
            }
            else {
                this.employee = employeeData;
            }
        },
        (error) => {
            this.statusMessage =
                'Problem with the service. Please try again after sometime';
            console.error(error);
        });
  }

  onBackButtonClick() :void {
    this._router.navigate(['/employees']);
}

}
