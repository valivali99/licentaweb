import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/pages/login/authentication.service';


@Injectable()
export class IsLoggedInGuard implements CanActivate {

    constructor(private router: Router, public authenticationService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.authenticationService.checkIfUserIsLoggedIn();
    }

}