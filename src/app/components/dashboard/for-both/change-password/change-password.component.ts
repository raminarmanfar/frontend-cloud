import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ServiceResponse } from '../../../../models/ServiceResponse';
import { SharedService } from '../../../../services/shared.service';
import { DialogData } from '../../../../models/DialogData';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  private username = UserService.loggedUserInfo.username;
  private error: any = undefined;

  constructor(
    private router: Router,
    private userService: UserService,
    private sharedService: SharedService) { }

  changePassword(credentials: any) {
    if (credentials.newPassword === credentials.confirmPassword) {
      const changePassResult = this.userService.changePassword(this.username, credentials.currentPassword, credentials.newPassword);
      changePassResult.subscribe((changeResult: ServiceResponse) => {
        if (changeResult.success) {
          this.sharedService.openDialog(350, new DialogData('Change Password', changeResult.message)).then(dialogResult => {
            this.router.navigate(['/dashboard/']);
          });
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
