import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'Models/Course';
import { CourseService } from 'Services/course-list.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  isStudent = false;
  isAdmin = false;
  isStaff = false;
  enrollcourse : Course[] = [];
  already = false;
  constructor(private obj : CourseService,private router : Router,private Route : ActivatedRoute) { }
  CourseDetail : Course={
    courseId: 0,
    courseName: '',
    description: '',
    picture: '',
    amount: 0,
    userId: 0,
    updateTime: new Date()
  }; 

  ngOnInit(): void {
    let Role = localStorage.getItem("Role");
    if(Role == "Student"){
      this.isStudent = true;
    }
    let userId = Number(localStorage.getItem("UserId"));
    const id = Number(this.Route.snapshot.paramMap.get('id'));
    this.obj.getEnrolledCourse(userId).subscribe(data1=>{
      this.enrollcourse = data1;
      
      this.already = this.enrollcourse.some(function(al){return al.courseId == id});
    })
    this.obj.getCourseById(id).subscribe(data=>{
      this.CourseDetail = data;
    })
    console.log(id);
  }

  PaymentUser(){
    localStorage.setItem("PaymentAmount",this.CourseDetail.amount.toString());
    localStorage.setItem("PaymentCourseId",this.CourseDetail.courseId.toString());
    this.router.navigate(['/payment']);
  }
}
