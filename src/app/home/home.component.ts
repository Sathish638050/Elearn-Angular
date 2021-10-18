import { Class } from 'Models/Class';
import { Course } from 'Models/Course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogging = false;
  isAdmin = false;
  isStudent = false;
  isStaff = false;
  
  
  

  constructor() { }

  ngOnInit(): void {
    
    let jwt = localStorage.getItem('jwt');
    let Role = localStorage.getItem('Role');
    if(jwt == null){
      this.isLogging = false;
    }else{
      if(Role == "Admin"){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
      this.isLogging = true;
      
    }
  }
  ngDoCheck(): void {
    let jwt = localStorage.getItem('jwt');
    let role = localStorage.getItem("Role");
    if(jwt != null){
      if(role == "Admin"){
        this.isAdmin = true
      }else{
        this.isAdmin = false;
      }
      this.isLogging = true;
    }else{
      this.isLogging = false;
    }
  }
}
