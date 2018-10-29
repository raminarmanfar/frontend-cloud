import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logged-user-info',
  templateUrl: './logged-user-info.component.html',
  styleUrls: ['./logged-user-info.component.scss']
})
export class LoggedUserInfoComponent {
  get loggedUserInfo(): any { return UserService.loggedUserInfo; }

  constructor(private router: Router) { }


  submit(contactInfo: any) {
    /*
    this.contactService.addContactInfo(contactInfo).subscribe((result: ServiceResponse) => {
      let popupData: any;
      if (result.success) {
        popupData = { title: 'Contact to the admin', message: result.message };
      } else {
        popupData = { title: 'Contact to the admin', message: result.message };
      }

      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        data: popupData
      });

      // dialogRef.afterClosed().subscribe(dialogResult => {});
    });
    */
  }
}
