import { Router } from '@angular/router';
import { UserAccount } from 'Models/UserAccount';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'Services/Profile.service';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {
  selectFile : string = "";
  selectedFiles : string = '';
  user : UserAccount = {
    userId : 0,
    username : '',
    password : '',
    firstName : '',
    lastName : '',
    email : '',
    phone : '' ,
    userImage : '',
    role : ''
   }
  constructor(private obj : ProfileService,private router:Router,private dialogRef:MatDialogRef<ImageEditComponent>) { }

  ngOnInit(): void {
  }

  onselectFile(event : any){
    console.log(event.target.files[0].name);
    this.selectedFiles =  event.target.files[0].name;
  }

  EditImage(file : string){
    console.log(this.selectedFiles)
    let userId = Number(localStorage.getItem("UserId"));
    this.user.userImage = this.selectedFiles;
    this.obj.UpdateImg(userId,this.user).subscribe(data=>{
      console.log("User Image Updated");
      this.dialogRef.close();
    })
  }
}
