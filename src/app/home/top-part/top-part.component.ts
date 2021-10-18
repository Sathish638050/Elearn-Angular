import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-part',
  templateUrl: './top-part.component.html',
  styleUrls: ['./top-part.component.css']
})
export class TopPartComponent implements OnInit {
  isLogging = false;
  isStaff = false;
  isAdmin = false;
  isStudent = false;
  constructor() { }

  ngOnInit(): void {
    let jwt = localStorage.getItem('jwt');
    if(jwt != null){
      this.isLogging = true;
    }else{
      this.isLogging = false;
    }
    let role = localStorage.getItem("Role");
    if(role == "Student"){
      this.isStudent = true;
    }else if(role == "Staff"){
      this.isStaff = true;
    }
    else if(role = "Admin"){
       this.isAdmin = true;
    }
  }

  ngDoCheck(): void {
    let jwt = localStorage.getItem('jwt');
    if(jwt != null){
      this.isLogging = true;
    }else{
      this.isLogging = false;
    }
    let role = localStorage.getItem("Role");
    if(role == "Student"){
      this.isStudent = true;
      this.isAdmin = false;
      this.isStaff = false;
    }else if(role == "Staff"){
      this.isStaff = true;
      this.isStudent = false;
      this.isAdmin = false;
    } 
    else if(role = "Admin"){
       this.isAdmin = true;
       this.isStaff = false;
       this.isStudent = false;
    }
  }

}
