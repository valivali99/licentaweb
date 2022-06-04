import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../login/authentication.service';

@Component({
  selector: 'app-account-info-content',
  templateUrl: './account-info-content.component.html',
  styleUrls: ['./account-info-content.component.scss']
})
export class AccountInfoContentComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
