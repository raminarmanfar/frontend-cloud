import { SharedService } from './../../services/shared.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../models/DialogData';

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.scss']
})
export class PopupLoginComponent {

  constructor(private dialogRef: MatDialogRef<PopupLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCancelClick () {
    SharedService.isLoggedIn = true;
    this.dialogRef.close();
  }
}
