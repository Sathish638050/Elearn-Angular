import { Router } from '@angular/router';
import { UserAccount } from 'Models/UserAccount';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from 'Services/Profile.service';

@Component({
  selector: 'app-detail-edit',
  templateUrl: './detail-edit.component.html',
  styleUrls: ['./detail-edit.component.css']
})
export class DetailEditComponent implements OnInit {
  Email : string = "";
  fname : string = "";
  lname : string = "";
  phone : string = "";
  user : UserAccount = {
    userId : 0,
    username : "",
    password : '',
    firstName : '',
    lastName : '',
    role : "",
    phone : '',
    email : '',
    userImage : ''
  }
  
  constructor(private obj : ProfileService,private router : Router,private dialogRef:MatDialogRef<DetailEditComponent>){}

  ngOnInit(): void {
    let userid = Number(localStorage.getItem("UserId"));
    this.obj.getUserProfile(userid).subscribe(data=>{
      this.user = data
    });
  }
  EditDetail(user: UserAccount){
    let userId = Number(localStorage.getItem("UserId"));
    console.log(userId,user);
    this.obj.UpdateDetails(userId,user).subscribe(data=>{
      console.log("User Editted");
      this.dialogRef.close(DetailEditComponent);
    })
  }
  CloseModal(){
    this.dialogRef.close(DetailEditComponent);
  }

}
