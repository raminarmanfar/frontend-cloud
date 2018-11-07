import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/ui-design/dialog/dialog.component';
import { DialogData } from '../models/DialogData';
import { MenuItem } from '../models/MenuItem';
import { SubToolbarItem } from '../models/SubToolbarItem';
import { ServiceResponse } from '../models/ServiceResponse';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static subToolBarInfo: Array<SubToolbarItem>;
  navbarMenuList: Array<MenuItem>;

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
  }

  constructor(private dialog: MatDialog, private http: HttpClient) {
    this.getMenuList().then(menuList => this.navbarMenuList = menuList);
  }

  static getSubToolBarInfo(url: string) {
    const result = SharedService.subToolBarInfo.find(o => o.url === url);
    return result ? result : SharedService.subToolBarInfo.find(o => o.url === '**');
  }

  getMenuList (): Promise<Array<MenuItem>> {
    return new Promise((resolve: any) => this.http.get('/api/menus/').subscribe((result: ServiceResponse) => {
      resolve(result.data);
    }));
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
