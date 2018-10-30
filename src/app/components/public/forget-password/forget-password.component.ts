import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ServiceResponse } from '../../../models/ServiceResponse';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  private error: any = undefined;

  constructor(private userService: UserService) { }

  loginClick(usernameOrEmail: string, password: string) {
    const loginResult = this.userService.login(usernameOrEmail, password);
    loginResult.subscribe((result: ServiceResponse) => {
      this.userService.afterLoginSuccess(result);
    }, (errObj: any) => {
      this.error = errObj.error;
    });
  }

  onTextChange() {
    this.error = false;
  }
}
