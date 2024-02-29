import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
baseUrl ='http://localhost:8081'
user : any
credentials = {
  // username:'',
  email:'shivani.sri140@gmail.com',
  password:'123'
}
  constructor(private http : HttpClient) { }
  getUser()
  {
    // return this.http.get(`${this.baseUrl}/api/user/`)
   return this.http.get(`${this.baseUrl}/login?email=`+this.credentials.email+`&password=`+this.credentials.password);
  // return this.http.get(`${this.baseUrl}/login?email=`+this.user.email+`&password=`+this.user.password);
    
  }

}
