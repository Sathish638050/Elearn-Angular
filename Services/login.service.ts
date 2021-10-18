import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "Models/Login";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    req:string="https://localhost:44370/api/Auth";
    constructor(private http:HttpClient){}

    Login(login:Login):Observable<any>
  {
    return this.http.post(this.req,login,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',    
          'Accept': 'text/html, application/xhtml+xml, */*'
    }),responseType:'text'}
    )}

    GetDetail(login : Login):Observable<any>{
        return this.http.post("https://localhost:44370/api/Auth/UserDetail",login,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }
}
