import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { DialogData } from '../../../models/DialogData';
import { FileUploader } from 'ng2-file-upload';
import Config from '../../../Config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private uploader: FileUploader = new FileUploader({url: Config.imageUploadUrl, itemAlias: 'photo'});

  constructor(
    private router: Router,
    private userService: UserService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

  register(userInfo: any) {
    console.log(userInfo);
    this.uploader.uploadAll();
    this.userService.registerNewUser(userInfo).subscribe(result => {
      const popupData: DialogData = new DialogData('New User Registration', result.message);
      this.sharedService.openDialog(350, popupData).then(dialogResult => {
        this.router.navigate(['/public/login']);
      });
    });
  }
}
