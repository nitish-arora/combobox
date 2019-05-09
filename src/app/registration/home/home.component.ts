import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterUser } from './../shared/models/register-user.class';
import { RegistrationService } from './../shared/services/registration.service';
import { REGISTRATION_ROUTES } from './../shared/config/route.config';

@Component({
    selector: 'app-registration-register',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class RegistrationHomeComponent {
    registerModel: RegisterUser = new RegisterUser();
    @ViewChild('registrationForm') registrationForm;
    selectableFields;
    placeholder: string = "Games";
    scrollHeight: string = "160px"
    selectedGames: string;

    constructor(
        private registrationService: RegistrationService,
        private router: Router
    ) {  }
  
    /**
     * calling api to get list of games for drop down and clear local storage
     */
    ngOnInit() {
      localStorage.clear();
      this.registrationService.getSelectableFields().subscribe(res => {
        this.selectableFields = res['games'];
      });
    }
  
    /**
     * if valid email is entered navigate to success page
     */
    register() {
        if(this.registrationForm.valid) {
            this.router.navigate([`/${REGISTRATION_ROUTES.REGISTRATION}`, REGISTRATION_ROUTES.SUCCESS]);
            localStorage.setItem("email", this.registerModel.email);
        }
    }

    /**
     * output function emitted for combobox selection
     * @param games array of selected games
     */
    gameSelected(games) {
        this.selectedGames = games.join(',');
    }
}