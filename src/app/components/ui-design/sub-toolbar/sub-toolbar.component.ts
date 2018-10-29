import { Component, OnInit, Input } from '@angular/core';
import { SubToolbarItem } from '../../../models/SubToolbarItem';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sub-toolbar',
  templateUrl: './sub-toolbar.component.html',
  styleUrls: ['./sub-toolbar.component.scss']
})
export class SubToolbarComponent implements OnInit {
  private info: SubToolbarItem;

  constructor(private router: Router) {
    this.info = SharedService.getSubToolBarInfo('/');
    this.onRouteChange();
  }

  ngOnInit() {
  }

  private onRouteChange() {
    this.router.events.subscribe(val => {
      // see also
      if (val instanceof NavigationEnd) {
        this.info = SharedService.getSubToolBarInfo(val.url);
      }
    });
  }

}
