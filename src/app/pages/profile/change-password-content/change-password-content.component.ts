import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { AuthenticationService } from '../../login/authentication.service';

@Component({
  selector: 'app-change-password-content',
  templateUrl: './change-password-content.component.html',
  styleUrls: ['./change-password-content.component.scss']
})
export class ChangePasswordContentComponent implements OnInit {

  @ViewChild("confirmPasswordField") confirmPasswordField!: MatFormField;

  changePasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(null, [Validators.required, Validators.min(6)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.min(6)]),
  });

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  changePassword(): void {
    this.authenticationService.changePassword().subscribe((data: any) => {
      console.log(1)
    })
  }

  checkPasswords(): void {
    if (this.changePasswordForm.value["confirmPassword"] != this.changePasswordForm.value["newPassword"]) {
      this.changePasswordForm.setErrors({ 'incorrect': true })
    }
  }

}
