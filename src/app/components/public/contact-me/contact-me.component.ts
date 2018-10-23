import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  submit(contactInfo) {
    const contacts = this.contactService.getAll();
    console.log(contactInfo);
  }
}
