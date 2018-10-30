import { Router } from '@angular/router';
import { DialogComponent } from './../../ui-design/dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService
  ) { }

  register(userInfo: any) {
    this.userService.registerNewUser(userInfo).subscribe(result => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '350px',
        data: { title: 'New User Registration', message: result.message }
      });

      dialogRef.afterClosed().subscribe(dialogResult => {
        this.router.navigate(['/public/login']);
      });
    });
  }
}
