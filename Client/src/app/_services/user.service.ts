import { Injectable, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class UserService implements OnInit {
  
  users : string[]=[];
  ngOnInit(): void {
   
  }
  constructor(private _http: Http) {
    
   }
   getUsers(callback) {
    this._http.get("/api/home").subscribe(values => {      
      callback(values.json() as string[]);
    })
   }
}
