import { Router } from '@angular/router';
import { CourseService } from 'Services/course-list.service';
import { Course } from 'Models/Course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCOurseComponent implements OnInit {
  selectedFile = '';
  date = Date.now();
  course : Course = {
    courseId : 0,
    courseName : '',
    description : '',
    updateTime : new Date(),
    userId : 0,
    amount : 0,
    picture : ''
  }
  course1 : Course = {
    courseId : 0,
    courseName : '',
    description : '',
    updateTime : new Date(),
    userId : 0,
    amount : 0,
    picture : ''
  }

  constructor(private obj : CourseService,private router : Router) { }

  onselectFile(event : any){
    console.log(event.target.files[0].name);
    this.selectedFile =  event.target.files[0].name;
  }

  ngOnInit(): void {
  }

  AddCourse(a : Course){
    let UserId = Number(localStorage.getItem("UserId"));
    this.course1.courseId=0;
    this.course1.courseName = this.course.courseName;
    this.course1.description = this.course.description;
    this.course1.picture = this.selectedFile;
    this.course1.amount = this.course.amount;
    this.course1.userId = UserId;
    console.log(this.course1);
    this.obj.AddCourse(this.course1).subscribe(data=>{
      this.router.navigate(['/mycourse-list']).then(()=>{
        window.location.reload();
      })
    })
  }
}
