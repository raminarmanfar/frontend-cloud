import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { DialogData } from '../../../models/DialogData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private sharedService: SharedService
  ) { }

  register(userInfo: any) {
    this.userService.registerNewUser(userInfo).subscribe(result => {
      const popupData: DialogData = new DialogData('New User Registration', result.message);
      this.sharedService.openDialog(350, popupData).then(dialogResult => {
        this.router.navigate(['/public/login']);
      });
    });
  }
}
