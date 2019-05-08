import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RegistrationSuccessComponent } from './success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { RegistrationService } from './registration.service';
import { APP_ROUTES } from './../shared/config/route.config';
import { AuthGuard } from './../core/guard/auth.guard';

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