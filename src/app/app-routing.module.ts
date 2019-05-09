import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './shared/config/route.config';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: APP_ROUTES.REGISTRATION
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}