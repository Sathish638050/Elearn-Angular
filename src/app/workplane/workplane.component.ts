import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Topic } from 'Models/Topic';
import { TopicService } from 'Services/Topic.service';

@Component({
  selector: 'app-workplane',
  templateUrl: './workplane.component.html',
  styleUrls: ['./workplane.component.css']
})
export class WorkplaneComponent implements OnInit {
  Topiclist : Topic[] = [];
  emptyList = false;
  constructor(private obj : TopicService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.obj.getTopicByCourse(id).subscribe(data=>{
      if(data[0] == null){
        this.emptyList = true;
      }
      this.Topiclist = data;
    })
  }

}
