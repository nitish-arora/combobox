import { Component, ViewChild } from '@angular/core';
import { RegisterUser } from './register.class';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    registerModel: RegisterUser = new RegisterUser();
    @ViewChild('registrationForm') registrationForm;
    selectableFields;
    title: string = "game";
    placeholder: string = "Games"
    selectedGames: string;

    constructor(
        private registrationService: RegistrationService,
        private router: Router
    ) {  }
  
    ngOnInit() {
      this.registrationService.getSelectableFields().subscribe(res => {
        this.selectableFields = res['games'];
      });
    }
  
    fieldSelection(games) {
      this.selectedGames = games;
    }
  
    register() {
        if(this.registrationForm.valid) {
            this.router.navigate(['/success']);
            localStorage.setItem("email", this.registerModel.email);
        }
      console.log(this.registrationForm.value);
    }
}