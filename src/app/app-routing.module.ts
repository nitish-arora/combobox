import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './shared/route.config';

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