import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GroupService } from './group.service';
import { StudentGroupsComponent } from './student-group/student-group.component';
import { StudentService } from './student.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    AdminDashboardComponent,
    StudentGroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,GroupService,StudentService],

  bootstrap: [AppComponent]
})
export class AppModule { }
