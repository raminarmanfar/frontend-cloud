import { ServiceResponse } from './../../../models/ServiceResponse';
import { MatDialog, MatInput } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { DialogComponent } from '../../ui-design/dialog/dialog.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor(private contactService: ContactService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  submit(contactInfo: any) {
    this.contactService.addContactInfo(contactInfo).subscribe((result: ServiceResponse) => {
      let popupData: any;
      if (result.success) {
        popupData = { title: 'Contact to the admin', message: result.message };
      } else {
        popupData = { title: 'Contact to the admin', message: result.message };
      }

      const dialogRef = this.dialog.open(DialogComponent, {
        width: '350px',
        data: popupData
      });

      // dialogRef.afterClosed().subscribe(dialogResult => {});
    });
  }
}
