import { Component } from '@angular/core';
import { ServiceResponse } from '../../../models/ServiceResponse';
import { ContactService } from '../../../services/contact.service';
import { SharedService } from '../../../services/shared.service';
import { DialogData } from '../../../models/DialogData';

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

  constructor(private contactService: ContactService, private sharedService: SharedService) { }

  submit(contactInfo: any) {
    this.contactService.addContactInfo(contactInfo).subscribe((result: ServiceResponse) => {
      const popupData: DialogData = new DialogData('Contact to the admin', result.message);
      this.sharedService.openDialog(400, popupData);
    });
  }
}
