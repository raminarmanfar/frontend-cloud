import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { UserService } from '../../../../services/user.service';
import { UserInfo } from '../../../../models/UserInfo';
import { PopupAddUpdateUserComponent } from '../popup-add-update-user/popup-add-update-user.component';
import { DialogData } from '../../../../models/DialogData';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManageUsersComponent {
  isLoadingResults = false;
  private usersList: Array<UserInfo>;

  private displayedColumns: string[] = ['fullName', 'email', 'phone', 'role', 'update', 'delete', 'actions'];
  private dataSource: MatTableDataSource<UserInfo>;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private userService: UserService, private dialog: MatDialog) {
    this.isLoadingResults = true;
    this.userService.getAllUsers().then((result: Array<UserInfo>) => {
      this.usersList = result;
      this.dataSource = new MatTableDataSource(this.usersList);
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
    });
  }

  getTooltip(action: string, selectedUser: UserInfo): string {
    return action + ' ' + selectedUser.fullName;
  }

  raisePopup(width: number): Promise<any> {
    return new Promise((resolve: any) => {
      const dialogRef = this.dialog.open(PopupAddUpdateUserComponent, {
        width: width.toString(),
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      });
    });
  }


  onAdd() {
    this.raisePopup(400);
  }

  onUpdate(selectedUser: UserInfo) {

  }

  onDelete(selectedUser: UserInfo) {

  }
}
