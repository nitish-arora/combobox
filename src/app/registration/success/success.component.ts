import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { REGISTRATION_ROUTES } from './../shared/config/route.config';

@Component({
    selector: 'app-registration-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})
export class RegistrationSuccessComponent {
    email: string;
    constructor(private router: Router) {}

    /**
     * get email from local storage in order to show it on success page
     */
    ngOnInit() {
        this.email = localStorage.getItem("email");
    }

    /**
     * navigate to home and clear localstorage on going back to registration
     */
    goToRegistration() {
        this.router.navigate([`/${REGISTRATION_ROUTES.REGISTRATION}`, REGISTRATION_ROUTES.HOME]).then(() => {
            localStorage.clear();
        })
    }
}