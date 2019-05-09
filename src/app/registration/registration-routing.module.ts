import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../core/guards/auth.guard';
import { REGISTRATION_ROUTES } from './shared/config/route.config';
import { RegistrationComponent } from './registration.component';
import { RegistrationHomeComponent } from './home/home.component';
import { RegistrationSuccessComponent } from './success/success.component';

export const routes: Routes = [
    {
        path: REGISTRATION_ROUTES.REGISTRATION,
        component: RegistrationComponent,
        children: [
            {
                path: REGISTRATION_ROUTES.HOME,
                component: RegistrationHomeComponent
            },
            {
                path: REGISTRATION_ROUTES.SUCCESS,
                component: RegistrationSuccessComponent,
                canActivate: [AuthGuard]
            },
            {
                path: '',
                redirectTo: REGISTRATION_ROUTES.HOME,
                pathMatch: 'full'
            },
        ]
        
    }   
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RegistrationRoutingModule {

}