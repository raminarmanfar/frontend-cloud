import { Component } from '@angular/core';

@Component({
  selector: 'app-logged-user-info',
  templateUrl: './logged-user-info.component.html',
  styleUrls: ['./logged-user-info.component.scss']
})
export class LoggedUserInfoComponent {

  constructor() { }

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
