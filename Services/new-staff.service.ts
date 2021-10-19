import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { NewStaff } from "Models/NewStaff";
import { UserAccount } from "Models/UserAccount";

@Injectable({
    providedIn: 'root'
})
export class NewStaffService{
    
    constructor(private http:HttpClient){}

    checkUsername1(name:string):Observable<any>
    {
        return this.http.get<UserAccount>("https://loginauthapi1.azurewebsites.net/api/Auth/"+name,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }
    checkUsername2(name:string):Observable<any>
    {
        return this.http.get<NewStaff>("https://loginauthapi1.azurewebsites.net/api/Auth/GetDetailByReqName?name="+name,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }
    AddReq(user:NewStaff):Observable<any>
    {
    return this.http.post<any>("https://loginauthapi1.azurewebsites.net/api/AddNewStaff/AddRequestStaff",user,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',    
    })}
    )}

}
