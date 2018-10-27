import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopupLoginComponent } from '../../popup-login/popup-login.component';
import { MatDialog } from '@angular/material';
import { UserService } from '../../../services/user.service';
import { ServiceResponse } from 'src/app/models/ServiceResponse';

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

  constructor(private dialog: MatDialog) { }

  onLoginClick() {
    const dialogRef = this.dialog.open(PopupLoginComponent, {
      width: '350px',
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe((result: ServiceResponse) => {
      if (result && result.success) {
        UserService.assignLoggedUserInfo(result.data);
      }
    });
  }

  onLogoutClick() {
    UserService.assignLoggedUserInfo(null);
  }

  onMobListClick() {
    this.mobBtnClick.emit(true);
  }
}
