import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';

import { DesignationComponent } from './designation/designation.component';
import { ShowDesComponent } from './designation/show-des/show-des.component';
import { AddDesComponent } from './designation/add-des/add-des.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';
import { ShowPayComponent } from './payment/show-pay/show-pay.component';
import { AddEditPayComponent } from './payment/add-edit-pay/add-edit-pay.component';
import { LeaveComponent } from './leave/leave.component';
import { ShowLeaveComponent } from './leave/show-leave/show-leave.component';
import { AddEditLeaveComponent } from './leave/add-edit-leave/add-edit-leave.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { ShowWorkComponent } from './workingHours/show-work/show-work.component';
import { AddWorkComponent } from './workingHours/add-work/add-work.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEmpComponent,
    DesignationComponent,
    ShowDesComponent,
    AddDesComponent,
    PaymentComponent,
    ShowPayComponent,
    AddEditPayComponent,
    LeaveComponent,
    ShowLeaveComponent,
    AddEditLeaveComponent,
    WorkingHoursComponent,
    ShowWorkComponent,
    AddWorkComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
