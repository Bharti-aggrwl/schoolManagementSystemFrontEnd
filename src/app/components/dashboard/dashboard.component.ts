import { Component, OnInit } from '@angular/core';
import { TopWidgetComponent } from '../top-widget/top-widget.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }
getUser(){
  this.userService.getUser().subscribe(
    user=>{
console.log(user);
    },
    error=>{
console.log(error);
    }
  )
}
}
