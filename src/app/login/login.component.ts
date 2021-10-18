import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'Models/Login';
import { LoginService } from 'Services/login.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  serverError = false;
  user:Login={
    Username :'',
    Password : ''
  }

  constructor(private obj:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  login(login:Login):void{
    this.obj.Login(login).subscribe(data => {
      console.log(data);
      {{debugger}}
      if(data == "Invalid"){
        this.serverError = true;
      }else{
        const token = data;
        localStorage.setItem("jwt",token);
        this.obj.GetDetail(login).subscribe(data => { 
          {{debugger}}
          localStorage.setItem("UserId",data.userId);
          localStorage.setItem("Role",data.role);
          localStorage.setItem("UserImage",data.userImage)
          this.router.navigate(['/']).then(()=>{
            window.location.reload();
          });
        });
      }
    })
  }
}
