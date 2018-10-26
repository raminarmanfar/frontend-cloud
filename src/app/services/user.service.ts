import { ServiceResponse } from '../models/ServiceResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(usernameOrEmail: string, password: string): Observable<ServiceResponse> {
    const credentials = { user: { usernameOrEmail: usernameOrEmail, password: password } };
    return this.http.post<ServiceResponse>('/api/users/login', credentials).pipe();
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
}
