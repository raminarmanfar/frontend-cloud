import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserService } from '../../services/user.service';
import { UserRoleEnum } from '../../models/enums/UserRoleEnum';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log(state.url);
    // redirect and return false
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/public/login']);
      return false;
    } else if (UserService.loggedUserInfo.role === UserRoleEnum.Admin && state.url === '/dashboard/user-page') {
      this.router.navigate(['/dashboard/admin-page']);
      return false;
    }

    return true;
  }
}
