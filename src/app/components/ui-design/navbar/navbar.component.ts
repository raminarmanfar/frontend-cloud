import { Component } from '@angular/core';
import { MenuItem } from '../../../models/MenuItem';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  get menuItems(): Array<MenuItem> { return SharedService.navbarMenuList; }

  constructor() { }
}
