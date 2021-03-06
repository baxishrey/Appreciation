import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from "app/app.routing";
import { AuthService } from "app/_services/auth.service";
import { AuthGuard } from "app/_guards";
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from "app/_services/user.service";
import { AppreciateService } from './_services/appreciate.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    AppreciateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
