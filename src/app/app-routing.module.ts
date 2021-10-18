import { MessageListComponent } from './message-list/message-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { ContactComponent } from './contact/contact.component';
import { WorkplaneComponent } from './workplane/workplane.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutComponent } from './about/about.component';
import { AddNewSatffComponent } from './add-new-satff/add-new-satff.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { PaymentComponent } from './payment/payment.component';

import { ProfileComponent } from './profile/profile.component';
import { AddClassComponent } from './add-class/add-class.component';
import { AddCOurseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path : "register",component:RegisterComponent},
  {path:"courselist" ,component:CourseListComponent},
  {path:"about",component:AboutComponent}  ,
  {path:"newstaff-req",component:AddNewSatffComponent},
  {path:"course-detail/:id",component:CourseDetailsComponent},
  {path:"payment",component:PaymentComponent},
  {path:"mycourse-list",component:CourseListComponent},
  {path:"workplace/:id",component:WorkplaneComponent},
  {path:"profile",component : ProfileComponent},
  {path:"contact",component : ContactComponent},
  {path:"addtopic/:id",component:AddTopicComponent},
  {path:"addclass/:id",component:AddClassComponent},
  {path:"edit-course/:id",component:EditCourseComponent},
  {path:"student-list",component:UserListComponent},
  {path:"staff-list",component:UserListComponent},
  {path:"newstaff-list",component:UserListComponent},
  {path:"contact-list",component:MessageListComponent},
  {path:"add-course",component:AddCOurseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
