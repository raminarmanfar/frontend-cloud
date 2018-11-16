import { UserInfo } from './../models/UserInfo';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/ui-design/dialog/dialog.component';
import { DialogData } from '../models/DialogData';
import { MenuItem } from '../models/MenuItem';
import { SubToolbarItem } from '../models/SubToolbarItem';
import { ServiceResponse } from '../models/ServiceResponse';
import { UserRoleEnum } from 'src/app/models/enums/UserRoleEnum';
import { DataOperation } from '../models/enums/DataOperationEnum';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private static navbarMenuItems: Array<MenuItem>;
  static subToolBarInfo: Array<SubToolbarItem>;

  static get navbarMenuList(): Array<MenuItem> | null {
    const currentUserRole: UserRoleEnum = UserService.loggedUserInfo ? UserService.loggedUserInfo.role : UserRoleEnum.Public;
    return SharedService.navbarMenuItems ?
      SharedService.navbarMenuItems.filter(result => result.accessibleBy.includes(currentUserRole)) : null;
  }

  static get adminAndUserSharedRoutes(): Array<string> {
    return [
      '/dashboard',
      '/dashboard/user-details/' + DataOperation.UpdateLoggedUser,
      '/dashboard/change-password'
    ];
  }

  static getSubToolBarInfo(url: string) {
    const result = SharedService.subToolBarInfo.find(o => o.url === url);
    return result ? result : SharedService.subToolBarInfo.find(o => o.url === '**');
  }

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
      new SubToolbarItem('/dashboard/user-details/' + DataOperation.UpdateLoggedUser,
        'Update your personal data', 'Your information list to be updated.'),
      new SubToolbarItem('/dashboard/user-details/' + DataOperation.AddByAdmin,
        'Add new user', 'New user personal information.'),
      new SubToolbarItem('/dashboard/user-details/' + DataOperation.UpdateByAdmin,
        'Update selected user personal data', 'Selected user personal information to be updated.'),
      new SubToolbarItem('/dashboard/change-password', 'Change Password', 'Change your password.'),
      new SubToolbarItem('/dashboard', 'User Dashboard', 'Your personal applications.'),
      new SubToolbarItem('/dashboard', 'Admin Dashboard', 'Your personal applications.'),
      new SubToolbarItem('/dashboard/manage-users', 'Users List', 'Manage users information.'),
      new SubToolbarItem('/dashboard/add-update-user/add', 'Add new user', 'Fill in the form to add new user.'),
      new SubToolbarItem('/dashboard/add-update-user/update', 'Update selected user information', 'Modify user information.'),
      new SubToolbarItem('**', 'The page is under construction.', 'Thanks for your patient.')
    );
  }

  constructor(private dialog: MatDialog, private http: HttpClient) {
    this.getMenuList().then(menuList => SharedService.navbarMenuItems = menuList);
  }

  getMenuList(): Promise<Array<MenuItem>> {
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
