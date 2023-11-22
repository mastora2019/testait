import { Component } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';  // Make sure to import Router


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService,public router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }



  onSubmit() {
    if (this.loginForm.valid) {
      //console.log(this.signupForm.value);
      const { username,email, password } = this.loginForm.value;
      this.authService.signup({username,email,password}).subscribe({

        next:() => {
          console.log('User Logged In successfully');
          this.router.navigate(['/dashboard']); 
        },
        error:(error)=>{
          console.error('Error while User SignUp',error);

        }
       } );
      // this.authService.signup({ username, password }).subscribe(
      //   response => console.log(response),
      //   error => console.error(error)
      // );
    }
  }
}
