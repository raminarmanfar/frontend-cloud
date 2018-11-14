import { DataOperation } from './../../../../models/enums/DataOperationEnum';
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { UserService } from '../../../../services/user.service';
import { UserInfo } from '../../../../models/UserInfo';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManageUsersComponent implements OnInit {
  isLoadingResults = false;
  private usersList: Array<UserInfo>;

  private displayedColumns: string[] = ['fullName', 'email', 'phone', 'role', 'update', 'delete', 'actions'];
  private dataSource: MatTableDataSource<UserInfo>;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
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


  onAdd() {
    UserService.selectedUserInfo = new UserInfo();
    this.router.navigate(['/dashboard/user-details/' + DataOperation.AddByAdmin]);
  }

  onUpdate(selectedUser: UserInfo) {
    UserService.selectedUserInfo = selectedUser;
    this.router.navigate(['/dashboard/user-details/' + DataOperation.UpdateByAdmin]);
  }

  onDelete(selectedUser: UserInfo) {

  }
}
