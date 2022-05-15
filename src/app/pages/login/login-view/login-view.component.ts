import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoginModel } from '../models/login-model';

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

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    login(): void {
        let loginBody: LoginModel = {
            email: this.loginForm.get('email')!.value,
            password: this.loginForm.get('password')!.value
        }

        this.authenticationService.login(loginBody).subscribe((data: string) => {
            console.log(data);
        })
    }

    goToRegister(): void {
        this.router.navigate(['register']);
    }
}
