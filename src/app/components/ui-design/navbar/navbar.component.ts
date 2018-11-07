import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';
import { SharedService } from '../../../services/shared.service';
import { UserService } from '../../../services/user.service';
import { UserRoleEnum } from '../../../models/enums/UserRoleEnum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private sharedService: SharedService) { }

  get menuItems(): Array<MenuItem> { return this.sharedService.navbarMenuList; }

  checkCondition(item: MenuItem): boolean {
    const currentUserRole: UserRoleEnum = UserService.loggedUserInfo.role;
    console.log(currentUserRole);

    return item.accessibleBy.includes(currentUserRole);
  }

}
