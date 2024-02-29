import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { STRING_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  // public studentModel: string;
  //baseUrl ='http://localhost:8081'
  // studentModel = {
  //   studentId:'2k26',
  //    streamId:26,
  //    loginId:26,
  //   admissionYear:2023,
  //    enrollStage:1,
  //    currentStage:1,
  //    firstName:'shivani',
  //   middleName:'kumari',
  //  lastName:'srivastava',
  //    emailId:'shivani@26',
  //    mobile:'79920279126',
  //   photoPath:'/home',
  //    photoExt:'jpeg',
  //   isConnectedToMail:true,
  //   creationDate:'2023-02-27',
  //    activeStatus:true,
  // }

  constructor(private http : HttpClient) { }

//   addStudent(){this.http.post(`${this.baseUrl}/api/registration`,JSON.stringify
//   ({any:this.studentModel}));
// }
// addStudent(data:any){
//  return this.http.post(this.baseUrl+"/api/registration/",data);
// }
}
