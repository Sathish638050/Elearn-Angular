import { CourseEnroll } from './../Models/CourseEnroll';
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CourseEnrollService{
    constructor(private http:HttpClient){}
    
    CourseEnroll(user:CourseEnroll):Observable<any>{
        return this.http.post<any>("https://studentapi1.azurewebsites.net/api/Student/CourseEnroll",user,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
              })
        })
    }
}
