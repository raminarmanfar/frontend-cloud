import { UserRoleEnum } from '../models/enums/UserRoleEnum';
import { Router } from '@angular/router';
import { ServiceResponse } from '../models/ServiceResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static _selectedUserInfo: UserInfo;
  static get selectedUserInfo(): UserInfo { return UserService._selectedUserInfo; }
  static set selectedUserInfo(userInfo: UserInfo) { UserService._selectedUserInfo = userInfo; }

  private static get header(): any { return { 'x-access-token': UserService.loggedUserToken }; }
  public static assignLoggedUserInfo(userInfoAndToken: any) {
    if (userInfoAndToken) {
      sessionStorage.setItem('loggedUser', JSON.stringify(userInfoAndToken));
    } else {
      sessionStorage.setItem('loggedUser', null);
    }
  }

  public static get loggedUserToken(): string {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    return loggedUser ? loggedUser.token : null;
  }
  public static get loggedUserInfo(): UserInfo {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    return loggedUser ? loggedUser.userInfo : null;
  }

  public static get isLoggedIn(): boolean {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    return loggedUser ? true : false;
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(usernameOrEmail: string, password: string): Observable<ServiceResponse> {
    const credentials = { usernameOrEmail: usernameOrEmail, password: password };
    return this.http.post<ServiceResponse>('/api/users/login', credentials).pipe();
  }

  afterLoginSuccess(result: any) {
    if (result && result.success) {
      UserService.assignLoggedUserInfo(result.data);
      this.router.navigate(['/dashboard']);
    }
  }

  isAvailable(fieldName: string, value: string): Promise<boolean> {
    return new Promise((resolve: any, reject: any) => {
      this.http.get<ServiceResponse>('/api/users/available/' + fieldName + '/' + value)
        .subscribe((result: ServiceResponse) => {
          resolve(result.data.isAvailable);
        }, error => reject(error));
    });
  }

  registerNewUser(userInfo: any): Observable<ServiceResponse> {
    return this.http.post<ServiceResponse>('/api/users/', userInfo).pipe();
  }

  updateUserInfo(userInfo: any): Observable<ServiceResponse> {
    return this.http.put<ServiceResponse>('/api/users/current', userInfo, { headers: UserService.header }).pipe();
  }

  updateById(userId: string, userInfo: any): Observable<ServiceResponse> {
    return this.http.put<ServiceResponse>('/api/users/' + userId, userInfo, { headers: UserService.header }).pipe();
  }

  changePassword(username: string, currentPassword: string, newPassword: string): Observable<ServiceResponse> {
    const params = { username, currentPassword, newPassword };
    return this.http.post<ServiceResponse>('/api/users/change-password', params, { headers: UserService.header }).pipe();
  }

  getAllUsers(): Promise<Array<UserInfo>> {
    return new Promise((resolve: any, reject: any) => {
      this.http.get<ServiceResponse>('/api/users/all', { headers: UserService.header }).subscribe((result: ServiceResponse) => {
        result.success ? resolve(result.data) : reject(result);
      }, error => reject(error));
    });
  }
}
