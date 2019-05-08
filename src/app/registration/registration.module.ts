import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTES } from './../shared/route.config';
import { AuthGuard } from './../core/auth.guard';
import { RegistrationComponent } from './registration.component';
import { RegistrationSuccessComponent } from './success/success.component';
import { RegistrationService } from './registration.service';
import { SharedModule } from './../shared/shared.module';

const registrationRoutes: Routes = [
    {
        path: APP_ROUTES.HOME,
        component: RegistrationComponent
    },
    {
        path: APP_ROUTES.SUCCESS,
        component: RegistrationSuccessComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: APP_ROUTES.HOME
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(registrationRoutes),
        HttpClientModule,
        SharedModule
    ],
    exports: [RouterModule],
    declarations: [RegistrationComponent, RegistrationSuccessComponent],
    providers: [RegistrationService]
})
export class RegistrationModule{ }