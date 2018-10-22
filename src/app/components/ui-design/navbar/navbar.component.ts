import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  get menuItems(): Array<MenuItem> { return SharedService.sideMenuList; }

  constructor() { }

  ngOnInit() {
  }

}
