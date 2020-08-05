import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SelectRequiredValidatorDirective } from './shared/customValidators/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/customValidators/confirm-equal-validator.directive';
import { EmployeeTitlePipe } from './shared/customPipes/employeeTitle.pipe';
import { EmployeeListComponent } from './employee-list-component/employee-list-component.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home-component/home-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './services/employee.service';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,SelectRequiredValidatorDirective,
    EmployeeTitlePipe,ConfirmEqualValidatorDirective,
     EmployeeListComponent, EmployeeCountComponent, HomeComponent, 
     PageNotFoundComponent, EmployeeDetailsComponent, DisplayEmployeeComponent
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
