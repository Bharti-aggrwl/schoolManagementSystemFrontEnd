import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user : any
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }
  getUser(){
    this.userService.getUser().subscribe(user =>{
      console.log(user);
      this.user = user;
    },
    errors=>{
      console.log(errors);
    }
    )
  }

}
