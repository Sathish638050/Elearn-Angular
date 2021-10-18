import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { Course } from "Models/Course";

@Injectable({
    providedIn: 'root'
})
export class CourseService{
    constructor(private http:HttpClient){}

    getAllCourse():Observable<Course[]>
    {
        return this.http.get<Course[]>("https://localhost:44359/api/Student/GetAllCourse",{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        });
    }
    getCourseById(id : number):Observable<Course>{
        return this.http.get<Course>("https://localhost:44359/api/Student/GetCourseById?id="+id,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
              })
        })
    }
    getEnrolledCourse(id : number):Observable<Course[]>{
        return this.http.get<Course[]>("https://localhost:44359/api/Student/GetEnrollCourses?myid="+id,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }
    getAddedCourse(id : number):Observable<Course[]>{
        return this.http.get<Course[]>("https://localhost:44303/api/Staff/GetCourseByUser?id="+id,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }

    AddCourse(course : Course):Observable<Course>{
        return this.http.post<Course>("https://localhost:44303/api/Staff/AddCourses",course,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }
    



}
