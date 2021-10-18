import { CourseEnrollService } from './../../../Services/CourseEnroll.service';
import { PaymentServices } from './../../../Services/Payment.service';
import { Component, OnInit } from '@angular/core';
import { Payment } from 'Models/Payment';
import { Router } from '@angular/router';
import { CourseEnroll } from 'Models/CourseEnroll';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  amount =0;
  courseId = 0;
  userId = 0;

  user : Payment = {
    custId : 0,
    name : '',
    debit : '',
    cvv : '',
    expiry : '',
    userId : 0,
    courseId : 0,
  }

  enroll : CourseEnroll = {
    enrollId : 0,
    userId : 0,
    courseId : 0
  }
  constructor(private obj : PaymentServices,private obj1 : CourseEnrollService,private router : Router) { }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem("UserId"));
    if(this.userId == 0){
      this.router.navigate(['/login']);
    }else{
      this.amount = Number(localStorage.getItem("PaymentAmount"));
      this.courseId = Number(localStorage.getItem("PaymentCourseId"));
    }
  }

  Payment(user : Payment){
    user.courseId = this.courseId;
    user.userId = this.userId;
    this.obj.MakePayment(user).subscribe(
      data=>{
        console.log("Payment Successfully");
        this.enroll.courseId = this.courseId;
        this.enroll.userId = this.userId;
        this.obj1.CourseEnroll(this.enroll).subscribe(data=>{
          console.log("Course Enroll Successfully...");
        })
        this.router.navigate(['/courselist'])
      }
    )
  }
}
