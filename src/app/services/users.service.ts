import { ServiceResponse } from './../models/ServiceResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(usernameOrEmail: string, password: string): Observable<ServiceResponse> {
    const user = { usernameOrEmail: usernameOrEmail, password: password };
    return this.http.post<ServiceResponse>('/api/users/login', user);
  }
}
