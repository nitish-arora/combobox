import { Component, ViewChild } from '@angular/core';
import { RegisterUser } from './register.class';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from './../config/route.config';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
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
            this.router.navigate(['success']);
            localStorage.setItem("email", this.registerModel.email);
        }
    }

    /**
     * output function emitted for combobox selection
     * @param games array of selected games
     */
    onGameSelection(games) {
        this.selectedGames = games.join(',');
    }
}