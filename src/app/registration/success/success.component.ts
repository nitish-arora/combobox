import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})
export class RegistrationSuccessComponent {
    email: string;
    constructor(private router: Router) {}

    ngOnInit() {
        this.email = localStorage.getItem("email");
    }

    goToRegistration() {
        this.router.navigate(['/home']).then(() => {
            localStorage.clear();
        })
    }
}