import { Router } from '@angular/router';
import { ServiceResponse } from '../models/ServiceResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public static assignLoggedUserInfo(userInfo: any) {
    if (userInfo) {
      localStorage.setItem('loggedUser', JSON.stringify(userInfo));
    } else {
      localStorage.setItem('loggedUser', null);
    }
  }

  public static get loggedUserToken(): string {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    return loggedUser ? loggedUser.token : null;
  }
  public static get loggedUserInfo(): any {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    return loggedUser ? loggedUser.userInfo : null;
  }

  public static get isLoggedIn(): boolean {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
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
      this.router.navigate(['/dashboard/']);
    }
  }

  isAvailable(fieldName: string, value: string): Promise<boolean> {
    return new Promise((resolve: any, reject: any) => {
      this.http.get<ServiceResponse>('/api/users/available/' + fieldName + '/' + value)
        .subscribe((result: ServiceResponse) => {
          resolve(result.data.isAvailable);
        }, error => {
          reject(error);
        });
    });
  }

  registerNewUser(userInfo: any): Observable<ServiceResponse> {
    return this.http.post<ServiceResponse>('/api/users/', userInfo).pipe();
  }
}
