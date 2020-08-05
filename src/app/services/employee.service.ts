
import { Injectable } from '@angular/core';
import { IEmployee } from './IEmployee';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class EmployeeService {

    constructor(private httpClient: HttpClient) {
    }
    private listEmployees: IEmployee[] = [
      {
          code: '123',
          name: 'aftab khan',
          gender: 'Male',
          contactPreference: 'Email',
          email: 'aftab@test.com',
          dateOfBirth: new Date('10/25/1988'),
          department: 3,
          isActive: true,
          photoPath: 'assets/Photograph.jpg'
      },
      {
        code: '12456',
          name: 'Mary',
          gender: 'Female',
          contactPreference: 'Phone',
          phoneNumber: '2345978640',
          dateOfBirth: new Date('11/20/1979'),
          department: 2,
          isActive: true,
          photoPath: ''
      },
      {
        code: '1246',
          name: 'akash ahmad',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: '5432978640',
          dateOfBirth: new Date('3/25/1976'),
          department: 1,
          isActive: false,
          photoPath: 'assets/photo1.jpg'
      },
  ];

  getEmployeesList(): IEmployee[] {
      return this.listEmployees;
  }
  getEmployee(id: string): IEmployee {
    return this.listEmployees.find(e => e.code === id);
}
    getEmployees(): Observable<IEmployee[]> {
        return this.httpClient.get<IEmployee[]>('https://localhost:44328/api/employee')
        .pipe(catchError(this.handleError));
    }

    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this.httpClient.get<IEmployee>("https://localhost:44328/api/employee/" + empCode)
        .pipe(catchError(this.handleError));
    }

    save(employee: IEmployee) {
      this.listEmployees.push(employee);
  }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
}