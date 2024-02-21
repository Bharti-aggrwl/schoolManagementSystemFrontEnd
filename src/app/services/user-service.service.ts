import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
baseUrl ='http://localhost:8081'
  constructor(private http : HttpClient) { }
  getUser()
  {
    return this.http.get(`${this.baseUrl}/api/user/`)
  }

}
