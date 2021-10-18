import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "Models/Login";
import { UserAccount } from "Models/UserAccount";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProfileService{
    constructor(private http:HttpClient){}

    getUserProfile(id : number):Observable<UserAccount>{
        return this.http.get<UserAccount>("https://localhost:44359/api/Student/UserProfile?userid="+id,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        });
    }

    UpdateImg(id:number,user:UserAccount):Observable<any>{
        return this.http.put<UserAccount>("https://localhost:44359/api/Student/UpdateUserPic?id="+id,user,{
            headers:new HttpHeaders(
                {
                  'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Method':'*'
                })
        })
    }

    UpdateDetails(id:number,user : UserAccount):Observable<any>{
        return this.http.put<UserAccount>("https://localhost:44359/api/Student/UpdateUser?id="+id,user,{
            headers:new HttpHeaders(
                {
                  'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Method':'*'
                })
        })
    }
}
