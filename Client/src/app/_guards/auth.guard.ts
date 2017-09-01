import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "app/_services/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router, private auth: AuthService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this.auth.loggedIn){
            this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}});
        }
        return this.auth.loggedIn;
    }

}
