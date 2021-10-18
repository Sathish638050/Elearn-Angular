import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewStaff } from 'Models/NewStaff';
import { UserAccount } from 'Models/UserAccount';
import { NewStaffService } from 'Services/new-staff.service';

@Component({
  selector: 'app-add-new-satff',
  templateUrl: './add-new-satff.component.html',
  styleUrls: ['./add-new-satff.component.css']
})
export class AddNewSatffComponent implements OnInit {

  userexist = "";

  newuser : NewStaff = {
    sid : 0,
    name : '',
    username : '',
    password : '',
    phone : '',
    high : '',
    department : '',
    college : '',
    experience : '',
    status : '',
    userImage : '',
    email : ''
}
user : NewStaff = {
  sid : 0,
  name : '',
  username : '',
  password : '',
  phone : '',
  high : '',
  department : '',
  college : '',
  experience : '',
  status : '',
  userImage : '',
  email : ''
}
user1:UserAccount = {
  userId : 0,
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  phone: '',
  email: '',
  role: '',
  userImage : ''
}

  constructor(private obj : NewStaffService,private router : Router) { }

  ngOnInit(): void {
  }
  AddNewStaff(newuser : NewStaff){
    newuser.userImage = "userimg.png";
    newuser.status = "false";
    this.obj.AddReq(newuser).subscribe(data =>{
      console.log("User Request Successfully");
      this.router.navigate(["/"]);
    })
  }
  checkUsername(e : any){
    this.obj.checkUsername1(e.target.value).subscribe(data => {
      this.user1 = data;
      
      console.log(this.user1);
      if(this.user1!= null){
        this.userexist = "Username is Already Exist";
      }else{
        this.obj.checkUsername2(e.target.value).subscribe(data1 => {
          
          this.user = data1[0];
          if(this.user != null){
            this.userexist = "Username is Already Exist";
          }else{
            this.userexist = "";
          }
        })
      }
    })
  }
}
