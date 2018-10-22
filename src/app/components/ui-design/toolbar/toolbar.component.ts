import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopupLoginComponent } from '../../popup-login/popup-login.component';
import { MatDialog } from '@angular/material';
import { SharedService } from '../../../services/shared.service';

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

  constructor(private dialog: MatDialog) { }

  onLoginClick() {
      const dialogRef = this.dialog.open(PopupLoginComponent, {
        width: '350px',
        data: {username: this.username, password: this.password }
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }

    onLogoutClick() {
      SharedService.isLoggedIn = false;
    }

    onMobListClick() {
      this.mobBtnClick.emit(true);
    }
}
