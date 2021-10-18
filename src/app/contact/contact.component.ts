import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'Models/Contact';
import { ContactService } from 'Services/Contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact : Contact = {
    cId : 0,
    name : '',
    email : '',
    message : ''
  }
  constructor(private obj:ContactService,private router : Router) { }

  ngOnInit(): void {
  }
  PostMessage(con : Contact){
    this.obj.PostMessage(con).subscribe(data=>{
      console.log("Contact Successfully");
      this.router.navigate(['/']);
    })
  }

}
