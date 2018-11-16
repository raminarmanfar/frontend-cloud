import { DataOperation } from './../../../models/enums/DataOperationEnum';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PopupLoginComponent } from '../../popup-login/popup-login.component';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() isLoggedIn: boolean;
  @Input() loggedUserInfo: any;
  @Output() mobBtnClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  private username: string;
  private password: string;

  constructor(private dialog: MatDialog, private router: Router, private sharedService: SharedService) { }

  onLoginClick() {
    const dialogRef = this.dialog.open(PopupLoginComponent, {
      width: '350px',
      data: { username: this.username, password: this.password }
    });

    // dialogRef.afterClosed().subscribe((result: ServiceResponse) => {});
  }

  onLogoutClick() {
    UserService.assignLoggedUserInfo(null);
    this.router.navigate(['/']);
  }

  onMobListClick() {
    this.mobBtnClick.emit(true);
  }

  showLoggedUserDetailInfo() {
    UserService.selectedUserInfo = UserService.loggedUserInfo;
    this.router.navigate(['/dashboard/user-details/' + DataOperation.UpdateLoggedUser]);
  }
}
