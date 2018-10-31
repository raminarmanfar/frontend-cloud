import { DialogComponent } from './../../ui-design/dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { DialogData } from '../../../models/DialogData';

@Component({
  selector: 'app-logged-user-info',
  templateUrl: './logged-user-info.component.html',
  styleUrls: ['./logged-user-info.component.scss']
})
export class LoggedUserInfoComponent {
  get loggedUserInfo(): any { return UserService.loggedUserInfo; }

  constructor(
    private sharedService: SharedService,
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router
  ) { }


  register(userInfo: any) {
    this.userService.updateUserInfo(userInfo).subscribe(result => {
      const popupData: DialogData = new DialogData('Update user data', result.message);
      this.sharedService.openDialog(350, popupData).then(dialogResult => {
        UserService.assignLoggedUserInfo(result.data);
        this.router.navigate(['/dashboard/']);
      });
    });
  }
}
