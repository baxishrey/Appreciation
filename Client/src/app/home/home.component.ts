import { Component, OnInit } from '@angular/core';
import { UserService } from "app/_services/user.service";
import { AppreciateService } from "app/_services/appreciate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList:string[] = [];
  selectedUser:string;
  constructor(
    private userService: UserService,
    private appreciateService: AppreciateService) {
   }

  ngOnInit() {
    this.userService.getUsers(result => {
      this.userList = result;
    });
  }

  appreciate() {
    console.log(this.selectedUser);
    this.appreciateService.sendMail();
  }
}
