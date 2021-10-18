import { CourseService } from 'Services/course-list.service';
import { Course } from 'Models/Course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-part',
  templateUrl: './course-part.component.html',
  styleUrls: ['./course-part.component.css']
})
export class CoursePartComponent implements OnInit {
course : Course[] = [];
  constructor(private obj:CourseService) { }

  ngOnInit(): void {
    this.obj.getAllCourse().subscribe(data=>{
      this.course = data;
    })
  }

}
