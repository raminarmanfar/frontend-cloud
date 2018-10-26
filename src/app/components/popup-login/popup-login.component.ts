import { SharedService } from './../../services/shared.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../models/DialogData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.scss']
})
export class PopupLoginComponent {

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<PopupLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    userLoginInfo() {

    }
    
  onCancelClick () {
    this.dialogRef.close();
  }

  onLinkClick(linkUrl: string) {
    this.dialogRef.close();
    this.router.navigate(['/public/' + linkUrl]);
  }
}
