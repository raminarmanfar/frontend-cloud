import { FileUploader } from 'ng2-file-upload';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { SharedService } from '../../../../services/shared.service';
import { DialogData } from '../../../../models/DialogData';
import Config from '../../../../Config';
import { UserInfo } from '../../../../models/UserInfo';
import { DataOperation } from '../../../../models/enums/DataOperationEnum';

@Component({
  selector: 'app-user-detail-info',
  templateUrl: './user-detail-info.component.html',
  styleUrls: ['./user-detail-info.component.scss']
})
export class UserDetailInfoComponent implements OnInit {
  private btnConfirmCaption: string;
  private url: any;
  private dataOperation: DataOperation;
  private uploadImageChecked = true;
  private filesToUpload: Array<File> = [];
  private uploader: FileUploader = new FileUploader({ url: Config.imageUploadUrl, itemAlias: 'photo' });
  private userInfo: UserInfo = new UserInfo();

  constructor(
    private sharedService: SharedService,
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.route.params.subscribe(params => this.dataOperation = params['action']);

    if (UserService.selectedUserInfo) {
      this.userInfo = Object.assign({}, UserService.selectedUserInfo);
      console.log(this.dataOperation);
      switch (this.dataOperation) {
        case DataOperation.UpdateLoggedUser: this.btnConfirmCaption = 'Update'; break;
        case DataOperation.AddByAdmin: this.btnConfirmCaption = 'Add'; break;
        case DataOperation.UpdateByAdmin: this.btnConfirmCaption = 'Update'; break;
      }

      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        alert('File uploaded successfully');
      };
    } else {
      this.redirect();
    }
  }

  submit(userInfo: UserInfo) {
    switch (this.dataOperation) {
      case DataOperation.AddByAdmin: this.addNewUser(userInfo); break;
      case DataOperation.UpdateByAdmin: this.updateUserInfo(userInfo); break;
      case DataOperation.UpdateLoggedUser: this.updateUserInfo(userInfo); break;
    }
  }

  addNewUser (userInfo: UserInfo) {

  }

  updateUserInfo (userInfo: UserInfo) {
    let oldImageUrl: string = this.userInfo.imageUrl;
    oldImageUrl = oldImageUrl.substring(oldImageUrl.lastIndexOf('/') + 1);

    const formData: FormData = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append('firstName', userInfo.firstName);
    formData.append('lastName', userInfo.lastName);
    formData.append('email', userInfo.email);
    formData.append('phone', userInfo.phone);
    formData.append('username', userInfo.username);
    formData.append('oldImageUrl', oldImageUrl);
    formData.append('hasImage', this.uploadImageChecked.toString());

    if (files.length > 0) {
      formData.append('photo', files[0], files[0]['name']);
    }

    if (this.dataOperation === DataOperation.UpdateByAdmin) {
      formData.append('password', userInfo.password);
      this.updateUserById(formData);
    } else {
      this.updateLoggedUser(formData);
    }
  }

  updateLoggedUser (formData: any) {
    this.userService.updateUserInfo(formData).subscribe(result => {
      const popupData: DialogData = new DialogData('Update user data', result.message);
      this.sharedService.openDialog(350, popupData).then(dialogResult => {
        UserService.assignLoggedUserInfo(result.data);
        this.router.navigate(['/dashboard']);
      });
    });
  }

  updateUserById (formData: any) {
    console.log(this.userInfo._id);
    this.userService.updateById(this.userInfo._id, formData).subscribe(result => {
      const popupData: DialogData = new DialogData('Update user data', result.message);
      this.sharedService.openDialog(350, popupData).then(dialogResult => {
        this.router.navigate(['/dashboard/manage-users']);
      });
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;

    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  private redirect() {
    switch (this.dataOperation) {
      case DataOperation.AddByAdmin: case DataOperation.UpdateByAdmin: this.router.navigate(['/dashboard/manage-users']); break;
      case DataOperation.UpdateLoggedUser: this.router.navigate(['/dashboard/']); break;
      case DataOperation.RegisterUser: this.router.navigate(['/login']); break;
    }
  }
}
