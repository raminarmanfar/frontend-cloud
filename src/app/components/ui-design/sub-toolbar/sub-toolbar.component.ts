import { Component, OnInit, Input } from '@angular/core';
import { SubtoolbarInfo } from 'src/app/models/subtoolbar-info';

@Component({
  selector: 'app-sub-toolbar',
  templateUrl: './sub-toolbar.component.html',
  styleUrls: ['./sub-toolbar.component.scss']
})
export class SubToolbarComponent implements OnInit {
  @Input() info: SubtoolbarInfo;

  constructor() { }

  ngOnInit() {
  }

}
