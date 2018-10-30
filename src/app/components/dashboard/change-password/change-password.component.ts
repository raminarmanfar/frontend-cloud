import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ServiceResponse } from '../../../models/ServiceResponse';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  private username = UserService.loggedUserInfo.username;
  private error: any = undefined;

  constructor(private userService: UserService) { }

  updatePassword(credentials: any) {
    if (credentials.newPassword === credentials.confirmPassword) {
      const changePassResult = this.userService.changePassword(this.username, credentials.newPassword);
      changePassResult.subscribe((changeResult: ServiceResponse) => {
        console.log(changeResult);
        if (changeResult.success) {
        } else {
          this.error = changeResult;
        }
      }, (errObj: any) => {
        this.error = errObj.error;
      });
    }
  }

  onTextChange() {
    this.error = false;
  }
}
