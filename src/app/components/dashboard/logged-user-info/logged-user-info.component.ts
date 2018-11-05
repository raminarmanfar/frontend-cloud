import { FileUploader } from 'ng2-file-upload';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { DialogData } from '../../../models/DialogData';
import Config from '../../../Config';

@Component({
  selector: 'app-logged-user-info',
  templateUrl: './logged-user-info.component.html',
  styleUrls: ['./logged-user-info.component.scss']
})
export class LoggedUserInfoComponent implements OnInit {
  private uploadImageChecked = true;
  private filesToUpload: Array<File> = [];
  private uploader: FileUploader = new FileUploader({url: Config.imageUploadUrl, itemAlias: 'photo'});
  get loggedUserInfo(): any { return UserService.loggedUserInfo; }

  constructor(
    private sharedService: SharedService,
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }


  update(userInfo: any) {
    let oldImageUrl: string = this.loggedUserInfo.imageUrl;
    oldImageUrl = this.uploadImageChecked ? oldImageUrl.substring(oldImageUrl.lastIndexOf('/') + 1) : '';

    const formData: FormData = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append('firstName', userInfo.firstName);
    formData.append('lastName', userInfo.lastName);
    formData.append('email', userInfo.email);
    formData.append('phone', userInfo.phone);
    formData.append('username', userInfo.username);
    formData.append('oldImageUrl', oldImageUrl);
    if (files.length > 0) {
      formData.append('photo', files[0], files[0]['name']);
    }
    this.userService.updateUserInfo(formData).subscribe(result => {
      const popupData: DialogData = new DialogData('Update user data', result.message);
      this.sharedService.openDialog(350, popupData).then(dialogResult => {
        UserService.assignLoggedUserInfo(result.data);
        this.router.navigate(['/dashboard/']);
      });
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
