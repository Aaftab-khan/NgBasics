import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { department } from '../models/department';
import { employee } from '../models/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  implements OnInit {

departments:Array<department>;
employeeObj: employee;

 constructor(){

  this.departments= [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
    
  this.employeeObj= { 
    name: null,
    gender:'male',
    email: null,
    dateOfBirth: null,
    department: -1,
    isActive: true,
    photoPath: null,
    previewPhoto:false,
    phoneNumber:null,
    contactPreference:'email',
    password:null,
    confirmPassword:null

  };
 }


  saveEmployee(emp: employee): void {
    console.log(emp);
  }

  togglePhotoPreview(){
    this.employeeObj.previewPhoto=!this.employeeObj.previewPhoto;
  }
  
  ngOnInit() {
  }

}
