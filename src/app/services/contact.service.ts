import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ServiceResponse } from '../models/ServiceResponse';
import Config from '../Config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(Config.services.contacts);
  }

  getById(id: string): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(Config.services.contacts + id);
  }

  addContactInfo(contactInfo: any): Observable<ServiceResponse> {
    return this.http.post<ServiceResponse>(Config.services.contacts, contactInfo).pipe();
  }
}
