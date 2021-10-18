import { AdminService } from './../../../Services/Admin.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'Models/Contact';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  contact : Contact[] = [];
  constructor(private obj:AdminService) { }

  ngOnInit(): void {
    this.obj.getMessage().subscribe(data=>{
      this.contact = data;
    })
  }

}
