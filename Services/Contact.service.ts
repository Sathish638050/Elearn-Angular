import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contact } from "Models/Contact";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactService{
    constructor(private http:HttpClient){}

    PostMessage(message : Contact):Observable<any>{
        return this.http.post<Contact>("https://loginauthapi1.azurewebsites.net/api/Contact/Contact", message,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        });
    }

    GetMessages():Observable<Contact[]>{
        return this.http.get<Contact[]>("https://loginauthapi1.azurewebsites.net/api/Contact/GetContactDetails",{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
              })
        });
    }
}
