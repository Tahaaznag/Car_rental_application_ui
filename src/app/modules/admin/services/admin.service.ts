import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = ['http://localhost:8080'];

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  postCar(carDto: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/car', carDto, {
      headers: this.createAuthorizationHeader(),
    });
  }
  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    const token = StorageService.getToken();
    console.log(token);
    if (token) {
      return authHeaders.set('Authorization', 'Bearer ' + token);
    }
    return authHeaders;
  }
}
