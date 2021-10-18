import { Payment } from './../Models/Payment';
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PaymentServices{
    constructor(private http:HttpClient){}

    MakePayment(user:Payment):Observable<any>
    {
        return this.http.post<any>("https://localhost:44359/api/Student/MakePayment",user,{
            headers:new HttpHeaders({
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Method':'*'
            })
        })
    }
}
