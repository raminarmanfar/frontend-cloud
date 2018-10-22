import { Component, OnInit, OnDestroy, ChangeDetectorRef, Input, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnDestroy {
  @Input() isListBtnClick: boolean;
  @ViewChild('snav') snav: ElementRef;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  check(matSidenav: MatSidenav) {
    if (this.isListBtnClick) {
      matSidenav.toggle();
    }
    return false;
  }
}
