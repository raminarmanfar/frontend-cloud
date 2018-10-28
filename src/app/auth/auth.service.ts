import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {

  constructor() { }

  get isLoggedIn() {
    return UserService.isLoggedIn;
  }

  get isSuperAdmin() {
    return false;
  }

}
