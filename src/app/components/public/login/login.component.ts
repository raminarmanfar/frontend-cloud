import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PopupLoginComponent } from '../../popup-login/popup-login.component';
import { UserService } from '../../../services/user.service';
import { ServiceResponse } from '../../../models/ServiceResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private error: any = undefined;

  constructor(private userService: UserService) { }

  loginClick(usernameOrEmail: string, password: string) {
    const loginResult = this.userService.login(usernameOrEmail, password);
    loginResult.subscribe((result: ServiceResponse) => {
      this.userService.afterLoginSuccess(result);
    }, (errObj: any) => {
      this.error = errObj.error;
    });
  }

  onTextChange() {
    this.error = false;
  }
}
