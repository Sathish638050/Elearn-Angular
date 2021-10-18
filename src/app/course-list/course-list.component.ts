import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'Models/Course';
import { CourseService } from 'Services/course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList:Course[] = [];
  isCourse = true;
  isMyCourse = false; 
  isStudent = false;
  isAdmin = false;
  isStaff = false;
  emptyList = false;

  constructor(private obj:CourseService,private router:Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("Role");
    console.log(this.router.url);
    if(this.router.url == "/courselist"){
      if(role == "Student"){
        this.isStudent = true;
        this.isAdmin = false;
        this.isStaff = false;
      }else if(role == "Staff"){
        this.isStaff = true;
        this.isStudent = false;
        this.isAdmin = false
      }else if(role == "Admin"){
        this.isAdmin = true;
        this.isStaff = false;
        this.isStudent = false;
      }
      {{debugger}}
      this.isCourse = true;
      this.isMyCourse = false;
      this.obj.getAllCourse().subscribe(data => {
        this.courseList = data; 
        console.log(data);
      })
    }else{
      {{debugger}}
      let role = localStorage.getItem("Role");
      if(role == "Student"){
        this.isStudent = true;
        this.isAdmin = false;
        this.isStaff = false;
        this.isMyCourse = true;
        this.isCourse = false;
        let UserId = Number(localStorage.getItem("UserId"));
        this.obj.getEnrolledCourse(UserId).subscribe(data=>{
          if(data[0] == null){
            this.emptyList = true;
          }
        this.courseList = data;
        })
        {{debugger}}
      }else if(role == "Staff"){
        this.isStaff = true;
        this.isAdmin = false;
        this.isStudent = false;
        this.isMyCourse = true;
        this.isCourse = false;
        let userId = Number(localStorage.getItem("UserId"))
        this.obj.getAddedCourse(userId).subscribe(data=>{
          if(data[0] == null){
            this.emptyList = true;
          }
          this.courseList = data;
        })
      }
      
    }
    
  }

}
