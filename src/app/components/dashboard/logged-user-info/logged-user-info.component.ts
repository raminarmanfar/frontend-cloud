import { DialogComponent } from './../../ui-design/dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-logged-user-info',
  templateUrl: './logged-user-info.component.html',
  styleUrls: ['./logged-user-info.component.scss']
})
export class LoggedUserInfoComponent {
  get loggedUserInfo(): any { return UserService.loggedUserInfo; }

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router
  ) { }


  register(userInfo: any) {
    this.userService.updateUserInfo(userInfo).subscribe(result => {
      console.log(result);

      const popupData: any = { title: 'Update user data', message: result.message };
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        data: popupData
      });

      dialogRef.afterClosed().subscribe(dialogResult => {
        UserService.assignLoggedUserInfo(result.data);
        this.router.navigate(['/dashboard/']);
      });
    });
  }
}
