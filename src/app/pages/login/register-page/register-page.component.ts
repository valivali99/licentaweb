import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { RegisterModel } from '../models/register-model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });

  constructor(private authenticationService: AuthenticationService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    let registerBody: RegisterModel = {
      email: this.registerForm.get('email')!.value,
      password: this.registerForm.get('password')!.value,
      name: this.registerForm.get('name')!.value
    }

    this.authenticationService.register(registerBody).subscribe(() => {
      this.snackBar.open('You have been successfully registered, please log in now.', 'X', {
        duration: 3000
      });
      this.router.navigate(['login']);
    },
      () => {
        this.snackBar.open('The email is already taken, try another one.', 'X', {
          duration: 3000
        });
      })
  }


}
