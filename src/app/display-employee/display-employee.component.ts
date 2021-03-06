import { Component, OnInit,Input } from '@angular/core';
import{IEmployee} from '../services/IEmployee'

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: IEmployee;
  constructor() { }

  ngOnInit(): void {
  }

}
