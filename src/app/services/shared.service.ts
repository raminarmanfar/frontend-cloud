import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/ui-design/dialog/dialog.component';
import { DialogData } from '../models/DialogData';
import { MenuItem } from '../models/MenuItem';
import { SubToolbarItem } from '../models/SubToolbarItem';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static sideMenuList: Array<MenuItem>;
  static subToolBarInfo: Array<SubToolbarItem>;

  static initialize() {
    SharedService.subToolBarInfo = new Array<SubToolbarItem>(
      new SubToolbarItem('/', 'Welcome to my personal website!', 'Ramin Armanfar'),
      new SubToolbarItem('/public/projects', 'Projects', 'List of my programming projects.'),
      new SubToolbarItem('/public/goals', 'Goals', 'My goals and vision.'),
      new SubToolbarItem('/public/about-me', 'About me', 'Briefly about me.'),
      new SubToolbarItem('/public/contact-me', 'Contact me', 'Ways you can contact me.'),
      new SubToolbarItem('/public/login', 'Login', 'Enter your credential to access your personal page.'),
      new SubToolbarItem('/public/register-user', 'Register', 'Register a new user.'),
      new SubToolbarItem('/public/forget-passowrd', 'Password Recovery', 'Recover your password if you don\'t remember it.'),
      new SubToolbarItem('/dashboard', 'Dashboard', 'Your personal dashboard'),
      new SubToolbarItem('/dashboard/logged-user-info', 'Your Personal data', 'You can update your information.'),
      new SubToolbarItem('/dashboard/change-password', 'Change Password', 'Change your password.'),
      new SubToolbarItem('**', 'The page is under construction.', 'Thanks for your patient.')
    );

    SharedService.sideMenuList = new Array<MenuItem>(
      new MenuItem('Home', 'Home page', ''),
      new MenuItem('Dashboard', 'Your Personal dashboard', '/dashboard'),
      new MenuItem('Projects', 'My projects', '/public/projects'),
      new MenuItem('Goals', 'My Goals', '/public/goals'),
      new MenuItem('About Me', 'Breifly about my life', '/public/about-me'),
      new MenuItem('Contact Me', 'Ways to contact me', '/public/contact-me'),
    );
  }

  constructor(private dialog: MatDialog) { }

  static getSubToolBarInfo(url: string) {
    const result = SharedService.subToolBarInfo.find(o => o.url === url);
    return result ? result : SharedService.subToolBarInfo.find(o => o.url === '**');
  }

  openDialog(width: number, dialogData: DialogData): Promise<any> {
    return new Promise((resolve: any) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: width.toString(),
        data: dialogData
      });

      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      });
    });
  }
}

SharedService.initialize();
