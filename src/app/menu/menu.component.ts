import { Router } from '@angular/router';
import { Component, OnInit,OnChanges,DoCheck } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnChanges,DoCheck {
UserProfile = localStorage.getItem("UserImage");
MenuImage = "";
isLogging : boolean = false;
isAdmin = false;
isStudent = false;
isStaff = false;
  constructor(private router : Router) { }

  ngDoCheck(){ 
    let a = localStorage.getItem('jwt');
    if(a != null){
      this.isLogging = true;
    }else{
      this.isLogging = false;
    }
    let b = localStorage.getItem('UserImage');
    let c = "assets/images/"+b;
    this.MenuImage = c;
    var role = localStorage.getItem("Role");
    if(role == "Admin"){
      this.isAdmin = true;
      this.isStaff = false;
      this.isStudent = false;
    }
    else if(role == "Student"){
      this.isStudent = true;
      this.isStaff = false;
      this.isAdmin = false;
    }
    else if(role == "Staff"){
      this.isStaff = true;
      this.isStudent = true;
      this.isAdmin = false;
    }
  }

  Logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnChanges():void{
    let a = localStorage.getItem('jwt');
    if(a != null){
      this.isLogging = true;
    }else{
      this.isLogging = false;
    }
    var b =localStorage.getItem('userImage');
    console.log(b); 
  }

  ngOnInit(): void {
      let a = localStorage.getItem('jwt');
      if(a != null){
        this.isLogging = true;
      }else{
        this.isLogging = false;
      }
      var b = localStorage.getItem("userId");
      console.log(b);
  }

  ngAfterViewInit(){
    var a = localStorage.getItem("jwt");
    if(a != null){
      this.isLogging = true;
    }else{
      this.isLogging = false;
    }
  }

  ngAfterViewChecked(){
    var a = localStorage.getItem("jwt");
    if(a != null){
      this.isLogging = true;
    }else{
      this.isLogging = false;
    }
  }

}
