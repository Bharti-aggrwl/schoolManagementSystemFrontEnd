import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {
  baseUrl ='http://localhost:8081'
  type: string = "password"; string = "email";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  credentials = {
    // username:'',
    email:'',
    password:''
  }
  user : any
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit()
  {
    console.log("working");
    if((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!= null && this.credentials.password!=null))
    {
      console.log("submit form to server");
      // genrate token code
      
    }
    else{
      console.log("values are empty");
    }
  }
  getUser(){
    this.userService.getUser().subscribe(
      user=>{
  console.log(user);
  this.user=user;
      },
      error=>{
  console.log(error);
      }
    )
  }

}
