import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DesignationComponent } from './designation/designation.component';
import { LeaveComponent } from './leave/leave.component';
import { PaymentComponent } from './payment/payment.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'employees',component:EmployeeComponent,canActivate:[AuthGuard]},
  {path:'designations',component:DesignationComponent,canActivate:[AuthGuard]},
  {path:'workinghours',component:WorkingHoursComponent,canActivate:[AuthGuard]},
  {path:'leaverequests',component:LeaveComponent,canActivate:[AuthGuard]},
  {path:'paymentrules',component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
//   {path:'user', component:UserComponent,
// children:[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
//]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
