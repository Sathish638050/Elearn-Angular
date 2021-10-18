import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from 'Models/UserAccount';
import { LoginService } from 'Services/login.service';
import { RegisterService } from 'Services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 selectedFiles : string = "";
 userexist ="";
user :UserAccount = {
  userId : 0,
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  phone: '',
  email: '',
  role: "Student",
  userImage : ''
};
user1 : UserAccount = {
  userId : 0,
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  phone: '',
  email: '',
  role: "Student",
  userImage : ''
};
  constructor(private obj : RegisterService,private router : Router) { }

  ngOnInit(): void {
  }

  checkUsername(event : any){
    this.obj.checkUsername(event.target.value).subscribe(data=>{
      this.user1 = data;
      if(this.user1!=null){
        this.userexist = "Username Already Exist";
      }else{
        this.userexist = "";
      }
      console.log(this.user1);
    });
  }

  onselectFile(event : any){
    console.log(event.target.files[0].name);
    this.selectedFiles =  event.target.files[0].name;
  }

  

  Register(user:UserAccount):void{
    user.userId = 0;
    user.userImage = "userimg.png"
    this.obj.Register(user).subscribe(data =>{
      console.log("Registration Successfully");
      this.router.navigate(["/login"]);
    })
    console.log(user)
  }
}

