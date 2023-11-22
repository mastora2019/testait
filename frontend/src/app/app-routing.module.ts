import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentGroupsComponent } from './student-group/student-group.component';

const routes: Routes = [
  {path:'signup', component:SignupComponent},
  { path: 'login', component:LoginComponent},
  { path: 'auth/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'admin-dashboard', component:AdminDashboardComponent},
  {path: 'student-group', component:StudentGroupsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

