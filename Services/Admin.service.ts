import { NewStaff } from 'Models/NewStaff';
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { UserAccount } from "Models/UserAccount";
import { Contact } from 'Models/Contact';

@Injectable({
    providedIn: 'root'
})
export class AdminService{
    constructor(private http:HttpClient){}

    getStudentList():Observable<UserAccount[]>{
        return this.http.get<UserAccount[]>("https://localhost:44370/api/Auth/GetStudentList",{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }

    getStaffList():Observable<UserAccount[]>{
        return this.http.get<UserAccount[]>("https://localhost:44370/api/Auth/GetStaffList",{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }

    getNewUserList():Observable<NewStaff[]>{
        return this.http.get<NewStaff[]>("https://localhost:44370/api/Auth/GetNewRequest",{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }

    Accept(id:number):Observable<any>{
        return this.http.put<any>("https://localhost:44370/api/Auth/EditRequest?id="+id,{
            headers:new HttpHeaders(
                {
                  'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Method':'*'
                })
        })
    }

    getMessage():Observable<Contact[]>{
        return this.http.get<Contact[]>("https://localhost:44370/api/Contact/GetContactDetails",{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }
}
