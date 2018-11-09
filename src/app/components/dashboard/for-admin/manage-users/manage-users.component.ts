import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { UserService } from '../../../../services/user.service';
import { UserInfo } from '../../../../models/UserInfo';

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


  constructor(private userService: UserService) {
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

  onUpdate(selectedUser: UserInfo) {

  }

  onDelete(selectedUser: UserInfo) {

  }
}
