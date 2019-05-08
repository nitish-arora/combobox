import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { APP_ROUTES } from './../../shared/config/route.config';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (route.url[0] && route.url[0].path === APP_ROUTES.SUCCESS && !localStorage.getItem("email")) {
            this.router.navigate([`/${APP_ROUTES.HOME}`]);
            return false;
        }
        return true;
    }
}