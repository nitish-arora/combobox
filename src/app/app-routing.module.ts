import { NgModule } from '@angular/core';
import { APP_ROUTES } from './config/route.config';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationSuccessComponent } from './registration/success/success.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: APP_ROUTES.HOME
    },
    {
        path: APP_ROUTES.HOME,
        component: RegistrationComponent
    },
    {
        path: APP_ROUTES.SUCCESS,
        component: RegistrationSuccessComponent
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