import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { UserService } from '../../../../services/user.service';
import { UserInfo } from '../../../../models/UserInfo';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  private usersList: Array<UserInfo>;

  private displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'role'];
  private dataSource: MatTableDataSource<UserInfo>;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private userService: UserService) {
    this.userService.getAllUsers().then((result: Array<UserInfo>) => {
      this.usersList = result;
      this.dataSource = new MatTableDataSource(this.usersList);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }
}
