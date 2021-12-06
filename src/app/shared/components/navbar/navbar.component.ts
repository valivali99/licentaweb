import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    homeRoute = 'home';
    shopRoute = 'shop';
    newsletterRoute = 'newsletter';
    loginRoute = 'login';

    constructor() {}

    ngOnInit(): void {}

    playSound(note: string) {
        let audio = new Audio();
        audio.src = '../../../assets/sounds/' + note + '.m4a';
        audio.load();
        audio.play();
    }
}
