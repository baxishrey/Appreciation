import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'


@Injectable()
export class AppreciateService {

  constructor(private _httpService: Http) { }
  
  sendMail(user: string, message: string) {
    var body = {targetUser: user, message: message}
    this._httpService.post("/api/appreciate", {targetuser: user, message: message})
      .map((response: Response) => {
        let obj = response.json();
        console.log(JSON.stringify(obj));
      })
  }
}
