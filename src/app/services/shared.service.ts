import { Injectable } from '@angular/core';
import { SubtoolbarInfo } from '../models/subtoolbar-info';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/ui-design/dialog/dialog.component';
import { DialogData } from '../models/DialogData';
import { MenuItem } from '../models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static subToolbarInfo: SubtoolbarInfo;
  static sideMenuList: Array<MenuItem>;

  static initialize() {
    SharedService.subToolbarInfo = new SubtoolbarInfo(
      'Welcome to my personal website!',
      'Ramin Armanfar'
    );
    SharedService.sideMenuList = new Array<MenuItem>(
      new MenuItem('Home', 'Home page', ''),
      new MenuItem('Projects', 'My projects', '/public/projects'),
      new MenuItem('Goals', 'My Goals', '/public/goals'),
      new MenuItem('About Me', 'Breifly about my life', '/public/about-me'),
      new MenuItem('Contact Me', 'Ways to contact me', '/public/contact-me'),
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
