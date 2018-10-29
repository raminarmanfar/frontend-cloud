import { ServiceResponse } from './../../../models/ServiceResponse';
import { MatDialog } from '@angular/material';
import { Component, } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { DialogComponent } from '../../ui-design/dialog/dialog.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  icons = [
    { tooltip: 'LinkedIn', url: 'https://de.linkedin.com/in/ramin-armanfar', image: 'linkedin.png' },
    { tooltip: 'Xing', url: 'https://www.xing.com/profile/Ramin_Armanfar', image: 'xing.png' },
    { tooltip: 'Github', url: 'https://github.com/raminarmanfar?tab=activity', image: 'github.png' },
    { tooltip: 'Twitter', url: 'https://twitter.com/raminarmanfar', image: 'twitter.png' },
    { tooltip: 'Facebook', url: 'https://www.facebook.com/ram.ram.in', image: 'facebook.png' },
    { tooltip: 'My personal page at Sabanci university', url: 'http://myweb.sabanciuniv.edu/raminarmanfar/', image: 'sabanci.jpg' }
  ];

  constructor(private contactService: ContactService, public dialog: MatDialog) { }

  submit(contactInfo: any) {
    this.contactService.addContactInfo(contactInfo).subscribe((result: ServiceResponse) => {
      const popupData: any = { title: 'Contact to the admin', message: result.message };

      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        data: popupData
      });

      // dialogRef.afterClosed().subscribe(dialogResult => {});
    });
  }
}
