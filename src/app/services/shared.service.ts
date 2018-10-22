import { Injectable } from '@angular/core';
import { SubtoolbarInfo } from '../models/subtoolbar-info';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/ui-design/dialog/dialog.component';
import { DialogData } from '../models/DialogData';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static subToolbarInfo: SubtoolbarInfo;
  static isLoggedIn: boolean;

  static initialize() {
    SharedService.isLoggedIn = false;
    SharedService.subToolbarInfo = new SubtoolbarInfo(
      'Welcome to my personal website!',
      'Ramin Armanfar'
    );
  }

  constructor(public dialog: MatDialog) {}

  openDialog(width: string, dialogData: DialogData): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: width,
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

SharedService.initialize();
