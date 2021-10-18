import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutComponent } from './about/about.component';
import { AddNewSatffComponent } from './add-new-satff/add-new-satff.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { PaymentComponent } from './payment/payment.component';
import { WorkplaneComponent } from './workplane/workplane.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { ImageEditComponent } from './image-edit/image-edit.component';
import { DetailEditComponent } from './detail-edit/detail-edit.component';
import { ContactComponent } from './contact/contact.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddClassComponent } from './add-class/add-class.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { UserListComponent } from './user-list/user-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { TopPartComponent } from './home/top-part/top-part.component';
import { MiddlePartComponent } from './home/middle-part/middle-part.component';
import { CoursePartComponent } from './home/course-part/course-part.component';
import { AddCOurseComponent } from './add-course/add-course.component';

export function tokenGet(){
  return localStorage.getItem("jwt");
}



@NgModule({
  declarations: [
    CoursePartComponent,
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CourseListComponent,
    AboutComponent,
    AddNewSatffComponent,
    CourseDetailsComponent,
    PaymentComponent,
    WorkplaneComponent,
    ProfileComponent,
    ImageEditComponent,
    DetailEditComponent,
    ContactComponent,
    AddTopicComponent,
    AddClassComponent,
    EditCourseComponent,
    UserListComponent,
    MessageListComponent,
    TopPartComponent,
    MiddlePartComponent,
    AddCOurseComponent,
  ],
  imports: [
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGet,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
