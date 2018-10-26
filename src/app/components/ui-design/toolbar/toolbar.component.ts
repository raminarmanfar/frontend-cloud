import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopupLoginComponent } from '../../popup-login/popup-login.component';
import { MatDialog } from '@angular/material';
import { SharedService } from '../../../services/shared.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() isLoggedIn: boolean;
  @Output() mobBtnClick: EventEmitter<boolean> = new EventEmitter<boolean>();


  private username: string;
  private password: string;

  constructor(
    private dialog: MatDialog,
    private usersService: UsersService
    ) { }

  onLoginClick() {
      const dialogRef = this.dialog.open(PopupLoginComponent, {
        width: '350px',
        data: {username: this.username, password: this.password }
      });

      dialogRef.afterClosed().subscribe(userLogin => {
        if (doLogin) {
          this.usersService.login()
        }
      });
    }

    onLogoutClick() {
      SharedService.isLoggedIn = false;
    }

    onMobListClick() {
      this.mobBtnClick.emit(true);
    }
}
