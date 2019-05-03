import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (route.url[0] && route.url[0].path === 'success' && !localStorage.getItem("email")) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    }
}