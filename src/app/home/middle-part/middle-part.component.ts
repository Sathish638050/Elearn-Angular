import { ClassService } from './../../../../Services/Class.service';
import { Class } from 'Models/Class';
import { Course } from 'Models/Course';
import { CourseService } from 'Services/course-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-part',
  templateUrl: './middle-part.component.html',
  styleUrls: ['./middle-part.component.css']
})
export class MiddlePartComponent implements OnInit {
  course : Course[] = [];
  class : Class[] = []; 
  isStudent = false;
  isStaff = false;
  courseEmpty = false;
  classEmpty = false;
  constructor(private obj : CourseService,private obj1 : ClassService) { }

  ngOnInit(): void {
    let userId = Number(localStorage.getItem("UserId"));
    let role = localStorage.getItem("Role");
    if(role == "Student"){
      this.obj.getEnrolledCourse(userId).subscribe(data=>{
        this.course = data;
        if(this.course[0] == null){
          this.courseEmpty= true;
        }else{
          this.courseEmpty = false;
        }
      })
      this.obj1.getStudentClass(userId).subscribe(data1=>{
        this.class = data1;
        {{debugger}}
        if(this.class[0] == null){
          this.classEmpty = true;
        }else{
          this.classEmpty = false;
        }
      })
      this.isStudent = true;
      this.isStaff = false;
    }else{
      this.obj.getAddedCourse(userId).subscribe(data=>{
        this.course = data;
      })
      this.obj1.getStaffClass(userId).subscribe(data1=>{
        this.class = data1;
      })
      this.isStaff = true;
      this.isStudent = false;
    }
    
  }

}
