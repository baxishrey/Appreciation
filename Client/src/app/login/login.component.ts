import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/_services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  returnUrl:string;

  constructor(
    private auth:AuthService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.auth.loggedIn=true;
    this.router.navigate([this.returnUrl]);
  }
}
