import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }



  onSubmit() {
    if (this.signupForm.valid) {
      //console.log(this.signupForm.value);
      const { username,email, password } = this.signupForm.value;
      this.authService.signup({username,email,password}).subscribe({

        next:() => {
          console.log('User Signed Up successfully');
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
