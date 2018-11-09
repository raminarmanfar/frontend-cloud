import { MatSidenav, MatDrawer } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { MenuItem } from '../../models/MenuItem';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild('snav') snav: MatSidenav;
  @ViewChild('drawer') drawer: MatDrawer;

  get isLoggedIn(): boolean { return UserService.isLoggedIn; }
  get loggedUserInfo(): any { return UserService.loggedUserInfo; }

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  private screenHeight: number;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight - 56;
    // this.screenWidth = window.innerWidth;
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.onResize();
  }

  get menuItems(): Array<MenuItem> { return SharedService.navbarMenuList; }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  mobBtnClick() {
    this.snav.toggle();
  }
}
