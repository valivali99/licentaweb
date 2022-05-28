import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../../services/cart-service/cart.service';
import { AuthenticationService } from 'src/app/pages/login/authentication.service';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    homeRoute = 'home';
    shopRoute = 'shop';
    newsletterRoute = 'newsletter';
    loginRoute = 'login';
    cartRoute = 'cart';

    constructor(public cartService: CartService, public authenticationService: AuthenticationService, private snackBar: MatSnackBar) { }

    playSound(note: string) {
        let audio = new Audio();
        //audio.src = '../../../assets/sounds/' + note + '.m4a';
        audio.load();
        audio.play();
    }

    logout(): void {
        this.snackBar.open('You have been logged out.', 'X', {
            duration: 3000
        });

        this.authenticationService.logOut()
    }
}
