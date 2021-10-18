import { DetailEditComponent } from './../detail-edit/detail-edit.component';
import { ImageEditComponent } from './../image-edit/image-edit.component';
import { ProfileService } from './../../../Services/Profile.service';
import { UserAccount } from 'Models/UserAccount';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  edituser : UserAccount = {
    userId : 0,
    username : '',
    password : '',
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    role : '',
    userImage : ''
  }
  userDetail : UserAccount = {
    userId : 0,
    username : '',
    password : '',
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    role : '',
    userImage : ''
  }
  constructor(private obj : ProfileService,private router : Router,private dialogRef : MatDialog) { }

  ngOnInit(): void {
    let userId = Number(localStorage.getItem("UserId"));
    this.obj.getUserProfile(userId).subscribe(data=> {
      this.userDetail = data;
      console.log(this.userDetail)
    })
  }

  OpenDialog(){
      this.dialogRef.open(ImageEditComponent);
  }
  Refresh(){
    let userId = Number(localStorage.getItem("UserId"));
    this.obj.getUserProfile(userId).subscribe(data=> {
      this.userDetail = data;
      console.log(this.userDetail)
    })
  }
  OpenEditDialog(){
    this.dialogRef.open(DetailEditComponent,{
      data : {
        list : this.userDetail
      }
    });
  }
}
