import { Topic } from './../Models/Topic';
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TopicService{
    constructor(private http:HttpClient){}

    getTopicByCourse(id : number):Observable<Topic[]>{
        return this.http.get<Topic[]>("https://studentapi1.azurewebsites.net/api/Student/Topics?cid="+id,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }

    AddTopic(topic : Topic):Observable<any>{
        return this.http.post<any>("https://staffcontrollapi.azurewebsites.net/api/Staff/AddTopic",topic,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }    
    
}
