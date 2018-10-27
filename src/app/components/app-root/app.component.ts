import { MatSidenav, MatDrawer } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';
import { SubtoolbarInfo } from 'src/app/models/subtoolbar-info';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { MenuItem } from 'src/app/models/MenuItem';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild('snav') snav: MatSidenav;
  @ViewChild('drawer') drawer: MatDrawer;
  get subToolbarInfo(): SubtoolbarInfo { return SharedService.subToolbarInfo; }
  set subToolbarInfo(subtoolbarInfo: SubtoolbarInfo) { SharedService.subToolbarInfo = subtoolbarInfo; }
  get isLoggedIn(): boolean { return UserService.isLoggedIn; }
  get loggedUserInfo(): any { return UserService.loggedUserInfo; }

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  get menuItems(): Array<MenuItem> { return SharedService.sideMenuList; }

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.onRouteChange();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  mobBtnClick() {
    this.snav.toggle();
  }

  private onRouteChange() {
    this.router.events.subscribe(val => {
      // see also
      if (val instanceof NavigationEnd) {
        switch (val.url) {
          case '/':
            this.subToolbarInfo.title = 'Welcome to my personal website!';
            this.subToolbarInfo.subTitle = '';
            break;
          case '/public/projects':
            this.subToolbarInfo.title = 'Projects';
            this.subToolbarInfo.subTitle = 'List of my programming projects.';
            break;
          case '/public/goals':
            this.subToolbarInfo.title = 'Goals';
            this.subToolbarInfo.subTitle = 'My goals and vision.';
            break;
          case '/public/about-me':
            this.subToolbarInfo.title = 'About me';
            this.subToolbarInfo.subTitle = 'Briefly about me.';
            break;
          case '/public/contact-me':
            this.subToolbarInfo.title = 'Contact me';
            this.subToolbarInfo.subTitle = 'Ways you can contact me.';
            break;
          default:
            this.subToolbarInfo.title = 'The page is under construction.';
            this.subToolbarInfo.subTitle = 'Thanks for your patient.';
            break;
        }
      }
    });
  }
}
