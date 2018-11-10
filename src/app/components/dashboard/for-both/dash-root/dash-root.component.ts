import { Component } from '@angular/core';
import { UserRoleEnum } from '../../../../models/enums/UserRoleEnum';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-dash-root',
  templateUrl: './dash-root.component.html',
  styleUrls: ['./dash-root.component.scss']
})
export class DashRootComponent {
  get isUserAdmin(): boolean { return UserService.loggedUserInfo.role === UserRoleEnum.Admin; }

  constructor() { }
}
