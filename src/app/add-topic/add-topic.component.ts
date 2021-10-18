import { Router, ActivatedRoute } from '@angular/router';
import { TopicService } from 'Services/Topic.service';
import { Topic } from './../../../Models/Topic';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
  courseId = 0 ;
  materialPath  = '';
  videoPath = '';
  topic : Topic = {
    topicId : 0,
    topicName : '',
    topicDesc : '',
    materialPath : '',
    videoPath : '',
    courseId : 0
  }
  topic1 : Topic = {
    topicId : 0,
    topicName : '',
    topicDesc : '',
    materialPath : '',
    videoPath : '',
    courseId : 0
  }
  constructor(private obj:TopicService,private router : Router,private route : ActivatedRoute) { }
  onselectMaterial(event : any){
    console.log(event.target.files[0].name);
    this.materialPath =  event.target.files[0].name;
  }
  onselectVideo(event : any){
    this.videoPath = event.target.files[0].name;
  }
  AddTopic(top : Topic){
    this.topic1.topicId = 0;
    this.topic1.courseId = this.courseId;
    this.topic1.topicName = this.topic.topicName;
    this.topic1.topicDesc = this.topic.topicDesc;
    this.topic1.materialPath = this.materialPath;
    this.topic1.videoPath = this.videoPath;
    console.log(this.topic1);
    this.obj.AddTopic(this.topic1).subscribe(data=>{
      console.log("Topic Added");
      this.router.navigate(['/mycourse-list']);
    })
  }
  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
