import { SharedService } from './../../services/shared.service';
import { Component } from '@angular/core';
import { SubtoolbarInfo } from 'src/app/models/subtoolbar-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get subToolbarInfo (): SubtoolbarInfo { return SharedService.subToolbarInfo; }
}
