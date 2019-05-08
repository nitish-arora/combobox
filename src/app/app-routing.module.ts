import { NgModule } from '@angular/core';
import { APP_ROUTES } from './shared/config/route.config';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: APP_ROUTES.HOME
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