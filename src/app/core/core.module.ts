import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
    imports: [RouterModule],
    exports: [],
    declarations: [],
    providers: [ ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                AuthGuard
            ]
        };
    }
}