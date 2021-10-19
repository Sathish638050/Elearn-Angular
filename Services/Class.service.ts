import { Course } from 'Models/Course';
import { Class } from "Models/Class";
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClassService{
    constructor(private http:HttpClient){}

    postClass(cla : Class):Observable<any>{
        return this.http.post<Class>("https://staffcontrollapi.azurewebsites.net/api/Staff/ScheduleClass",cla,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
              })
        })
    }

    getStudentClass(id : number):Observable<Class[]>{
        return this.http.get<Class[]>("https://studentapi1.azurewebsites.net/api/Student/Class?id="+id,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }

    getStaffClass(id : number):Observable<Class[]>{
        return this.http.get<Class[]>("https://staffcontrollapi.azurewebsites.net/api/Staff/getClassStaff?id="+id,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }

}
