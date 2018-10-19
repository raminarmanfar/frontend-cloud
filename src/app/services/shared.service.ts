import { Injectable } from '@angular/core';
import { SubtoolbarInfo } from '../models/subtoolbar-info';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static subToolbarInfo: SubtoolbarInfo;

  constructor() { }
  static initialize() {
    SharedService.subToolbarInfo = new SubtoolbarInfo(
      'Welcome to my personal website!',
      'Ramin Armanfar'
    );
  }
}

SharedService.initialize();
