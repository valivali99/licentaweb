import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';

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

    constructor(public cartService: CartService) { }

    playSound(note: string) {
        let audio = new Audio();
        //audio.src = '../../../assets/sounds/' + note + '.m4a';
        audio.load();
        audio.play();
    }
}
