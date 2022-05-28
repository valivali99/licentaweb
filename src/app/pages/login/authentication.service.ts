import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from './models/login-model';
import { RegisterModel } from './models/register-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationUrl = `${environment.endpoint}/api/user`;

  constructor(private http: HttpClient) { }

  login(body: LoginModel): any {
    return this.http.post<LoginModel>(`${this.authenticationUrl}/login`, body);
  }

  register(body: RegisterModel): any {
    return this.http.post<RegisterModel>(`${this.authenticationUrl}/register`, body);
  }

  checkIfUserIsLoggedIn(): boolean {
    return localStorage.getItem("user") ? true : false;
  }

  getUserInfo(): any {
    return localStorage.getItem("user");
  }

  logOut(): void {
    localStorage.clear();
  }
}
