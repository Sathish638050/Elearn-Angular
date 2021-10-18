import { Router, ActivatedRoute } from '@angular/router';
import { ClassService } from './../../../Services/Class.service';
import { Class } from './../../../Models/Class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  CourseId = 0;
  class : Class = {
    classId : 0,
    courseId : 0,
    startTime : '',
    endTime : '',
    clink : '',
    classDate : new Date()
  }
  class1 : Class = {
    classId : 0,
    courseId : 0,
    startTime : '',
    endTime : '',
    clink : '',
    classDate : new Date()
  }
  constructor(private obj : ClassService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.CourseId = Number(this.route.snapshot.paramMap.get('id'));
  }
  AddClass(c : Class){    
    this.class1.classId = 0;
    this.class1.startTime = this.class.startTime;
    this.class1.endTime = this.class.endTime;
    this.class1.clink = this.class.clink;
    this.class1.classDate = this.class.classDate;
    this.class1.courseId = this.CourseId;
    console.log(this.class1);
    this.obj.postClass(this.class1).subscribe(data=>{
      console.log("Class Posted");
      this.router.navigate(['/mycourse-list'])
    })
  }

}
