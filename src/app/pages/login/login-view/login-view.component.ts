import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoginModel } from '../models/login-model';
import jwt_decode from 'jwt-decode';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-login-view',
    templateUrl: './login-view.component.html',
    styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
    loginForm: FormGroup = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
    });

    constructor(private authenticationService: AuthenticationService, private router: Router, private snackBar: MatSnackBar) { }

    login(): void {
        let loginBody: LoginModel = {
            email: this.loginForm.get('email')!.value,
            password: this.loginForm.get('password')!.value
        }

        this.authenticationService.login(loginBody).subscribe((data: string) => {
            localStorage.setItem("user", JSON.stringify(jwt_decode(data)));

            this.router.navigate(['shop']);

            this.snackBar.open('You have been logged in successfully!', 'X', {
                duration: 3000
            })
        })
    }

    goToRegister(): void {
        this.router.navigate(['register']);
    }
}
