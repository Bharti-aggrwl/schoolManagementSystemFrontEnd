import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';
@Component({
  selector: 'app-registration-new',
  templateUrl: './registration-new.component.html',
  styleUrls: ['./registration-new.component.css']
})
export class RegistrationNewComponent implements OnInit {
  title='Post Api call'
  studentModel:any;
  type: string='';
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  constructor(private http:HttpClient){
    this.studentModel={
      studentId:'',
      streamId:'',
        loginId:'',
      admissionYear:'',
     enrollStage:'',
     currentStage:'',
      firstName:'',
        middleName:'',
       lastName:'',
       emailId:'',
       mobile:'',
     registrationNo:'',
     photoPath:'',
      photoExt:'',
      isConnectedToMail:'',
       creationDate:'',
      activeStatus:'',
      lockingVersion:''
    }
  }

  ngOnInit(): void {
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  // onSubmit()
  // {
  //   console.log("working");
  // }
  
  addStudent(){
    console.log("add student method working");
    this.studentModel={
      studentId:this.studentModel.studentId,
      streamId:this.studentModel.streamId,
     loginId:this.studentModel.loginId,
    admissionYear:this.studentModel.admissionYear,
     enrollStage:this.studentModel.enrollStage,
     currentStage:this.studentModel.currentStage,
      firstName:this.studentModel.firstName,
        middleName:this.studentModel.middleName,
       lastName:this.studentModel.lastName,
       emailId:this.studentModel.emailId,
       mobile:this.studentModel.mobile,
     registrationNo:this.studentModel.registrationNo,
     photoPath:this.studentModel.photoPath,
      photoExt:this.studentModel.photoExt,
      isConnectedToMail:this.studentModel.isConnectedToMail,
       creationDate:this.studentModel.creationDate,
      activeStatus:this.studentModel.activeStatus,
      lockingVersion:this.studentModel.lockingVersion
    }
   }
  
  saveUser(){
    console.log("button click working");
    // console.log(input.value);
    this.http.post('http://localhost:8081/api/registration/',this.studentModel).subscribe((result)=>{
      alert("user saved successfully");
    })
  }

}
