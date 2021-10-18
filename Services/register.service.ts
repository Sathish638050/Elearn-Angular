import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "Models/Login";
import { UserAccount } from "Models/UserAccount";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RegisterService{
    req:string="https://localhost:44370/api/Auth/Register";
    constructor(private http:HttpClient){}

    Register(user:UserAccount):Observable<any>
    {
    return this.http.post<any>(this.req,user,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',    
    })}
    )}

    checkUsername(name:string):Observable<any>
    {
        return this.http.get<UserAccount>("https://localhost:44370/api/Auth/"+name,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }
}
