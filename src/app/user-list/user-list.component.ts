import { RegisterService } from 'Services/register.service';
import { NewStaff } from 'Models/NewStaff';
import { UserAccount } from 'Models/UserAccount';
import { AdminService } from './../../../Services/Admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user : UserAccount = {
    userId : 0,
    username : '',
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    userImage : '',
    role : '',
    password : ''
  }
  isStudent = false;
  isStaff = false;
  isNewStaff = false;
  userlist : UserAccount[] =[];
  newreq : NewStaff[] = [];
  constructor(private router:Router,private obj : AdminService,private obj1 : RegisterService) { }

  Accept(a : NewStaff){
    this.user.username = a.username;
    this.user.password = a.password;
    this.user.email = a.email;
    this.user.phone = a.phone;
    this.user.firstName = a.name;
    this.user.lastName = a.name;
    this.user.userImage = a.userImage;
    this.user.role = "Staff";
    console.log(this.user);
    this.obj1.Register(this.user).subscribe(data=>{
      this.obj.Accept(a.sid).subscribe(data1=>{
        this.router.navigate(['/staff-list']);
      })
    })
  }


  ngOnInit(): void {
    if(this.router.url == "/student-list"){
      this.obj.getStudentList().subscribe(data=>{
        this.userlist = data;
        this.isStudent = true;
        this.isStaff = false;
        this.isNewStaff = false;
      })
    }else if(this.router.url == "/staff-list"){
      this.obj.getStaffList().subscribe(data=>{
        this.userlist = data
        this.isStaff = true;
        this.isStudent = false;
        this.isNewStaff = false;
      })
    }else if(this.router.url == "/newstaff-list"){
      this.obj.getNewUserList().subscribe(data=>{
        this.newreq = data
        this.isNewStaff = true;
        this.isStaff = false;
        this.isStudent = false;
      })
    }
  }
 
}
