import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './../core/guards/auth.guard';
import { RegistrationComponent } from './registration.component';
import { RegistrationHomeComponent } from './home/home.component';
import { RegistrationSuccessComponent } from './success/success.component';
import { RegistrationService } from './shared/services/registration.service';
import { SharedModule } from './../shared/shared.module';
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RegistrationRoutingModule
    ],
    declarations: [RegistrationComponent, RegistrationHomeComponent ,RegistrationSuccessComponent],
    providers: [RegistrationService]
})
export class RegistrationModule{ }